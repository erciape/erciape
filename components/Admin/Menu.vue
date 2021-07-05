<template>
    <div id="menu">
        <div class="user-info">
            <h1>hello world</h1>
        </div>
        <div class="menu-content" v-for="(item, index) in list" :key="index">
            <p @click="showChildMenu(index)">
                <i class="iconfont" :class="item.icon" @click="reset"></i>
                <span>{{ item.title }}</span>
                <i class="iconfont iconshousuo1" :class="{iconxuanzhuan: item.childMenuBool}"></i>
            </p>
            <ul :class="{childShow: item.childMenuBool}" v-if="item.childList && item.childList.length" :style="{height: item.childMenuBool && item.childList && item.childList.length ? 40 * item.childList.length + 'px' : '0'}">
                <nuxt-link tag='li' v-for="(items, indexs) in item.childList" :key="indexs" :to="items.route">
                {{ items.title }}
                </nuxt-link>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            hide: false,
            list: [
                {title: '文章管理', icon: 'iconshu', childMenuBool: false, childList: [
                    {title: '文章列表', route: '/admin/article/list'},
                    {title: '发布文章', route: '/admin/article/publish'},
                ]},
                {title: '笔记管理', icon: 'iconbiji', childMenuBool: false, childList: [
                    {title: '笔记列表', route: '/admin/note/list'},
                    {title: '发布笔记', route: '/admin/note/publish'},
                ]},
                {title: '后台管理', icon: 'iconshezhi', childMenuBool: false, childList: [
                    {title: '后台信息', route: '/admin/system/info'},
                    {title: '友情链接', route: '/admin/system/friends'},
                ]}
            ]
        }
    },
    methods: {
        showChildMenu (index) {
            this.list[index].childMenuBool = !this.list[index].childMenuBool
            this.list.forEach((item, indexs) => {
                if ( index != indexs ) {
                item.childMenuBool = false
                }
            })
        },
        reset () {
            if (this.hide) {
                this.hide = false
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    #menu {
        width: 220px;
        height: 100vh;
        background: #f9f9f9;
        padding: 0 20px;
        color: #58666e;
        position: fixed;
        left: 0;
        top: 0;
        .user-info {
            width: 100%;
            height: 60px;
            line-height: 60px;
            border-bottom: 2px solid #eee;
            padding: 15px 0;
            h1 {
                text-align: center;
                font-size: 19px;
                color: #58666e;
                font-weight: bold;
            }
        }
        .menu-content {
            p {
                width: 100%;
                height: 56px;
                font-size: 14px;
                line-height: 56px;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                cursor: pointer;
                margin: 0;
                &:hover {
                    background: #C0C4CC;
                    color: #fff;
                    border-radius: 5px;
                }
                span {
                    width: 130px;
                    text-align: left;
                }
                .iconshu {
                    margin-left: 18px;
                    margin-right: 17px;
                    font-size: 18px;
                    font-weight: bold;
                }
                .iconbiji {
                    margin-left: 17px;
                    margin-right: 17px;
                    font-size: 19px;
                }
                .iconshezhi {
                    margin-left: 18px;
                    margin-right: 17px;
                    font-size: 18px;
                }
                .iconshousuo1 {
                    font-size: 30px;
                    color: #606266;
                    transition: .2s;
                }
                .iconxuanzhuan {
                    transform: rotateZ(90deg);
                }
            }
            ul {
                margin: 0;
                overflow: hidden;
                transition: .2s;
                cursor: pointer;
                list-style: none;
                max-height: 10000000px;
                li {
                    height: 40px;
                    font-size: 14px;
                    line-height: 40px;
                    margin-left: -20px;
                    text-align: center;   
                    &.nuxt-link-active {
                        color: #fff;
                        background: #DCDFE6;
                    }
                    &:hover {
                        background: #DCDFE6;
                        color: #fff;
                    }
                }
                .childShow {
                    max-height: 10000px!important;
                }
            }
        }
    }
</style>