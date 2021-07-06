<template>
    <div class="article-card">
        <!-- <nuxt-link tag="div" :to="{ path: `/article/${ article.id }` }" class="img">
            <img :src="imgUrl" alt="">
        </nuxt-link>
        <div class="context">
            <nuxt-link tag="p" :to="{path: `/article/${ article.id }`}" class="title">{{ article.title }}</nuxt-link>
            <p class="details">
                <span class="time" v-if="article.update_time">
                    <i class="iconfont icontime"></i>
                    {{ article.update_time.substr(0,10) }}
                </span>
                <span class="tag">
                    <i class="iconfont iconmark"></i>
                    {{ article.skill_tag }}
                </span>
            </p>
            <p class="describe">{{ article.description }}</p>
        </div> -->
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .article-card {
        width: 900px;
        height: 270px;
        margin: 40px;
        // padding: 20px;
        overflow: hidden;
        display: flex;
        justify-content: flex-start;
        border-radius: 8px;
        background: #fff;
        box-shadow: 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07);
    }
</style>