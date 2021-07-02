<template>
    <div class="nav-class" :class="{ nav_shadow: show_shadow }">
        <div class="nav-content">
            <a href="javascript:;">
                <!-- <img src="@/assets/logo.png" alt=""> -->
                <span id="blog-name">hello world</span>
            </a>
            <ul>
                <li>
                    <a href="javascript:;" >
                        <i class="iconfont iconshouye"></i>
                        <span>首页</span>    
                    </a>
                </li>
                <li>
                    <a href="javascript:;" >
                        <i class="iconfont iconshu"></i>
                        <span>文章分类</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:;" >
                        <i class="iconfont iconshijianxian"></i>
                        <span>归档</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:;" >
                        <i class="iconfont iconxie"></i>
                        <span>留言板</span>
                    </a>
                </li>
                <!-- <li>
                    <a href="javascript:;" >
                        <i class="iconfont icontupian"></i>
                        <span>照片墙</span>
                    </a>
                </li> -->
                <li>
                    <a href="javascript:;" >
                        <i class="iconfont iconyonghu1"></i>
                        <span>关于我</span>
                    </a>
                </li>
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
    .nav-class {
        width: 100%;
        height: 50px;
        line-height: 50px;
        z-index: 3;
        position: fixed;
        top: 0;
        transition: .2s;
        // background: rgba(171, 171, 171, .3);
        // backdrop-filter: saturate(150%) blur(10px);
        .nav-content {
            padding: 0 40px;
            display: flex;
            justify-content: space-between;
            a {
                img {
                    width: 125px;
                    height: 45px;
                }
                #blog-name {
                    font-weight: bold;
                    font-size: 20px;
                    color: #58666e;
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
                    a {
                        padding-right: 3px;
                        color: #58666e;
                        outline: none;
                        i {
                            font-size: 17px;
                            padding-right: 5px;
                        }
                    }
                    &:hover {
                        font-weight: bold;
                        color: #000;
                    }
                }
            }
        }
    }
    .nav_shadow{ 
    background: rgba(171, 171, 171, .3);
    backdrop-filter: saturate(300%) blur(10px);
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2); 
    }

    // IE 不支持毛玻璃效果
    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
        #nav.nav_shadow{ 
            background: rgba(171, 171, 171, .9)!important;
        }
    }
</style>