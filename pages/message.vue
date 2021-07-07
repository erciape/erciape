<template>
    <article id="message">
        <Header :title="pageName" :type="type"></Header>
    </article>
</template>

<script>
import Header from '@/components/Web/Header'
export default {
    name: 'message',
    head () {
        return {
            title: '留言板 | 二次猿',
            meta: [
                { hid: 'description-message', name: 'description', content: '二次猿，二次猿博客，二次猿的技术博客, 留言板' }
            ]
        }
    },
    data () {
        return {
            pageName: '留言板',
            type: 'message'
        }
    },
    components: {
        Header
    }
}
</script>

<style lang="scss" scoped>

</style>