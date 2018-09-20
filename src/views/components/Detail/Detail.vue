<template>
    <div class="list detail" ref="viewBox">
        <header-nav></header-nav>
        <div class="list-main container">
            <el-row :gutter="20">
                <el-col :sm="16">
                    <div class="grid-content list-left">
                        <el-row :gutter="10">
                            <el-col :xs="24">
                                <div class="grid-content box">
                                    <div class="item">
                                        <h2 class="title">{{detail.title}}</h2>
                                        <p>原文链接 : <a style="color: #259;" :href="detail.url" target="_blank">{{detail.url}}</a></p>
                                        <div class="code-box">
                                            <div v-for="code in detail.codes">
                                                <p><strong>{{code.title}}</strong></p>
                                                <pre>
                                                <code>
    {{code.code}}
                                                </code>
                                            </pre>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
                <el-col :sm="8" class="hidden-xs-only">
                    <div class="grid-content list-right">
                        <div class="con">
                            <div class="search">
                                <el-input
                                        placeholder="请输入内容"
                                        suffix-icon="el-icon-search"
                                        v-model="input">
                                </el-input>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
  import HeaderNav from '../common/Header';

  export default {
    components: {
      HeaderNav
    },
    data() {
      return {
        input: '',
        detail: {}
      }
    },
    mounted() {
      this.detail = {
        "title": "js禁用页面上右键菜单、选中和复制",
        "url": "https://www.cnblogs.com/liaidai/p/6737784.html",
        "codes": [
          {
            "title": "禁用右键菜单",
            "code": "document.oncontextmenu = function(){\n    event.returnValue = false;\n};"
          },
          {
            "title": "禁用选中功能",
            "code": "document.onselectstart = function(){\n    event.returnValue = false;\n};"
          },
          {
            "title": "禁用复制功能",
            "code": "document.oncopy = function(){\n    event.returnValue = false;\n};"
          },
          {
            "title": "禁用鼠标的左右键",
            "code": "document.onmousedown = function(){\n" +
              "    if(event.which==1){//鼠标左键\n" +
              "        return false;\n" +
              "    }\n" +
              "\n" +
              "    if(event.which==3){//鼠标右键\n" +
              "        return false;\n" +
              "    }\n" +
              "};"
          },
          {
            "title": "获取键盘上的输入值",
            "code": "document.onkeydown = function(){\n" +
              "    console.info(event.which);\n" +
              "    if(event.which==13){\n" +
              "        console.info(\"回车键\");\n" +
              "    }\n" +
              "};"
          }
        ]
      }
    },
    methods: {

    }
  }
</script>

<style lang="scss">
    .list {
        &-main {
            margin-bottom: 3rem;
        }
        &-left {
            .box {
                background: #fff;
                padding-bottom: 1.5rem;
            }
        }
        &-right {
            .con {
                background: #fff;
                padding: 1.5rem;
            }
            .el-input {
                background: #e3e7ec33;
            }
            .el-input__inner {
                background: transparent;
            }
            .el-input__icon {
                font-size: 2rem;
            }
        }
    }
    .item {
        padding: 1.5rem 1.5rem 0;
        .title {
            font-size: 2rem;
            margin-bottom: 1.5rem;
        }
    }
    .code-box {
        margin-top: 2rem;
        p {
            font-size: 1.4rem;
            margin: 1.5rem 0 0;
        }
        code {
            display: block;
            background: #f8f8f8;
            font-size: 1.4rem;
            padding: 10px;
        }
    }
</style>
