<template>
    <div class="header" :class="{ small: small }">
        <img src="@/assets/img/index_BG.jpg" alt="" v-if="type == 'index'">
        <video loop autoplay src="@/assets/img/article_BG.webm" alt="" v-if="type == 'categories'" data-height="180" data-width="2104"></video>
        <video loop autoplay src="@/assets/img/file_BG.webm" alt="" v-if="type == 'file'" data-height="180" data-width="2104"></video>
        <video loop autoplay src="@/assets/img/message_BG.webm" alt="" v-if="type == 'message'" data-height="180" data-width="2104"></video>
        <video loop autoplay src="@/assets/img/friends_BG.webm" alt="" v-if="type == 'friends'" data-height="180" data-width="2104"></video>
        <video loop autoplay src="@/assets/img/author_BG.webm" alt="" v-if="type == 'author'" data-height="180" data-width="2104"></video>
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
        height: 60vh;
        overflow: hidden;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 1;
        img {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
        }
        video {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            object-fit: inherit;
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
    @media screen and (max-width: 3439px){
        .small {
            height: 300px;
        }
    }
</style>