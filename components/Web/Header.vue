<template>
    <div class="header" :class="{ small: small }">
        <img src="@/assets/img/12.jpg" alt="" v-if="type == 'index'">
        <img src="@/assets/img/31.jpg" alt="" v-if="type == 'categories'">
        <img src="@/assets/img/41.jpg" alt="" v-if="type == 'file'">
        <img src="@/assets/img/12.jpg" alt="" v-if="type == 'message'">
        <img src="@/assets/img/index_BG.jpg" alt="" v-if="type == 'friends'">
        <img src="@/assets/img/index_BG.jpg" alt="" v-if="type == 'author'">
        <p>{{ title }}</p>
    </div>
</template>

<script>
export default {
    data () {
        return {
            small: false,
        }
    },
    props: {
        title: {
            type: String
        },
        type: {
            type: String
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
            font-family: myFont,cursive;
        }
    }
    .small {
        height: 400px;
    }
</style>