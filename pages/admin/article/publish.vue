<template>
    <div class="publish-article">
        <Panel>
            <div class="head">
                <i class="iconfont iconwenzhangguanli"><span>发布文章</span></i>
            </div>
            <div class="form-content">
                <div class="row">
                    <span>文章标题：</span>
                    <div class="el_input">
                        <el-input v-model="title" clearable placeholder="请输入内容"></el-input>
                    </div>
                </div>
                <div class="row">
                    <span>文章图片：</span>
                    <el-select v-model="picture" clearable placeholder="请选择">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </div>
                <div class="row">
                    <span>文章类型：</span>
                    <el-select v-model="type" clearable placeholder="请选择">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                    <el-select v-model="tag" multiple clearable collapse-tags style="margin-left: 20px;" placeholder="请选择">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </div>
                <div class="row desc">
                    <span>文章描述：</span>
                    <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="desc"></el-input>
                </div>
                <div class="editor">
                    <no-ssr><mavon-editor :toolbars="markdownOption" v-model="content" /></no-ssr>
                </div>
                <div class="button-group">
                    <div class="confirm">
                        <el-button type="primary" icon="el-icon-upload">发布</el-button>
                    </div>
                    <div class="clear">
                        <el-button icon="el-icon-delete">清空</el-button>
                    </div>
                </div>
            </div>
        </Panel>
    </div>
</template>

<script>
import { mavonEditor } from "mavon-editor"
import "mavon-editor/dist/css/index.css"
import Panel from '@/components/Admin/Panel'
export default {
    data () {
        return {
            title: '',
            options: [{
            value: '选项1',
            label: '黄金糕'
            }, {
            value: '选项2',
            label: '双皮奶'
            }, {
            value: '选项3',
            label: '蚵仔煎'
            }, {
            value: '选项4',
            label: '龙须面'
            }, {
            value: '选项5',
            label: '北京烤鸭'
            }],
            picture: '',
            type: '',
            tag: '',
            desc: '',
            content: '',
            markdownOption: {
                bold: true, // 粗体
                italic: true, // 斜体
                header: true, // 标题
                underline: true, // 下划线
                strikethrough: true, // 中划线
                mark: true, // 标记
                superscript: true, // 上角标
                subscript: true, // 下角标
                quote: true, // 引用
                ol: true, // 有序列表
                ul: true, // 无序列表
                link: true, // 链接
                imagelink: true, // 图片链接
                code: true, // code
                table: true, // 表格
                fullscreen: true, // 全屏编辑
                readmodel: true, // 沉浸式阅读
                htmlcode: true, // 展示html源码
                help: true, // 帮助
                /* 1.3.5 */
                undo: true, // 上一步
                redo: true, // 下一步
                trash: true, // 清空
                save: true, // 保存（触发events中的save事件）
                /* 1.4.2 */
                navigation: true, // 导航目录
                /* 2.1.8 */
                alignleft: true, // 左对齐
                aligncenter: true, // 居中
                alignright: true, // 右对齐
                /* 2.2.1 */
                subfield: true, // 单双栏模式
                preview: true, // 预览
            }
        }
    },
    components: {
        Panel,
        mavonEditor
    }
}
</script>

<style lang="scss" scoped>
    .publish-article {
        height: 100%;
        min-height: 100vh;
        width: 100%;
        background: #eee;
        color: #58666e;
        display: flex;
        justify-content: flex-start;
        .head {
            height: 80px;
            line-height: 80px;
            margin-bottom: 20px;
            text-align: center;
            .iconwenzhangguanli {
                font-size: 25px;
                span {
                    padding-left: 10px;
                }
            }
        }
        .form-content {
            .row {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                margin-bottom: 30px;
                span {
                    width: 6%;
                    text-align: left;
                    padding-left: 10px;
                }
                .el_input {
                    width: 300px;
                }
            }
            .editor {
                margin-bottom: 20px;
            }
            .button-group {
                height: 40px;
                display: flex;
                justify-content: flex-end;
                margin-bottom: 20px;
                .confirm {
                    padding-right: 20px;
                }
            }
        }
    }
</style>