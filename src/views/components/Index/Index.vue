<template>
    <div class="main" style="height: 100%;">
        <el-container style="height: 100%;">
            <blog-aside class="hidden-xs-only"></blog-aside>
            <el-main class="main-right">
                <article class="article">
                    <div class="article-box">
                        <h1 class="article-title">你是什么人便会遇上什么人</h1>
                        <div class="article-inner">
                            <p class="cover-img">
                                <img src="http://pfakcwsi5.bkt.clouddn.com/image/jpg/img-1.jpg" alt="">
                            </p>
                            <p>八月环青海湖，一些零碎的记忆</p>
                            <h3>魔礼海</h3>
                            <p>有次潘子喝醉了，突然说，“你知道吗，魔礼海按的是一个Am和弦。”<br>我说：“魔个头，不如魔力红。”<br>潘子说：“我跟你讨论宗教时能不能正经点？”<br>我心想，干，Am和弦很正经吗？人家弹的还是一琵琶…</p>
                            <div class="article-other">
                                <div class="left"></div>
                                <div class="right">
                                    <a href="javascript:;" class="article-more">阅读全文 &gt;&gt;</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="article-box">
                        <h1 class="article-title">你是什么人便会遇上什么人</h1>
                        <div class="article-inner">
                            <p class="cover-img">
                                <img src="http://pfakcwsi5.bkt.clouddn.com/1-4.jpg" alt="">
                            </p>
                            <p>八月环青海湖，一些零碎的记忆</p>
                            <h3>魔礼海</h3>
                            <p>有次潘子喝醉了，突然说，“你知道吗，魔礼海按的是一个Am和弦。”<br>我说：“魔个头，不如魔力红。”<br>潘子说：“我跟你讨论宗教时能不能正经点？”<br>我心想，干，Am和弦很正经吗？人家弹的还是一琵琶…</p>
                            <div class="article-other">
                                <div class="left"></div>
                                <div class="right">
                                    <a href="javascript:;" class="article-more">阅读全文 &gt;&gt;</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                <div class="pages text-center" style="margin: 2rem 0;">
                    <el-pagination
                            background
                            :page-size="page_size"
                            layout="prev, pager, next"
                            @current-change="currentChange"
                            :total="total">
                    </el-pagination>
                </div>
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
        page_size: 6,
        total: 20
      }
    },
    mounted() {

    },
    methods: {
      currentChange() {

      }
    }
  }
</script>

<style lang="scss">

</style>
