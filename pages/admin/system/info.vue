<template>
    <div class="system-info">
        <div class="card" style="margin-top: 60px;">
            <Panel>
                <div class="head">
                    <i class="iconfont icongonggao"><span>网站公告</span></i>
                </div>
                <div class="content">
                    <label>公告内容</label>
                    <div class="el_input">
                        <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="notice"></el-input>
                    </div>
                    <div class="commit">
                        <el-button type="primary" icon="el-icon-upload" circle></el-button>
                    </div>
                </div>
            </Panel>
        </div>
        <div class="card">
            <Panel>
                <div class="head">
                    <i class="iconfont iconbiji"><span>笔记类型</span></i>
                </div>
                <div class="content">
                    <label>笔记标签</label>
                    <div class="el_input">
                        <el-input v-model="note" clearable placeholder="请输入内容"></el-input>
                    </div>
                    <div class="commit">
                        <el-button type="primary" icon="el-icon-upload" circle></el-button>
                    </div>
                </div>
                <div class="tags-table">
                    <el-table :data="notesData" stripe style="width: 100%">
                        <el-table-column prop="id" label="ID" sortable width="550"></el-table-column>
                        <el-table-column prop="noteTag" label="内容" width="550"></el-table-column>
                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <el-button type="danger" icon="el-icon-delete" circle @click="del(scope.$index, scope.row)"></el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </Panel>
        </div>
        <div class="card">
            <Panel>
                <div class="head">
                    <i class="iconfont iconshu"><span>博客类型</span></i>
                </div>
                <div class="content">
                    <label>博客标签</label>
                    <div class="el_input">
                        <el-input v-model="article" clearable placeholder="请输入内容"></el-input>
                    </div>
                    <div class="commit">
                        <el-button type="primary" icon="el-icon-upload" circle></el-button>
                    </div>
                </div>
                <div class="tags-table">
                    <el-table :data="articlesData" stripe style="width: 100%">
                        <el-table-column prop="id" label="ID" sortable width="550"></el-table-column>
                        <el-table-column prop="noteTag" label="内容" width="550"></el-table-column>
                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <el-button type="danger" icon="el-icon-delete" circle @click="del(scope.$index, scope.row)"></el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </Panel>
        </div>
        <div class="card">
            <Panel>
                <div class="head">
                    <i class="iconfont iconbiaoqian"><span>技能类型</span></i>
                </div>
                <div class="content">
                    <label>技能标签</label>
                    <div class="el_input">
                        <el-input v-model="tagName" clearable placeholder="请输入内容"></el-input>
                    </div>
                    <div class="commit">
                        <el-button type="primary" icon="el-icon-upload" circle @click="commitTag"></el-button>
                    </div>
                </div>
                <div class="tags-table">
                    <el-table :data="tagsData" stripe style="width: 100%">
                        <el-table-column prop="id" label="ID" sortable width="550"></el-table-column>
                        <el-table-column prop="TagName" label="内容" width="550"></el-table-column>
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
import { addTag } from '@/api/tag'
export default {
    data () {
        return {
            notice: '',
            note: '',
            article: '',
            tagName: '',
            notesData: [
                {
                    id: 1,
                    noteTag: '从入门到放弃'
                },
            ],
            articlesData: [
                {
                    id: 1,
                    noteTag: '从入门到放弃'
                },
            ],
            tagsData: [
                {
                    id: 1,
                    TagName: '从入门到放弃'
                },
            ],
        }
    },
    methods: {
        async commitTag () {
            if (!this.tagName) {
                this.$message({
                    type: 'error',
                    message: '技能标签不能为空'
                })
            }

            let res = await addTag(this.tagName)
            console.log('aa')
            console.log(res)
            if (res.data.code == 200) {
                this.$message({
                    type: 'success',
                    message: '添加成功！'
                })
            } else {
                this.$message({
                    type: 'error',
                    message: res.data.info
                })
            }
        }
    },
    components: {
        Panel
    }
}
</script>

<style lang="scss" scoped>
    .system-info {
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
                padding-bottom: 20px;
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
            margin-bottom: 20px;
            box-sizing: border-box;
            padding-bottom: 20px;
            label {
                width: 100px;
            }
            .el_input {
                margin-right: 20px;
            }
            .commit {
                height: 40px;
                padding-top: 6px;
            }
        }        
        .tags-table {
            width: 100%;
            padding-bottom: 20px;
        }
    }

</style>