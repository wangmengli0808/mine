<template>
    <div class="home-one">
        <el-row :gutter="20">
            <el-col :sm="8" class="hidden-xs-only">
                <div class="grid-content box-left">
                    <div class="con">
                        <h3>关于我</h3>
                        <div class="con-box">
                            <div class="img-item"></div>
                            <p>
                                <b>MenLy</b>，一个90后草根女站长！15年入行。一直潜心研究web前端技术，一边工作一边积累经验，分享一些个人博客模板，以及SEO优化等心得。
                            </p>
                        </div>
                    </div>
                    <!--<div class="con">
                        <h3>我的相册</h3>
                        <el-row :gutter="10" class="con-box img-list">
                            <el-col :span="8">
                                <div class="grid-content">
                                    <a href="javascript:;">
                                        <img class="cover" src="../../../common/img/2-16.jpg" alt="">
                                    </a>
                                </div>
                            </el-col>
                            <el-col :span="8">
                                <div class="grid-content">
                                    <a href="javascript:;">
                                        <img class="cover" src="../../../common/img/2-16.jpg" alt="">
                                    </a>
                                </div>
                            </el-col>
                            <el-col :span="8">
                                <div class="grid-content">
                                    <a href="javascript:;">
                                        <img class="cover" src="../../../common/img/2-16.jpg" alt="">
                                    </a>
                                </div>
                            </el-col>
                        </el-row>
                    </div>-->
                    <div class="con">
                        <h3>文章分类</h3>
                        <el-row :gutter="10" class="con-box article-list">
                            <el-col :span="24" v-for="item in currentTypes" :key="item.name">
                                <div class="grid-content" @click="toList">
                                    <a href="javascript:;">{{item.title}}</a>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </el-col>
            <el-col :sm="16">
                <div class="grid-content box-right">
                    <div>
                        <el-row :gutter="10" class="item" v-for="item in currentData" :key="item.id">
                            <el-col :xs="24" class="hidden-sm-and-up">
                                <div class="grid-content">
                                    <div class="img-rt">
                                        <div class="img" :style="{backgroundImage:'url(' + item.src + ')'}"></div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :xs="24" :sm="18">
                                <div class="grid-content">
                                    <h3 class="item-title">{{item.title}}</h3>
                                    <p class="item-desc overflow" style="-webkit-box-orient: vertical;">{{item.desc}}</p>
                                </div>
                            </el-col>
                            <el-col :xs="24" :sm="6" class="hidden-xs-only">
                                <div class="grid-content">
                                    <div class="img-rt">
                                        <div class="img" :style="{backgroundImage:'url(' + item.src + ')'}"></div>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="pages text-center" style="margin: 2rem 0;">
                        <el-pagination
                                background
                                :page-size="page_size"
                                layout="prev, pager, next"
                                @current-change="currentChange"
                                :total="total">
                        </el-pagination>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
  import { mapState } from "vuex";
  import data from "../../../common/json/home1";

  export default {
    name: 'home-first',
    data () {
      return {
        page_size: 6,
        total: 0,
        data: [],
        articles: [],
        currentData: [],
        currentTypes: []
      }
    },
    mounted() {
      this.currentTypes = [
        {
          "title": "学无止境",
          "name": "article"
        },
        {
          "title": "小说分享",
          "name": "novel"
        },
        {
          "title": "动漫最爱",
          "name": "anime"
        }
      ];
      this.getList();
    },
    methods: {
      getList() {
        this.data = data;
        this.total = this.data.length;
        this.currentChange(1);
      },
      currentChange(item) {
        this.currentData = [];
        for (let i = (item - 1) * this.page_size; i < item * this.page_size; i++) {
          if (this.data[i]) {
            this.currentData.push(this.data[i])
          }
        }
        this.toTop();
      },
      toTop() {
        let timer = null;
        timer = setInterval(function () {
          let osTop = document.documentElement.scrollTop || document.body.scrollTop;
          let ispeed = Math.floor(-osTop / 5);
          document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
          if (osTop === 0) {
            clearInterval(timer)
          }
        },30)
      },
      toList() {
        this.$router.push({
          path: '/list'
        })
      }
    },
    computed: {
      ...mapState({
        isLoading: state => state.isLoading,
        color: state => state.color
      })
    },
    watch: {
      color(val) {
        console.log(val);
      }
    }
  }
</script>

<style lang="scss">
    .con {
        background: rgba(255,255,255,0.5);
        margin-bottom: 2rem;
        overflow: hidden;
        h3 {
            color: #333;
            font-size: 1.4rem;
            line-height: 3rem;
            padding-left: 2rem;
            background: #fff;
        }
        &-box {
            padding: 1rem;
            line-height: 2.4rem;
            font-size: 1.4rem;
        }
    }
    .img-item {
        width: 12rem;
        height: 9rem;
        float: left;
        margin-right: 1rem;
        background: url("../../../common/img/2-16.jpg") no-repeat center;
        background-size: cover;
    }
    .img-list {
        .grid-content {
            height: 8rem;
            overflow: hidden;
        }
        a {
            display: block;
            width: 100%;
            height: 100%;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
    .article-list {
        line-height: 2.6rem;
        padding-left: 1rem;
        .grid-content {
            margin-bottom: 5px;
        }
        a {
            color: #555;
            &:hover {
                color: #000;
            }
        }
    }
    .box-right {
        .item {
            background: rgba(255, 255, 255, 0.8);
            padding: 1.5rem;
            margin-bottom: 1.5rem;
            &-title {
                font-size: 1.6rem;
                cursor: pointer;
            }
            &-desc {
                line-height: 2.2rem;
                font-size: 1.4rem;
                margin-top: 2rem;
                -webkit-line-clamp: 2;
            }
        }
        .img-rt {
            width: 100%;
            height: 10rem;
            overflow: hidden;
            .img {
                height: 100%;
                /*background-image: url("../../../common/img/login2.jpg");*/
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
                -webkit-transition: all .5s;
                -moz-transition: all .5s;
                -ms-transition: all .5s;
                -o-transition: all .5s;
                transition: all .5s;
            }
        }
    }
    .el-pagination.is-background .el-pager li:not(.disabled).active {
        background-color: #C93282;
        &:hover {
            color: #fff;
        }
    }
    .el-pagination.is-background .el-pager li:not(.disabled):hover {
        color: #C93282;
    }
    @media only screen and (max-width: 768px) {
        .box-right {
            .img-rt {
                height: 15rem;
                margin-bottom: 2rem;
            }
        }
    }
</style>
