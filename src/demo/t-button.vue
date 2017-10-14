<template>
    <div>
        <t-button style="margin-top: 10px;">确定</t-button>
        <t-button style="margin-top: 10px;" type="primary">确定</t-button>
        <t-button style="margin-top: 10px;" type="delete">确定</t-button>
    </div>
</template>

<script>
import TButton from '../components/t-button'

export default {
    components: {TButton}
}
</script>

<style lang="scss">
    @import "../styles/tiu-button/tiu-button";
</style>
