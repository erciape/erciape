<template>
    <dir id="login">
        <div class="card">
            <div class="card-l">
                <div class="title">
                    <h1>登 录</h1>
                </div>
                <div class="content">
                    <div class="rows">
                        <el-input v-model="email" placeholder="请输入邮箱账号"></el-input>
                    </div>
                    <div class="rows">
                        <el-input v-model="password" placeholder="请输入密码"></el-input>
                    </div>
                    <div class="confirm">
                        <el-button @click="login" size="medium" type="info" plain>登录</el-button>
                    </div>
                </div>
            </div>  
        </div>
    </dir>
</template>

<script>
export default {
    head () {
		return {
			title: '登录 | 二次猿',
			meta: [
				{ hid: 'description-login', name: 'description', content: '二次猿，二次猿博客，二次猿的技术博客, 登录' }
			]
		}
	},
    data () {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login () {
            console.log('login')
        }
    },
    mounted () {
        // require('https://v1.hitokoto.cn/?encode=js&select=.hito')
        // require('https://pv.sohu.com/cityjson?ie=utf-8')
    }
}
</script>

<style lang="scss" scoped>
    #login {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        background-image: url(~/assets/img/login_BG.jpg);
        background-repeat: no-repeat;
        overflow: hidden !important;
        background-size: cover;
        background-attachment: fixed;
        .card {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            z-index: 9999999 !important;
            top: 150px;
            opacity: 0.7;
            .card-l {
                background: #fff;
                border-radius: 10px;
                overflow: hidden;
                width: 700px;
                max-width: 100%;
                height: 480px;
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                align-items: center;
                .title {
                    width: 60%;
                    height: 20px;
                    line-height: 20px;
                    font-size: 20px;
                    h1 {
                        margin-left: 170px;
                    }
                }
                .content {
                    width: 55%;
                    height: 30px;
                    line-height: 30px;
                    margin: 30px 0 0 0;
                    position: relative;
                    top: -180px;
                    .rows {
                        margin-bottom: 50px;
                    }
                    .confirm {
                        margin-left: 150px;
                    }
                }
            }
        }
    }
</style>