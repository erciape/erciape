<template>
    <div>
        <div id="box">
            <div class="meBox">
                <div class="headPhoto"></div>
                <div class="meBox-title">
                    <p>erciape.</p>
                    <div class="fg"></div>
                </div>
                <div class="meBox-text">
                    <p>从入门到放弃！</p>
                    <p>从入门到放弃！</p>
                    <p>从入门到放弃！</p>
                    <p>从入门到放弃！</p>
                    <p>从入门到放弃！</p>
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
                        <span>erciape - bash</span>
                    </div>
                    <div class="cmdText">
                        <span style="color: rgb(0, 190, 0);">[root@erciape ~]</span>
                        <span style="color: blue;">#</span>
                        <span style="color: rgb(39, 39, 39);"> ./weather.sh</span>
                        <br>
                        <iframe scrolling="no" src="https://tianqiapi.com/api.php?style=tu&amp;skin=pitaya" frameborder="0" width="350" height="24" allowtransparency="true"></iframe>
                        <br>
                        <span style="color: rgb(0, 190, 0);">[root@erciape ~]</span>
                        <span style="color: blue;">#</span>
                        <span style="color: rgb(39, 39, 39);"> cat ./me.txt</span>
                        <p>昵称：二次猿</p>
                        <p>性别：男</p>
                        <p>年龄：21</p>
                        <p>地址：江西，中国</p>
                        <p>邮箱：erciape@qq.com</p>
                        <p>其他：</p>
                        <p>后端开发者</p>
                        <p>前端爱好者，朝着全栈工程师的道路前进</p>
                        <p>这条路我才刚刚迈开了我的第一步</p>
                        <span style="color: rgb(0, 190, 0);">[root@erciape /]</span>
                        <span style="color: blue;">#</span>
                        <span style="color: rgb(39, 39, 39);"> sudo rm -rf ./*</span>
                        <p>sudo: 请输入密码: *******</p>
                        <p>bash: 请再次确认是否删除，您准备好跑路了吗？(y/n) y<span class="shuxian">|</span></p>
                    </div>
                </div>
                <div class="cmd cmd2">
                    <div class="click">
                        <div class="red"></div>
                        <div class="yellow"></div>
                        <div class="green"></div>
                    </div>
                    <div class="title">
                        <span>erciape - bash</span>
                    </div>
                    <div class="cmdText">
                        <span style="color: rgb(0, 190, 0);">[root@erciape ~]</span>
                        <span style="color: blue;">#</span>
                        <span style="color: rgb(39, 39, 39);"> ./links.sh</span>
                        <p>我的站点：</p>
                        <ul class="ul">
                            <li><a href="/">Blog.二次猿</a></li>
                        </ul>
                        <span style="color: rgb(0, 190, 0);">[root@erciape ~]</span>
                        <span style="color: blue;">#</span>
                        <span style="color: rgb(39, 39, 39);"> ./yiyan.sh</span>
                        <p class="hito">只要心中有海，哪里都是马尔代夫！</p>
                        <span style="color: rgb(0, 190, 0);">[root@erciape ~]</span>
                        <span style="color: blue;">#</span>
                        <span style="color: rgb(39, 39, 39);"> ./ip.sh</span>
                        <p class="getip">你的 IP: {{ ip }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div id="footer">
            <p>© 2021 By erciape🎉二次猿 · <a href="http://beian.miit.gov.cn" target="_blank" style="color:inherit">赣ICP备20009667号-3</a></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'bash',
    head () {
        return {
            // title: 'bash | 二次猿',
            meta: [
                { hid: 'description-bash', name: 'description', content: '二次猿，二次猿博客，二次猿的技术博客, 终端介绍' }
            ]
        }
    },
    data () {
        return {
            ip: ''
        }
    },
    methods: {
        getIp () {
            this.ip = returnCitySN['cip']
        }
    },
    mounted () {
        require('/assets/css/FiraCode.css')
        require('/assets/css/flesx.css')
        this.getIp()
    }
}
</script>