<template>
    <article id="index">
        <Header :title="pageName" :type="type"></Header>
        <section class="animate__slideInUp container animate__animated article">
            <div class="article-list">
                <ArticleCard></ArticleCard>
                <ArticleCard></ArticleCard>
                <ArticleCard></ArticleCard>
                <ArticleCard></ArticleCard>
				<WebPaginate></WebPaginate>
			</div>
            <div class="info-column">
                <div class="card">
                    <div class="author">
                        <div class="avatar">
                            <img src="@/assets/img/avatar.jpg" alt="">
                        </div>
                        <div class="name">
                            <h2><span>二次猿</span></h2>
                            <p><a href="/bash">查看简介</a></p>
                        </div>
                        <div class="setting">
                            <button style="background: #fe7300; color: #fff;">
                                <i class="iconfont iconiconfontzhizuobiaozhun023148"></i>
                                <span>点赞</span>
                            </button>
                            <button style="border: 1px solid #eee; background: #fff; color: #40485B">
                                <i class="iconfont iconyouxiang"></i>
                                <span>私信</span>
                            </button>
                        </div>
                        <div class="info">
                            <div class="rows">
                                <div class="grid">
                                    <a href="javascript:;">
                                        <div class="count">999</div>
                                        <div class="name">文章</div>
                                    </a>
                                </div>
                                <div class="grid">
                                    <a href="javascript:;">
                                        <div class="count">999</div>
                                        <div class="name">点赞</div>
                                    </a>
                                </div>
                                <div class="grid">
                                    <a href="javascript:;">
                                        <div class="count">999</div>
                                        <div class="name">浏览</div>
                                    </a>
                                </div>
                                <div class="grid">
                                    <a href="javascript:;">
                                        <div class="count">999</div>
                                        <div class="name">留言</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="hot">
                        <div class="title">
                            <h4><span></span>热门文章</h4>
                        </div>
                        <div class="article-list">
                            <ul>
                                <li><span style="color: #fe2d46;">1 </span>从入门到放弃！</li>
                                <li><span style="color: #f60;">2 </span>从入门到放弃！</li>
                                <li><span style="color: #faa90e;">3 </span>从入门到放弃！</li>
                                <li><span>4 </span>从入门到放弃！</li>
                                <li><span>5 </span>从入门到放弃！</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </article>
</template>

<script>
import ArticleCard from '@/components/Web/ArticleCard'
import Header from '@/components/Web/Header'
import Paginate from '@/components/Paginate'
import WebPaginate from '@/components/Web/WebPaginate'
export default {
    name: 'index',
    head () {
        return {
            title: '主页 | 二次猿',
            meta: [
                { hid: 'description-index', name: 'description', content: '二次猿，二次猿博客，二次猿的技术博客, 主页' }
            ]
        }
    },
    data () {
        return {
            pageName: '博客主页',
            type: 'index',
        }
    },
    mounted() {
        
    },
    components: {
        Header,
        Paginate,
        ArticleCard,
        WebPaginate
    }
}
</script>

<style lang="scss" scoped>
    .article {
        display: flex;
        justify-content: center;
        padding-bottom: 20px;
        .info-column {
            .card {
                width: 280px;
                height: auto;
                .author {
                    width: 100%;
                    margin-top: 40px;
                    padding: 14px;
                    background: #fff;
                    box-shadow: 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07);
                    .avatar {
                        position: relative;
                        margin: 0 auto 10px;
                        width: 160px;
                        height: 160px;
                        cursor: pointer;
                        img {
                            margin: 0;
                            width: 100%;
                            height: 100%;
                            border: 4px solid #EEE;
                            margin-right: 0.25em;
                            display: inline-block;
                            border-radius: 500rem;
                            transition: All 0.4s ease-in-out;
                            -webkit-transition: All 0.4s ease-in-out;
                            -moz-transition: All 0.4s ease-in-out;
                            -o-transition: All 0.4s ease-in-out;
                            &:hover {
                                transform: rotate(360deg) scale(1.1);
                                -webkit-transform: rotate(360deg) scale(1.1);
                                -moz-transform: rotate(360deg) scale(1.1);
                                -o-transform: rotate(360deg) scale(1.1);
                                -ms-transform: rotate(360deg) scale(1.1);
                            }
                        }
                    }
                    .name {
                        text-align: center;
                        h2 {
                            margin: 30px 0 0;
                            word-break: break-all;
                            color: #40485b;
                            span {
                                overflow: hidden;
                                text-overflow: ellipsis;
                                display: -webkit-box;
                                -webkit-line-clamp: 3;
                                -webkit-box-orient: vertical;
                                font-size: 22px;
                                font-weight: bold;
                                letter-spacing: 3px;
                            }
                        }
                        p {
                            margin: 15px;
                            font-size: 13px;
                            cursor: pointer;
                            a {
                                color: #8c92a4;
                            }
                        }
                    }
                    .setting {
                        margin: 15px auto;
                        display: -webkit-box;
                        display: -ms-flexbox;
                        display: flex;
                        -ms-flex-pack: distribute;
                        justify-content: space-around;
                        -webkit-box-align: center;
                        -ms-flex-align: center;
                        align-items: center;
                        button {
                            border: 0;
                            width: 45%;
                            height: 32px;
                            font-size: 14px;
                        }
                    }
                    .info {
                        -webkit-box-sizing: inherit;
                        box-sizing: inherit;
                        .rows {
                            padding: 0 1rem;
                            margin-top: -10px;
                            margin-bottom: -1rem;
                            margin-left: -1rem;
                            margin-right: -1rem;
                            display: block;
                            text-align: left;
                            font-size: 0em;
                            display: flex;
                            justify-self: start;
                            .grid {
                                padding: 1rem 0;
                                text-align: center;
                                width: 25% !important;
                                a {
                                    cursor: pointer;
                                    color: #005980;
                                    .count {
                                        font-size: 18px;
                                        font-weight: bold;
                                    }
                                    .name {
                                        padding-top: 5px;
                                        color: #40485b;
                                        font-size: 12px;
                                        display: block;
                                    }
                                }
                            }
                        }
                    }
                }
                .hot {
                    width: 100%;
                    margin-top: 40px;
                    padding: 14px;
                    background: #fff;
                    box-shadow: 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07);
                    .title {
                        height: 20px;
                        line-height: 20px;
                        h4 {
                            color: #40485b;
                            padding-bottom: 9px;
                            border-bottom: 1px solid #e7e7e7;
                            span {
                            border: 3px solid #fe2d46;
                            font-size: 10px;
                            margin-right: 10px;
                            }
                        }
                    }
                    .article-list {
                        margin-top: 10px;
                        ul {
                            display: flex;
                            justify-self: start;
                            flex-direction: column;
                            padding: 5px;
                            li {
                                width: 100%;
                                height: 40px;
                                line-height: 40px;
                                border-bottom: 1px dashed #e7e7e7;
                                color: #666;
                                font-size: 15px;
                                cursor: pointer;
                                span {
                                    font-size: 15px;
                                    color: #9195a3;
                                    margin-right: 10px;
                                }
                                &:hover {
                                    color: #fe2d46;
                                    font-weight: bold;
                                    font-size: 16px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>