<template>
    <footer id="footer">
        <p>
            <span>
                Copyright © 2021 | Powered By ZRM | Version: v1.0.0
            </span>
            <span>
                Theme By <a href="https://www.xiaye.top" target="_black">xiaye</a>
            </span>
            <span>
                <a href="http://beian.miit.gov.cn" target="_black">赣ICP备20009667号-3</a>
            </span>
        </p>
        <div class="bg">
            <div class="mountain"></div>
            <div class="tree"></div>
            <div class="clode"></div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#footer{
    width: 100%;
    height: 126px;
    position: relative;
    display: flex;
    justify-content: center;
    color: white;
    text-align: center;
    p {
        width: 100%;
        padding: 10px;
        letter-spacing: 2px;
        cursor: pointer;
        color: #888;
        font-size: 12px;
        z-index: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        line-height: 24px;
        span, a {
            font-family: Merriweather,"Open Sans","Microsoft Jhenghei","Microsoft Yahei",sans-serif!important;
        }
        a {
            color: #888;
        }
    }
    .bg {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        img {
            width: 100%;
            position: absolute;
            left: 0;
            bottom: 0;
            &:nth-child(1) {
                z-index: 1;
            }
        }
        div {
            background-size: cover;
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            bottom: 0;
        }
        div.mountain {
            background-image: url(../../assets/img/footer_mountain.png);
            bottom: 18px;
        }
        div.tree {
            background-image: url(../../assets/img/footer_tree.png);
        }
        div.clode {
            background-image: url(../../assets/img/footer_clode.png);
        }
    }
}

// 移动端
@media screen and (max-width: 1024px) {
    footer {
        font-size: 12px;
        p {
            letter-spacing: 1px!important;
        }
    }
}
</style>