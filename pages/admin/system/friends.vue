<template>
    <div class="firends-class">
        <div class="card" style="margin-top: 60px;">
            <Panel>
                <div class="head">
                    <i class="iconfont icongonggao"><span>添加友链</span></i>
                </div>
                <div class="content">
                    <label>博客名称</label>
                    <div class="el_input">
                        <el-input v-model="name" clearable placeholder="请输入内容"></el-input>
                    </div>
                </div>
                <div class="content">
                    <label>短句介绍</label>
                    <div class="el_input">
                        <el-input v-model="intro" clearable placeholder="请输入内容"></el-input>
                    </div>
                </div>
                <div class="content">
                    <label>博客地址</label>
                    <div class="el_input">
                        <el-input v-model="url" clearable placeholder="请输入内容"></el-input>
                    </div>  
                </div>
                <div class="content">
                    <label>选择头像</label>
                    <div class="el_input" style="width: 0px;">
                        <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/">
                            <el-button size="medium" type="primary">点击上传</el-button>
                            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                        </el-upload>
                    </div>  
                </div>
                <div class="commit">
                    <el-button type="primary" icon="el-icon-upload">发布</el-button>
                    <el-button icon="el-icon-delete">清空</el-button>
                </div>
            </Panel>
        </div>      
        <div class="card">
            <Panel>
                <div class="head">
                    <i class="iconfont iconbiji"><span>友链列表</span></i>
                </div>
                <div class="tags-table">
                    <el-table :data="friendsData" stripe style="width: 100%">
                        <el-table-column prop="id" label="ID" sortable width="350"></el-table-column>
                        <el-table-column prop="avatar" label="头像" width="450"></el-table-column>
                        <el-table-column prop="name" label="博客名称" width="450"></el-table-column>
                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <el-button type="danger" icon="el-icon-delete" circle @click="del(scope.$index, scope.row)"></el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </Panel>
        </div>
    </div>
</template>

<script>
import Panel from '@/components/Admin/Panel'
export default {
    data () {
        return {
            name: '',
            intro: '',
            url: '',
            friendsData: [
                {
                    id: 1,
                    name: '从入门到放弃'
                },
                {
                    id: 1,
                    name: '从入门到放弃'
                },
                {
                    id: 1,
                    name: '从入门到放弃'
                },
            ]
        }
    },
    methods: {
    },
    components: {
        Panel
    }
}
</script>

<style lang="scss" scoped>
    .firends-class {
        height: 100%;
        min-height: 100vh;
        width: 100%;
        background: #eee;
        color: #58666e;
        .card {
            width: 100%;
            margin-bottom: 100px;
            .head {
                display: flex;
                justify-content: flex-start;
                padding-top: 30px;
                padding-bottom: 30px;
                .icongonggao, .iconbiji, .iconshu, .iconbiaoqian {
                    font-size: 15px;
                    padding-left: 10px;
                    border-left: 5px solid #409EFF;
                    font-weight: bold;
                    span {
                        padding-left: 10px;
                    }
                }
            }
        }
        .content {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-bottom: 10px;
            box-sizing: border-box;
            padding-bottom: 20px;
            label {
                width: 100px;
            }
            .el_input {
                width: 350px;
                margin-right: 20px;
                display: flex;
                justify-content: flex-start;
                .upload-demo {
                    display: flex;
                    justify-items: center;
                    .el-upload__tip {
                        position: relative;
                        top: 7px;
                        width: 250px;
                        margin-left: 20px;
                    }
                }
            }
        }
        .commit {
                width: 100%;
                display: flex;
                justify-content: flex-end;
                height: 40px;
                padding-top: 6px;
                padding-bottom: 20px;
            }        
        .tags-table {
            width: 100%;
            padding-bottom: 20px;
        }
    }
</style>