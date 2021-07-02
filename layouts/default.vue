<template>
    <main>
        <Nav v-show="nav_foot_show"></Nav>
        <Nuxt />
        <Footer v-show="nav_foot_show && foot_show"></Footer>
        <SideBar></SideBar>
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
            foot_show: true
        }
    },
    components: {
        Nav,
        Footer,
        SideBar
    },
    methods: {
        changeShow () {
			if ( this.$route.path == '/login' || window.location.href.indexOf('/admin') != -1 || this.$route.path == '/mobileLogin' || this.$route.path == '/mobileRegister' || this.$route.path == '/404' || window.location.href.indexOf('/notes/') != -1 ) {
				this.nav_foot_show = false
			} else {
				this.nav_foot_show = true
			}
			if ( window.location.href.indexOf('/mobile/user') != -1 ) {
				this.nav_foot_show = true
			}
			if ( this.$route.name == 'search' || window.location.href.indexOf('/mobile/user') != -1 || window.location.href.indexOf('/mobile/login') != -1 || window.location.href.indexOf('/mobile/register') != -1  ) {
				this.foot_show = false
			} else {
				this.foot_show = true
			}
		},
		checkMobile () {
			// if ( (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) ) {
			// 	this.$store.commit('webside/changeIsMobile', true)
			// } else {
			// 	this.$store.commit('webside/changeIsMobile', false)
			// }
		}
    },
    mounted () {
        this.changeShow()
		this.checkMobile()
        require('/assets/js/colorLine.js')
    }
}
</script>

<style lang="scss" scoped>

</style>