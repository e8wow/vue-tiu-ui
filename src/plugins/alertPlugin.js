import { mergeOptions } from '../libs/plugin_helper'
import AlertComponent from '../components/alert/index.vue'

let $vm

const plugin = {
    install (vue) {
        const Alert = vue.extend(AlertComponent)
        if (!$vm) {
            $vm = new Alert({
                el: document.createElement('div')
            })
            document.body.appendChild($vm.$el)
        }

        const alert = {
            show (options = {}) { // 插件show方法接收options参数
                if (typeof options === 'object') {
                    mergeOptions($vm, options)// 将options合并到插件组件中
                } else if (typeof options === 'string') {
                    $vm.content = options// content直接显示options
                }
                this.watcher && this.watcher()
                this.watcher = $vm.$watch('showValue', (val) => {
                    val && options.onShow && options.onShow($vm)
                    if (val === false && options.onHide) {
                        options.onHide($vm)
                        this.watcher && this.watcher()
                    }
                })
                $vm.showValue = true
            },
            hide () {
                $vm.showValue = false
                this.watcher && this.watcher()
                this.watcher = null
            }
        }

        if (!vue.$tiu) {
            vue.$tiu = {
                alert
            }
        } else {
            vue.$tiu.alert = alert
        }

        vue.mixin({
            created: function () {
                this.$tiu = vue.$tiu
            }
        })
    }
}

export default plugin
export const install = plugin.install
