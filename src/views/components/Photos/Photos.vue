<template>
    <div class="main" style="height: 100%;">
        <el-container style="height: 100%;">
            <blog-aside class="hidden-xs-only"></blog-aside>
            <el-main class="main-right">
                <article class="article">
                    <div class="article-box">
                        <h1 class="article-title">相册</h1>
                        <div class="article-inner">
                            <div class="inner-con">
                                <div class="date">
                                    <span>2018</span><span>4月</span>
                                </div>
                                <el-row :gutter="10">
                                    <el-col :xs="12" :sm="6">
                                        <div class="grid-content">
                                            <img style="width: 100%;height: 100%;" src="http://pfakcwsi5.bkt.clouddn.com/2-16.jpg?imageView2/1/w/300/h/300" alt="">
                                        </div>
                                    </el-col>
                                    <el-col :xs="12" :sm="6">
                                        <div class="grid-content">
                                            <img style="width: 100%;height: 100%;" src="http://pfakcwsi5.bkt.clouddn.com/image/jpg/img-1.jpg?imageView2/1/w/300/h/300" alt="">
                                        </div>
                                    </el-col>
                                    <el-col :xs="12" :sm="6">
                                        <div class="grid-content">
                                            <img style="width: 100%;height: 100%;" src="http://pfakcwsi5.bkt.clouddn.com/image/jpg/img-1.jpg?imageView2/1/w/300/h/300" alt="">
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                            <div class="article-other">
                                <div class="left"></div>
                                <div class="right">
                                    <a href="javascript:;" class="article-more">阅读全文 &gt;&gt;</a>
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
    .inner-con {
        .date {
            font-size: 1.6rem;
            font-weight: 600;
            margin: 1.5rem 0;
            span {
                margin-right: 1rem;
            }
        }
    }
</style>
