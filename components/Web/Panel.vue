<template>
    <div class="web-panel">
        <slot></slot>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .web-panel {
        width: 1200px;
        height: calc(100% - 50px);
        margin: 0 auto;
        display: flex;
        justify-content: center;
        padding-bottom: 20px;
    }
</style>