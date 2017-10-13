<template>
    <div>
        <button @click="show = !show">测试弹窗</button>
        <alert v-model="show" title="Tip" content="username is undefined" button-text="ok"></alert>
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
    }
}
</script>

<style lang="scss">

</style>
