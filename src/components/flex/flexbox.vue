<template>
    <div class="j-flexbox"
         :class="{'j-flexbox-col': orient === 'vertical', 'j-flexbox-row': orient === 'horizontal'}" :style="styles">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'flex',
    props: {
        margin: {
            type: Number,
            default: 10
        },
        orient: {
            type: String,
            default: 'horizontal'
        },
        justify: String,
        align: String,
        wrap: String,
        direction: String
    },
    computed: {
        styles () {
            const styles = {
                'justify-content': this.justify,
                '-webkit-justify-content': this.justify,
                'align-items': this.align,
                '-webkit-align-items': this.align,
                'flex-wrap': this.wrap,
                '-webkit-flex-wrap': this.wrap,
                'flex-direction': this.direction,
                '-webkit-flex-direction': this.direction
            }
            return styles
        }
    }
}
</script>

<style lang="scss">
    .j-flexbox {
        display: flex;
        width: 100%;
        align-items: center;
        &.j-flexbox-col {
            flex-direction: column;
            > .j-flexbox-item {
                width: 100%;
            }
        }
        &.j-flexbox-row {
            flex-direction: row;
        }
        .j-flexbox-item {
            flex: 1;
            &:first-child {
                margin-top: 0 !important;
                margin-left: 0 !important;
            }
        }
    }
</style>
