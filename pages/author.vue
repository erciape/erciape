<template>
    <article id="author">
        <Header :title="pageName" :type="type"></Header>
    </article>
</template>

<script>
import Header from '@/components/Web/Header'
export default {
    name: 'author',
    head () {
        return {
            title: '关于 | 二次猿',
            meta: [
                { hid: 'description-author', name: 'description', content: '二次猿，二次猿博客，二次猿的技术博客, 作者' }
            ]
        }
    },
    data () {
        return {
            pageName: '二次猿',
            type: 'author'
        }
    },
    components: {
        Header
    }
}
</script>

<style lang="scss" scoped>

</style>