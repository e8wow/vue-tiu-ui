<template>
    <div class="tiu-alert">
        <t-dialog v-model="showValue"
                  :hide-on-blur="hideOnBlur"
                  @on-hide="$emit('on-hide')"
                  @on-show="$emit('on-show')">
            <div class="tiu-dialog-hd">
                <strong class="tiu-dialog-hd-title">{{title}}</strong>
            </div>
            <div class="tiu-dialog-bd">
                <slot>
                    <div v-html="content"></div>
                </slot>
            </div>
            <div class="tiu-dialog-ft">
                <div @click="_hide" class="tiu-dialog-btn tiu-dialog-btn-primary">{{buttonText || "确定"}}</div>
            </div>
        </t-dialog>
    </div>
</template>

<script>
import TDialog from '../t-dialog'

export default {
    name: 'alert',
    components: {TDialog},
    created () {
        if (typeof this.value !== 'undefined') {
            this.showValue = this.value
        }
    },
    props: {
        value: Boolean,
        title: String,
        content: String,
        hideOnBlur: {
            type: Boolean,
            default: false
        },
        buttonText: String
    },
    data () {
        return {showValue: false}
    },
    methods: {
        _hide () {
            this.showValue = false
        }
    },
    watch: {
        value (val) {
            this.showValue = val
        },
        showValue (val) {
            this.$emit('input', val)
        }
    }
}
</script>

<style lang="scss">
    @import "../../styles/tips/tiu-alert";
</style>
