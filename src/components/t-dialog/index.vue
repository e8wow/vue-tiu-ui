<template>
    <div class="tiu-t-dialog">
        <transition :name="maskTransition">
            <div class="tiu-mask" @click="hide" v-show="show"></div>
        </transition>
        <transition :name="dialogTransition">
            <div :class="dialogClass" v-show="show" :style="dialogStyle">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 't-dialog',
    model: {
        prop: 'show',
        event: 'change'
    },
    props: {
        show: {
            type: Boolean,
            default: false
        },
        maskTransition: {
            type: String,
            default: 'tiu-mask'
        },
        dialogTransition: {
            type: String,
            default: 'tiu-dialog'
        },
        dialogClass: {
            type: String,
            default: 'tiu-dialog'
        },
        dialogStyle: Object,
        hideOnBlur: {
            type: Boolean,
            default: true
        }
    },
    watch: {
        show (val) {
            this.$emit('update:show', val)
            this.$emit(val ? 'on-show' : 'on-hide')
        }
    },
    methods: {
        hide () {
            if (this.hideOnBlur) {
                this.$emit('update:show', false)
                this.$emit('change', false)
            }
        }
    }
}
</script>

<style lang="scss">
    @import "../../styles/transition";
    @import "../../styles/tiu-tips/tiu-mask";
    @import "../../styles/tiu-tips/tiu-dialog";
</style>
