<template>
    <div class="panel-class">
        <slot></slot>
    </div>
</template>

<script>
export default {
    data () {
        return {
        }
    },
    components: {
        
    }
}
</script>

<style lang="scss" scoped>
    .panel-class {
        width: calc(100% - 220px - 80px);
        background: #f9f9f9;
        margin: 30px 25px 30px 20px;
        padding: 0 10px;
        box-sizing: border-box;
        position: relative;
        left: 260px;
    }
</style>