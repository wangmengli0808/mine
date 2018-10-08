<template>
    <div class="main" style="height: 100%;">
        <el-container style="height: 100%;">
            <blog-aside class="hidden-sm-and-down"></blog-aside>
            <el-main class="main-right">
                <article class="article">
                    <div class="article-box">
                        <h1 class="article-title">{{detail.title}}</h1>
                        <div class="article-inner">
                            <div class="item">
                                <h2 class="title"></h2>
                                <p>原文链接 : <a style="color: #259;" :href="detail.url" target="_blank">{{detail.url}}</a></p>
                                <div class="code-box">
                                    <p>有时候我们不想页面上的内容被人复制走，那么就可以使用js对页面进行设置，禁止右键菜单、禁止选中、禁止复制等功能可以有效的达到这个效果。</p>
                                    <div v-for="code in detail.codes">
                                        <h3>{{code.title}}</h3>
                                        <pre style="line-height: normal;"><code><span class="code-tag"><span class="code-name">document.oncontextmenu = function(){event.returnValue = false;};</span></span></code></pre>
                                    </div>
                                </div>
                            </div>
                            <div class="article-other">
                                <div class="left inner-tags">
                                    <i class="fa fa-tags" style="color: #999;font-size: 1.8rem;margin-right: 10px;"></i>
                                    <span class="tag color3">js</span>
                                    <span class="tag color1">js</span>
                                    <span class="tag color2">js</span>
                                    <span class="tag color4">js</span>
                                </div>
                                <div class="right">
                                    <a href="javascript:;" class="fa-more">
                                        <i class="fa fa-share-alt"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </el-main>
        </el-container>
    </div>
</template>

<script>
  import BlogAside from '../common/Aside';

  export default {
    components: {
      BlogAside
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

</style>
