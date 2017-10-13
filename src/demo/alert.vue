<template>
    <div>
        <button @click="show = !show">测试弹窗</button>
        <alert v-model="show" title="Tip" content="username is undefined" button-text="ok"></alert>
        <button @click="plugin">测试插件弹窗</button>
    </div>
</template>

<script>
import Alert from '../components/alert'

export default {
    components: {Alert},
    data () {
        return {
            show: false
        }
    },
    methods: {
        plugin () {
            this.$tiu.alert.show({
                title: '提示',
                content: '用户名为空'
            })
        }
    }
}
</script>

<style lang="scss">

</style>
