<template>
    <div id="nav" :class="{ nav_shadow: show_shadow }">
        <div class="nav-content">
            <nuxt-link tag="span" id="name" to="/">二次猿</nuxt-link>
            <ul>
                <nuxt-link tag="li" to="/"><i class="iconfont iconshouye"></i><span>首页</span></nuxt-link>
                <nuxt-link tag="li" to="/categories"><i class="iconfont iconshu"></i><span>文章分类</span></nuxt-link>
                <nuxt-link tag="li" to="/file"><i class="iconfont iconshijianxian"></i><span>归档</span></nuxt-link>
                <nuxt-link tag="li" to="/message"><i class="iconfont iconxie"></i><span>留言板</span></nuxt-link>
                <nuxt-link tag="li" to="/friends"><i class="iconfont iconlianjie"></i><span>友情链接</span></nuxt-link>
                <nuxt-link tag="li" to="/author"><i class="iconfont iconyonghu1"></i><span>关于我</span></nuxt-link>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            // 导航阴影
            show_shadow: false,
        }
    },
    mounted () {
        window.addEventListener('scroll', e => {
            // window.scrollY - Chrome
            // window.pageYOffset - IE 9 + / safari
            // document.documentElement.scrollTop - IE 6 7 8
            this.show_shadow = window.scrollY || window.pageYOffset || document.documentElement.scrollTop  ? true : false
        })
    }
}
</script>

<style lang="scss" scoped>
    #nav {
        width: 100%;
        height: 50px;
        line-height: 50px;
        z-index: 3;
        position: fixed;
        top: 0;
        transition: .2s;
        .nav-content {
            padding: 0 40px;
            display: flex;
            justify-content: space-between;
            #name {
                font-weight: bold;
                font-size: 25px;
                color: #fff;
                letter-spacing: 5px;
                cursor: pointer;
                font-family: myFont,cursive;
                &:hover {
                    animation: shake 1s .2s ease both infinite;
                }
            }
            ul {
                display: flex;
                justify-content: flex-start;
                padding-right: 17px;
                li {
                    width: 140px;
                    text-align: center;
                    display: flex;
                    justify-content: center;
                    position: relative;
                    padding-right: 3px;
                    color: #fff;
                    cursor: pointer;
                    i {
                        font-size: 17px;
                        padding-right: 5px;
                    }
                    span {
                        font-family: miranafont,"Hiragino Sans GB",STXihei,"Microsoft YaHei",SimSun,sans-serif;
                    }
                    &:hover {
                        font-weight: bold;
                        animation: shake 1s .2s ease both infinite;
                        * {
                            color: #40485b !important;
                        }
                    }
                }
            }
        }
    }
    .nav_shadow{ 
    background: rgba(171, 171, 171, .3);
    backdrop-filter: saturate(300%) blur(10px);
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2); 
    * {
            color:#58666e !important;
        }
    }

    // IE 不支持毛玻璃效果
    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
        #nav.nav_shadow{ 
            background: rgba(171, 171, 171, .9)!important;
        }
    }
</style>