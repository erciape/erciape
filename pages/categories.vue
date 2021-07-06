<template>
    <article id="categories">
        <Header :title="pageName" :type="type"></Header>
    </article>
</template>

<script>
import Header from '@/components/Web/Header'
export default {
    name: 'categories',
    head () {
        return {
            title: '二次猿-文章分类',
            meta: [
                { hid: 'description-categories', name: 'description', content: '二次猿，二次猿博客，二次猿的技术博客, 文章分类' }
            ]
        }
    },
    data () {
        return {
            pageName: '文章分类',
            type: 'categories'
        }
    },
    components: {
        Header
    }
}
</script>

<style lang="scss" scoped>

</style>