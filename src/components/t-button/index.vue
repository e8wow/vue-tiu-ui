<template>
    <button class="tiu-button" :class="classes" :type="actionType">
        <slot>{{text}}</slot>
    </button>
</template>

<script>
export default {
    name: 't-button',
    props: {
        type: {
            default: 'default'
        },
        disabled: Boolean,
        text: String,
        actionType: String
    },
    computed: {
        classes () {
            return [
                {},
                `tiu-button-${this.type}`
            ]
        }
    }
}
</script>

<style lang="scss">
    @import "../../styles/tiu-button/tiu-button";
</style>
