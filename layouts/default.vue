<template>
    <main :class="{ bg : show }">
        <Nav v-show="nav_foot_show"></Nav>
        <Nuxt />
        <Footer v-show="nav_foot_show && foot_show"></Footer>
        <SideBar v-show="nav_foot_show"></SideBar>
    </main>
</template>

<script>
import Nav from '/components/Web/Nav'
import Footer from '/components/Web/Footer'
import SideBar from '/components/Web/SideBar'
export default {
    name: 'layout',
    data () {
        return {
            nav_foot_show: true,
            foot_show: true,
            show: false
        }
    },
    components: {
        Nav,
        Footer,
        SideBar,
    },
    watch: {
		$route () {
			this.changeShow()
            this.showBg()
		}
	},
    methods: {
        changeShow () {
			if ( this.$route.path == '/login' || window.location.href.indexOf('/admin') != -1 || this.$route.path == '/404' || this.$route.path == '/bash') {
				this.nav_foot_show = false
			} else {
				this.nav_foot_show = true
			}
			if ( this.$route.name == 'search') {
				this.foot_show = false
			} else {
				this.foot_show = true
			}
		},
		checkMobile () {
			if ( (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) ) {
				// this.$store.commit('webside/changeIsMobile', true)
			} else {
				// this.$store.commit('webside/changeIsMobile', false)
			}
		},
        showBg () {
            if (this.$route.path == '/bash') {
                this.show = true
            } else {
                this.show = false
            }
        }
    },
    mounted () {
        this.changeShow()
		this.checkMobile()
        this.showBg()
        require('/assets/js/colorLine.js')
    }
}
</script>

<style lang="scss" scoped>
    main {
        height: 100vh;
    } 
    .bg {
        background-image: url(@/assets/img/login_BG.jpg);
        background-repeat: no-repeat;
        overflow: hidden !important;
        background-size: cover;
        background-attachment: fixed;
    }
</style>