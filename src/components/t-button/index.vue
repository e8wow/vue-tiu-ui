<template>
    <button class="tiu-button" :class="classes" :type="actionType">
        <slot>{{text}}</slot>
        <ripple :color="rColor"/>
    </button>
</template>

<script>
import Ripple from '../ripple.vue'

export default {
    name: 't-button',
    components: {Ripple},
    props: {
        type: {
            default: 'default'
        },
        disabled: Boolean,
        text: String,
        actionType: String,
        rippleColor: String
    },
    computed: {
        classes () {
            return [
                {},
                `tiu-button-${this.type}`
            ]
        },
        rColor () {
            if (this.rippleColor) {
                return this.rippleColor
            } else if (this.type === 'primary' || this.type === 'delete') {
                return 'rgba(255,255,255,0.3)'
            }
        }
    }
}
</script>

<style lang="scss">
    @import "../../styles/tiu-button/tiu-button";
</style>
