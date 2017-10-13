<template>
    <div>
        <flex justify="space-between">
            <flex-item :col="6">123</flex-item>
            <flex-item :col="2">321</flex-item>
        </flex>
    </div>
</template>

<script>
import { Flex, FlexItem } from '../components/flexbox'

export default {
    components: {Flex, FlexItem}
}
</script>
