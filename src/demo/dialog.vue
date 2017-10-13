<template>
    <div>
        <button @click="show = !show">测试</button>
        <tiu-dialog :show="show" @change="change">
            <div>123</div>
        </tiu-dialog>
    </div>
</template>

<script>
import TiuDialog from '../components/dialog/tiu-dialog.vue'

export default {
    components: {TiuDialog},
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
