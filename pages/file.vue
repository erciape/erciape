<template>
    <article id="file">
        <Header :title="pageName" :type="type"></Header>
        <section class="white-card">
            <div class="content">
                <h1>共计 {{ total }}  篇文章</h1>
                <hr>
                <p class="date">{{ date }}</p>
                <ul>
                    <li><span>从入门到放弃！</span><span>2021-7-7</span></li>
                    <li><span>从入门到放弃！</span><span>2021-7-7</span></li>
                    <li><span>从入门到放弃！</span><span>2021-7-7</span></li>
                    <li><span>从入门到放弃！</span><span>2021-7-7</span></li>
                    <li><span>从入门到放弃！</span><span>2021-7-7</span></li>
                    <li><span>从入门到放弃！</span><span>2021-7-7</span></li>
                    <li><span>从入门到放弃！</span><span>2021-7-7</span></li>
                    <li><span>从入门到放弃！</span><span>2021-7-7</span></li>
                </ul>
                <p class="date">2020</p>
                <ul>
                    <li><span>从入门到放弃！</span><span>2020-7-7</span></li>
                    <li><span>从入门到放弃！</span><span>2020-7-7</span></li>
                    <li><span>从入门到放弃！</span><span>2020-7-7</span></li>
                    <li><span>从入门到放弃！</span><span>2020-7-7</span></li>
                    <li><span>从入门到放弃！</span><span>2020-7-7</span></li>
                    <li><span>从入门到放弃！</span><span>2020-7-7</span></li>
                    <li><span>从入门到放弃！</span><span>2020-7-7</span></li>
                    <li><span>从入门到放弃！</span><span>2020-7-7</span></li>
                </ul>
            </div>
        </section>
    </article>
</template>

<script>
import Header from '@/components/Web/Header'
export default {
    name: 'file',
    head () {
        return {
            title: '二次猿-归档',
            meta: [
                { hid: 'description-file', name: 'description', content: '二次猿，二次猿博客，二次猿的技术博客, 归档' }
            ]
        }
    },
    data () {
        return {
            pageName: '归档',
            type: 'file',
            total: 100,
            date: '2021'
        }
    },
    components: {
        Header
    }
}
</script>

<style lang="scss" scoped>
    #file {
        font-size: 16px;
        margin-bottom: 40px;
        section {
            width: 1200px;
            padding: 0px 40px;
            margin: 40px auto 0px auto;
            .content {
                width: 100%;
                display: flex;
                flex-direction: column;
                margin-bottom: 0;
                padding-left: 5%;
                padding-right: 5%;
                padding-bottom: 5%;
                h1 {
                    margin: 48px 0 22px -5px;
                    font-size: 2rem;
                    font-weight: 700;
                    line-height: 2rem;
                    color: #34495e;
                }
                hr {
                    margin: 20px 0;
                    border: 0;
                    border-top: 1px solid #ccc;
                }
                .date {
                    font-size: 1.25rem;
                    line-height: 1.25rem;
                    margin: 1.25rem 0 1.25rem 0;
                }
                ul {
                    width: 100%;
                    background-color: #fff;
                    margin-left: 20px;
                    li {
                        width: 95%;
                        padding: .75rem 1.25rem;
                        // color: #40485B;
                        color: #039be5;
                        display: flex;
                        justify-content: space-between;
                        height: 30px;
                        line-height: 30px;
                        flex-wrap: wrap;
                        cursor: pointer;
                        &:hover {
                            background: #eee;
                            border-radius: 5px;
                            color: #000;
                            font-weight: bold;
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