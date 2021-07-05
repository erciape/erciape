<template>
    <div id="admin">
        <Menu></Menu>
        <Nuxt />
    </div>
</template>

<script>
import Menu from '@/components/Admin/Menu'
export default {
    components: {
        Menu,
    }
}
</script>

<style lang="scss" scoped>
    #admin {
        width: 100%;
        background: #eee;
        display: flex;
        justify-content: flex-start;
    }
</style>