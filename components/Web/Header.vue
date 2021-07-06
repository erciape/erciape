<template>
    <div class="header" :class="{ small: small }">
        <img src="@/assets/img/img.jpg" alt="">
        <p>博客主页</p>
    </div>
</template>

<script>
export default {
    data () {
        return {
            small: false
        }
    },
    mounted() {
        this.checkRouter()
    },
    methods: {
        checkRouter () {
            let path = this.$route.path
            if (path == '/' || path == '/index') {
                this.small = false
            } else {
                this.small = true
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .header {
        width: 100%;
        height: 50vh;
        overflow: hidden;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
        }
        p {
            z-index: 2;
            color: #fff;
            font-size: 56px;
            letter-spacing: 10px;
            text-shadow: 4px 4px 8px #000;
        }
    }
    .small {
        height: 400px;
    }
</style>