<template>
    <div class="counter-class">
        <div class="current-page-class">
            <div class="goto-home-class">
                <i class="iconfont iconshouye"></i>
            </div>
            <div class="page-name-class">
                <span> - {{ pageName }}</span>
            </div>
        </div>
        <div class="search-class">
            <el-input class="input-with-select" v-model="value" size="small"  placeholder="输入关键字搜索">
                <el-button slot="append" @click="search" icon="el-icon-search"></el-button>
            </el-input>
        </div>
        <div class="total-class">
            <i class="iconfont iconwenzhangguanli"></i>
            <span>总数：{{ total }}</span>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            value: ''
        }
    },
    methods: {
        search () {
            console.log('aa')
        }
    },
    props: {
        pageName: {
            type: String,
            default: '页面名称'
        },
        total: {
            type: Number,
            default: 999
        }
    }
}
</script>

<style lang="scss" scoped>
    .counter-class {
        width: 100%;
        height: 60px;
        line-height: 60px;
        display: flex;
        justify-content: space-between;
        color: #58666e;
        .current-page-class {
            width: 200px;
            line-height: 60px;
            display: flex;
            justify-content: flex-start;
            .goto-home-class {
                cursor: pointer;
                padding: 0 10px;
                .iconshouye {
                    font-size: 20px;
                }
            }
        }
        .search-class {
            width: 250px;
            padding: 5px 0 0 0;
        }
        .total-class {
            width: 150px;
            line-height: 60px;
            padding: 0 10px;
            .iconwenzhangguanli {
                font-size: 20px;
                padding: 0 5px;
            }
        }
    }
</style>