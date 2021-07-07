<template>
    <article id="friends">
        <Header :title="pageName" :type="type"></Header>
        <section class="animate__slideInUp container animate__animated white-card">
            <div class="head">
                <span>欢迎交换友情链接 </span><router-link tag="a" to="/author">快来联系我</router-link>
            </div>
            <div class="links" v-for="(classes, index) in links" :key="index">
                <div class="head">{{ classes.name }}</div>
                <div class="link">
                    <Links v-for="item in classes.data" :data="item" :key="item.id"></Links>
                </div>
            </div>
        </section>
    </article>
</template>

<script>
import Header from '@/components/Web/Header'
import Links from '@/components/Web/Links'
import { mapState } from 'vuex'
export default {
    name: 'friends',
    head () {
        return {
            title: '友情链接 | 二次猿',
            meta: [
                { hid: 'description-friends', name: 'description', content: '二次猿，二次猿博客，二次猿的技术博客, 友情链接' }
            ]
        }
    },
    data () {
        return {
            pageName: '友情链接',
            type: 'friends'
        }
    },
    // async fetch({ store }) {
    //     await store.dispatch('webside/getFriendLinks')
    // },
    // async mounted () {
    //     if ( this.friend_links.length ) {
    //         this.links = {
    //             technology: {name: '技术博客', data: []},
    //             friend: {name: '朋友的博客', data: []},
    //             beautiful: {name: '漂亮的博客', data: []},
    //             tool: {name: '工具类', data: []}
    //         }
    //         this.friend_links.forEach(item => {
    //             if ( item.class == 'technology' ) {
    //                 this.links.technology.data.push( item )
    //             } else if ( item.class == 'friend' ) {
    //                 this.links.friend.data.push( item )
    //             } else if ( item.class == 'beautiful' ) {
    //                 this.links.beautiful.data.push( item )
    //             } else if ( item.class == 'tool' ) {
    //                 this.links.tool.data.push( item )
    //             }
    //         })
    //     }
    // },
    components: {
        Header,
        Links
    },
    computed: {
        ...mapState({
            'friend_links': state => state.webside.friend_links
        })
    }
}
</script>

<style lang="scss" scoped>
    #friends {
        font-size: 16px;
        margin-bottom: 40px;
        section {
            width: 1200px;
            padding: 0px 40px;
            margin: -40px auto 0px auto;
            .head {
                span {
                    font-size: 24px;
                }
            }
            .links {
                width: 100%;
                .head {
                    border-left: 5px solid $elementBlue;
                    padding-bottom: 0;
                    line-height: 26px;
                    padding-left: 10px;
                    border-bottom: none;
                    margin: 40px 0;
                }
                .link {
                    display: flex;
                    justify-content: flex-start;
                    flex-wrap: wrap;
                    > div {
                        margin: 0 20px 40px 0;
                    }
                }
            }
        }
    }
    @media screen and (max-width: 1024px) {
        #friends {
            section {
                width: 90%;
                padding: 0;
                div.section {
                    div.long, div.circle {
                        flex-wrap: wrap;
                        > div {
                            width: 100%;
                        }
                    }
                    div.circle {
                        > div {
                            margin-bottom: 20px;
                        }
                    }
                    div.program {
                        text-align: center;
                    }
                }
            }
        }
    }
</style>