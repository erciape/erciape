<template>
    <article id="categories">
        <Header :title="pageName" :type="type"></Header>
        <section class="white-card container animate__animated animate__slideInUp categories">
            <p class="title"><i class="iconfont iconbiaoqian"></i>文章标签</p>
            <div class="tags">
                <span v-for="(item, index) in tags_count" :key="index" class="tags-2" :class="{select_article: article == index}" :style="{background: colorList[Math.random().toString().substring(4, 5)]}" @click="article = index">
                    {{ index | articleTag }} {{ item }}
                </span>
            </div>
        </section>
        <!-- <section class="article-list container animate__animated animate__slideInUp">
            <ImgCard v-for="(item, index) in list" :key="index" :article="item" shape="square"></ImgCard>
            <PagingPage v-if="article_list.data && article_list.data.length" :max_pages="Math.ceil(article_list.pages_info.count / on_page_count)" @increase="page++" @decrease="page--"></PagingPage>
        </section> -->
    </article>
</template>

<script>
import Header from '@/components/Web/Header'
import { mapGetters, mapState } from 'vuex'
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
            type: 'categories',
            article: 'HTML+CSS',
            page: 1,
            on_page_count: 12,
            list: [
                { router: '/article/000001', title: 'vue基础', time: '2020-07-10', class: '前端', color: '#ccc' } // 改造后的数据样板
            ],
            colorList: ['#F5EEF8', '#F9EBEA', '#D7BDE2', '#FEF9E7', '#D2FAC8', '#6A6226', '#1AF2F6', '#ACC156', '#9695ce', '#78808d'],
            tag_count: 10
        }
    },
    // async fetch ({ store, query }) {
    //     let tags = query.class || 'HTML+CSS'
    //     await store.dispatch('webside/getWebsideInfo')
    //     await store.dispatch('article/getArticleList', {
    //         type: 2,
    //         page: 1,
    //         page_count: 12,
    //         article_tags: tags
    //     })
    // },
    // asyncData ({query}) {
    //     return {
    //         article: query.class || 'HTML+CSS',
    //     }
    // },
    // mounted () {
    //     this.list = this.article_list.data
    //     if ( this.isMobile ) {
    //         this.search()
    //     }
    //     process.browser &&document.querySelectorAll("pre code").forEach(block => Prism.highlightElement(block));
    // },
    // computed: {
    //     ...mapGetters(
    //         'webside', {
    //             tags_count: 'tags_count'
    //         },
    //     ),
    //     ...mapGetters(
	// 		'article', {
	// 			article_list: 'article_list'
	// 		}
	// 	),
    //     ...mapState({
    //         'isMobile': state => state.webside.isMobile
    //     })
    // },
    watch: {
        article () {
            this.page = 1
            this.search()
        },
        page () {
            this.search()
        }
    },
    components: {
        Header
    }
}
</script>

<style lang="scss" scoped>
    #categories{
        padding-bottom: 20px;
        section.categories{
            margin: 40px auto;
            .title {
                margin-bottom: 40px;
            }
            div.tags{
                margin-bottom: 20px;
                display: flex;
                flex-wrap: wrap;
                .select_article{
                    background: linear-gradient(to bottom right,#ff5e3a 0,#ff2a68 100%)!important;
                    box-shadow: 2px 5px 10px #aaa!important;
                    color: white;
                }
            }
        }
        section.article-list{
            margin-top: 20px;
            display: flex;
            flex-wrap: wrap;
        }
    }
    @media screen and (max-width: 1024px) {
        #categories {
            section.article-list {
                justify-content: center;
            }
        }
    }
</style>