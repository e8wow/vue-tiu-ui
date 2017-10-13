<template>
    <div>
        <button @click="show = !show">测试</button>
        <t-dialog :show="show" @change="change">
        </t-dialog>
    </div>
</template>

<script>
import TDialog from '../components/t-dialog'

export default {
    components: {TDialog},
    data () {
        return {
            show: false
        }
    },
    methods: {
        change (show) {
            this.show = show
        }
    }
}
</script>

<style lang="scss">

</style>
