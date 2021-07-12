<template>
    <article id="author">
        <Header :title="pageName" :type="type"></Header>
        <section class="white-card">
            <div class="header">
                <img src="@/assets/img/avatar.jpg" alt="">
                <div>
                    <p class="text">PHP开发攻城狮</p>
                    <p>
                        <el-tooltip class="item" effect="dark" content="QQ: 1577816211" placement="bottom">
                            <a target="_black" href="http://wpa.qq.com/msgrd?v=3&uin=1577816211&site=qq&menu=yes" class="small"><img src="@/assets/img/qq.png"></a>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" placement="bottom" content="">
                            <div slot="content"><img src="@/assets/img/weixin_qr_code.png" style="width: 100px;height: 100px;"></div>
                            <a href="javascript:;" class="small"><img src="@/assets/img/weixin.png"></a>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="GitHub" placement="bottom">
                            <a target="_blank" href="https://github.com/erciape" class="small"><img src="@/assets/img/github.png"></a>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" placement="bottom" content="">
                            <div slot="content"><img src="@/assets/img/wangyiyun_qr_code.png" style="width: 100px;height: 100px;"></div>
                            <a href="javascript:;" class="small"><img src="@/assets/img/wangyiyun.png" style="border-radius: 50%;"></a>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="邮件联系我" placement="bottom">
                            <a target="_black" href="mailto:feicnc@qq.com" class="small"><img src="@/assets/img/mail.png"></a>
                        </el-tooltip>
                    </p>
                </div>
            </div>
            <div class="section">
                <p class="title">简介</p>
                <div class="introduce">
                    理解万岁
                </div>
            </div>
            <div class="section">
                <p class="title">基本技能</p>
                <div class="long">
                    <div v-for="(item, index) in skills.long" :key="index">
                        <p>{{ item.name }}:</p>
                        <el-progress :text-inside="true" :stroke-width="20" :percentage="item.percentage" :color="item.color"></el-progress>
                    </div>
                </div>
                <div class="circle">
                    <div v-for="(item, index) in skills.circle" :key="index">
                        <el-progress type="dashboard" :percentage="item.percentage" :stroke-width="10" :color="item.color"></el-progress>
                        <p>{{ item.name }}</p>
                    </div>
                </div>
            </div>
            <div class="section">
                <p class="title">我的项目</p>
                <div class="program">
                    <router-link tag="a" to="/">
                        <img src="@/assets/img/avatar.jpg" alt="" style="width: 84px; height: 84px;border-radius: 50%;">
                        <span>博客</span>
                    </router-link>
                    <a target="_black" href="https://ape.vip/T-32oD93">
                        <img src="@/assets/img/apeyun.png" alt="" style="width: 56px; height: aoto;">
                        <span>猿人云代理IP</span>
                    </a>
                </div>
            </div>
        </section>
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
            type: 'author',
            skills: {
                long: [
                    // {name: 'ThinkPHP', percentage: 60, color: '#6FB737'},
                    {name: 'Linux', percentage: 70, color: '#203054'},
                    {name: 'Git', percentage: 60, color: '#24292E'},
                    {name: 'MySQL', percentage: 70, color: '#044970'},
                    {name: 'Redis', percentage: 60, color: '#D92B0D'},
                    {name: 'HTML5', percentage: 60, color: '#E14C24'},
                    {name: 'CSS3', percentage: 60, color: '#016FBA'},
                ],
                circle: [
                    {name: 'PHP', percentage: 80, color: '#8892BF'},
                    {name: 'Swoole', percentage: 50, color: '#008DDF'},
                    {name: 'Vue', percentage: 60, color: '#41B883'},
                ]
            }
        }
    },
    components: {
        Header
    },
    mounted () {
        require('/assets/css/FiraCode.css')
    }
}
</script>

<style lang="scss" scoped>
    #author {
        font-size: 16px;
        margin-bottom: 40px;
        section {
            width: 1200px;
            padding: 0px 40px;
            margin: -40px auto 0px auto;
            div.header {
                width: 100%;
                display: flex;
                margin-top: -60px;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                > img {
                    height: 120px;
                    width: 120px;
                    border-radius: 60px;
                }
                p.text {
                    font-size: 24px;
                    text-align: center;
                    margin: 40px auto 10px auto;
                    padding-bottom: 20px;
                    border-bottom: 1px solid #000;
                    font-family: FiraCode !important;
                    color: #3c4858;
                }
                p {
                    a {
                        margin: 0 10px;
                        img {
                            width: 36px;
                            height: 36px;
                        }
                    }
                    a.small img {
                        width: 28px;
                        height: 28px;
                    }
                }
            }
            div.section {
                width: 80%;
                margin-bottom: 40px;
                p.title {
                    margin-bottom: 60px!important;
                    font-family: FiraCode !important;
                }
                div.introduce {
                    text-indent: 2rem;
                    line-height: 24px;
                }
                div.long {
                    display: flex;
                    justify-content: space-around;
                    flex-wrap: wrap;
                    > div {
                        width: 40%;
                        margin: 20px 0;
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        p {
                            width: 90px;
                            color: #3c4858;
                        }
                        > div {
                            width: 70%;
                        }
                    }
                }
                div.circle {
                    margin-top: 60px;
                    display: flex;
                    justify-content: space-around;
                    text-align: center;
                    font-size: 24px;
                }
                div.program {
                    display: flex;
                    justify-content: center;
                    a {
                        margin: 0 30px;
                        color: #000;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        img {
                            margin-bottom: 10px;
                        }
                    }
                }
            }
        }
    }
    @media screen and (max-width: 1024px) {
        #author {
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