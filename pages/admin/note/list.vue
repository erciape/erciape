<template>
    <div class="note-list">
        <Panel>
            <Counter :pageName="pageName" :total="total"></Counter>
            <div class="table">
                <el-table :data="tableData" stripe style="width: 100%">
                    <el-table-column prop="id" label="ID" sortable width="100"></el-table-column>
                    <el-table-column prop="title" label="文章标题" width="250"></el-table-column>
                    <el-table-column prop="type" label="文章类型" width="180"></el-table-column>
                    <el-table-column sortable prop="likes" label="点赞次数" width="150"></el-table-column>
                    <el-table-column sortable prop="browse" label="浏览次数" width="150"></el-table-column>
                    <el-table-column prop="created_at" label="发布时间" width="200"></el-table-column>
                    <el-table-column prop="updated_at" label="更新时间" width="200"></el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button size="mini" @click="edit(scope.$index, scope.row)">编辑</el-button>
                            <el-button size="mini" type="danger" @click="del(scope.$index, scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <Paginate></Paginate>
        </Panel>
    </div>
</template>

<script>
import Panel from '@/components/Admin/Panel'
import Counter from '@/components/Admin/Counter'
import Paginate from '@/components/Paginate'
export default {
    data () {
        return {
            pageName: '笔记列表',
            total: 0,
            tableData: [
                {
                    id: 1,
                    title: '从入门到放弃',
                    type: 'PHP',
                    likes: 999,
                    browse: 999,
                    created_at: '2021-4-28 12:00',
                    updated_at: '2021-4-28 12:00'
                }, 
            ],
        }
    },
    methods: {
        edit(index, row) {
            console.log(index, row);
        },
        del(index, row) {
            console.log(index, row);
        }
    },
    components: {
        Panel,
        Counter,
        Paginate
    }
}
</script>

<style lang="scss" scoped>
    .note-list {
        height: 100%;
        min-height: 100vh;
        width: 100%;
        background: #eee;
        display: flex;
        justify-content: flex-start;
        .table {
        width: 100%;
        padding: 15px 10px 25px 10px;
        box-sizing: border-box;
        }
    }
</style>