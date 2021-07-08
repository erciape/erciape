<template>
    <div id="box">
        <div class="meBox">
            <div class="avatar"></div>
            <div class="meBox-title">
                <p>1</p>
                <div class="fg"></div>
            </div>
            <div class="meBox-text">
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
            </div>
            <div class="meBox-button">
                <a href=""></a>
                <a href=""></a>
            </div>
        </div>
        <div id="cmdBox">
            <div class="cmd">
                <div class="click">
                    <div class="red"></div>
                    <div class="yellow"></div>
                    <div class="green"></div>
                </div>
                <div class="title">
                    <span>1</span>
                </div>
                <div class="cmdText">
                    <span style="color: rgb(0, 190, 0);">root@Colsrch</span>
                    <span style="color: blue;">~</span>
                    <span style="color: rgb(39, 39, 39);">./tianqi.sh</span>
                    <br>
                    <iframe scrolling="no" src="https://tianqiapi.com/api.php?style=tu&amp;skin=pitaya" frameborder="0" width="350" height="24" allowtransparency="true"></iframe>
                    <br>
                    <span style="color: rgb(0, 190, 0);">root@Colsrch</span>
                    <span style="color: blue;">~</span>
                    <span style="color: rgb(39, 39, 39);">cat ./me.txt</span>
                    <p>昵称：Colsrch</p>
                    <p>性别：男</p>
                    <p>邮箱：colsrch@foxmail.com</p>
                    <br>
                    <p>爱好编程，会去自学自己感兴趣的一切东西</p>
                    <p>这条路我才刚刚迈开了我的第一步</p>
					<p>愿多年以后，我可以酌一杯清酒，烂醉如泥，梦中回到我们的曾经。</p>
                    <span style="color: rgb(0, 190, 0);">root@Colsrch</span>
                    <span style="color: blue;">~</span>
                    <span style="color: rgb(39, 39, 39);">sudo rm -rf ./过去的自己/*</span>
                    <p>sudo: 请输入密码: *******</p>
                    <p>bash: 已删除</p>
                    <span style="color: rgb(0, 190, 0);">root@Colsrch</span>
                    <span style="color: blue;">~</span>
                </div>
            </div>
            <div class="cmd cmd2">
                <div class="click">
                    <div class="red"></div>
                    <div class="yellow"></div>
                    <div class="green"></div>
                </div>
                <div class="title">
                    <span>Colsrch - bash</span>
                </div>
                <div class="cmdText">
                    <span style="color: rgb(0, 190, 0);">root@Colsrch</span>
                    <span style="color: blue;">~</span>
                    <span style="color: rgb(39, 39, 39);">./links.sh</span>
                    <p>我的站点：</p>
                    <ul class="ul">
                        <li><a href="https://colsrch.cn">Blog</a></li>
                        <li><a href="https://colsrch.cn">Box</a></li>
                        <li><a href="#">Home Page</a></li>
                        <li><a href="https://status.colsrch.cn">Website Status</a></li>
                        <li><a href="https://ssl.colsrch.top">SSL Status</a></li>
                    </ul>
                    <span style="color: rgb(0, 190, 0);">root@Colsrch</span>
                    <span style="color: blue;">~</span>
                    <span style="color: rgb(39, 39, 39);">./yiyan.sh</span>
                    <p class="hito">如果可以，愿来生你不要忘记我，我也不要忘记你那熟悉的温柔。</p>
                    <span style="color: rgb(0, 190, 0);">root@Colsrch</span>
                    <span style="color: blue;">~</span>
                    <span style="color: rgb(39, 39, 39);">./ip.sh</span>
                    <p class="getip">你的 IP: 106.4.245.195</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    #box {
        * {
            font-family: FiraCode !important;
        }
        width: 1200px;
        height: 100px;
        margin: 0 auto;
        padding-top: 5%;
        .meBox {
            float: left;
            width: 20rem;
            height: 25rem;
            background-color: white;
            margin-top: 100px;
            border-radius: 2%;
            transition: all 0.3s;
            text-align: center;
            .avatar {
                width: 8rem;
                height: 8rem;
                background: url(@/assets/img/avatar.jpg) no-repeat;
                background-size: cover;
                border-radius: 50%;
                position: relative;
                top: -15%;
                left: 50%;
                margin-left: -4rem;
                transition: all 0.3s;
            }
            .meBox-title {
                width: auto;
                margin: 0 auto;
                p {
                    font-size: 1.2rem;
                    border-right: .1em solid;
                    width: 12ch;
                    white-space: nowrap;
                    overflow: hidden;
                    animation: typing 2s steps(20, end), blink-caret .3s step-end infinite alternate;
                    margin: -30px 0 0 90px;
                    transition: all 0.3s;
                }
                .fg {
                    width: 80%;
                    height: 2px;
                    background-image: linear-gradient(to left, #3498db, #2980b9);
                    margin: 5% 0 0 10%;
                }
            }
            .meBox-text {
                width: 80%;
                height: 45%;
                overflow: hidden;
                text-align: center;
                color: rgb(70, 70, 70);
                animation-name: meBox-text;
                animation-duration: 2s;
                animation-fill-mode: forwards;
                margin: 5% 0 0 10%;
                transition: all 0.3s;
                p {
                    margin-top: 5px;
                }
            }
            .meBox-button {
                width: 100%;
                a {
                    display: inline-block;
                    float: left;
                    width: 158px;
                    height: 50px;
                    margin-top: 13px;
                    line-height: 50px;
                    text-decoration: none;
                    color: gray;
                    transition: all 0.3s;
                }
            }
        }
        #cmdBox {
            width: 710px;
            height: 550px;
            float: right;
            .cmd {
                width: 600px;
                height: 400px;
                border-radius: 10px 10px 5px 5px;
                overflow: hidden;
                background-color: rgba(255, 255, 255, 0.9);
                transition: all 0.3s;
                font-size: 14px;
                color: rgb(88, 89, 92);
                position: relative;
                top: 0;
                left: 0;
                .click {
                    margin-left: 10px;
                    float: left;
                    .red {
                        background-color: #ff1b22;
                        box-shadow: 0 0 1px #ff1b22;
                    }
                    .yellow {
                        background-color: #ffaf00;
                        box-shadow: 0 0 1px #ffaf00;
                    }
                    .green {
                        background-color: #00931a;
                        box-shadow: 0 0 1px #00931a;
                    }
                }
                .title {
                    width: 100%;
                    height: 25px;
                    background-image: linear-gradient(to top, rgb(184, 184, 184), white);
                    font-size: 14px;
                    line-height: 25px;
                    span {
                        display: inline-block;
                        width: 70%;
                        text-align: center;
                    }
                }
                .cmdText {
                    padding-top: 10px;
                    padding-left: 15px;
                    span {
                        color: rgb(0, 190, 0);
                        height: 10px;
                        line-height: 10px;
                    }
                }
            }
            .cmd2 {
                position: relative;
                top: -280px;
                left: 100px;
                .cmdText {
                    ul {
                        margin-left: 15px;
                        li {
                            a {
                                text-decoration: none;
                                color: rgb(88, 89, 92);
                            }
                        }
                    }
                }
            }
        }
    }
</style>