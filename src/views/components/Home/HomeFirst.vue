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
                    <div class="con">
                        <h3>我的相册</h3>
                        <el-row :gutter="10" class="con-box img-list">
                            <el-col :span="8">
                                <div class="grid-content">
                                    <a href="javascript:;"></a>
                                </div>
                            </el-col>
                            <el-col :span="8">
                                <div class="grid-content">
                                    <a href="javascript:;"></a>
                                </div>
                            </el-col>
                            <el-col :span="8">
                                <div class="grid-content">
                                    <a href="javascript:;"></a>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="con">
                        <h3>文章分类</h3>
                        <el-row :gutter="10" class="con-box article-list">
                            <el-col :span="24">
                                <div class="grid-content" @click="toList">
                                    <a href="javascript:;">学无止境</a>
                                </div>
                            </el-col>
                            <el-col :span="24">
                                <div class="grid-content">
                                    <a href="javascript:;">日志</a>
                                </div>
                            </el-col>
                            <el-col :span="24">
                                <div class="grid-content">
                                    <a href="javascript:;">美文欣赏</a>
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
      this.getList()
    },
    methods: {
      getList() {
        this.data = [
          {
            "id": 1,
            "title": "你是什么人便会遇上什么人",
            "desc": "有时就为了一句狠话，像心头一口毒钉，永远麻痺着亲密感情交流。恶言，真要慎出，平日多誠心爱语，乃最简易之佈施。",
            "src": require('../../../common/img/1-3.jpeg')
          },
          {
            "id": 2,
            "title": "你是什么人便会遇上什么人",
            "desc": "有时就为了一句狠话，像心头一口毒钉，永远麻痺着亲密感情交流。恶言，真要慎出，平日多誠心爱语，乃最简易之佈施。",
            "src": require('../../../common/img/login2.jpg')
          },
          {
            "id": 3,
            "title": "你是什么人便会遇上什么人",
            "desc": "有时就为了一句狠话，像心头一口毒钉，永远麻痺着亲密感情交流。恶言，真要慎出，平日多誠心爱语，乃最简易之佈施。",
            "src": require('../../../common/img/login2.jpg')
          },
          {
            "id": 4,
            "title": "你是什么人便会遇上什么人",
            "desc": "有时就为了一句狠话，像心头一口毒钉，永远麻痺着亲密感情交流。恶言，真要慎出，平日多誠心爱语，乃最简易之佈施。",
            "src": require('../../../common/img/login2.jpg')
          },
          {
            "id": 5,
            "title": "你是什么人便会遇上什么人",
            "desc": "有时就为了一句狠话，像心头一口毒钉，永远麻痺着亲密感情交流。恶言，真要慎出，平日多誠心爱语，乃最简易之佈施。",
            "src": require('../../../common/img/login2.jpg')
          },
          {
            "id": 6,
            "title": "你是什么人便会遇上什么人",
            "desc": "有时就为了一句狠话，像心头一口毒钉，永远麻痺着亲密感情交流。恶言，真要慎出，平日多誠心爱语，乃最简易之佈施。",
            "src": require('../../../common/img/1-4.jpg')
          },
          {
            "id": 7,
            "title": "你是什么人便会遇上什么人",
            "desc": "有时就为了一句狠话，像心头一口毒钉，永远麻痺着亲密感情交流。恶言，真要慎出，平日多誠心爱语，乃最简易之佈施。",
            "src": require('../../../common/img/login2.jpg')
          },
          {
            "id": 8,
            "title": "你是什么人便会遇上什么人",
            "desc": "有时就为了一句狠话，像心头一口毒钉，永远麻痺着亲密感情交流。恶言，真要慎出，平日多誠心爱语，乃最简易之佈施。",
            "src": require('../../../common/img/login2.jpg')
          },
          {
            "id": 9,
            "title": "你是什么人便会遇上什么人",
            "desc": "有时就为了一句狠话，像心头一口毒钉，永远麻痺着亲密感情交流。恶言，真要慎出，平日多誠心爱语，乃最简易之佈施。",
            "src": require('../../../common/img/login1.jpg')
          },
          {
            "id": 10,
            "title": "你是什么人便会遇上什么人",
            "desc": "有时就为了一句狠话，像心头一口毒钉，永远麻痺着亲密感情交流。恶言，真要慎出，平日多誠心爱语，乃最简易之佈施。",
            "src": require('../../../common/img/login2.jpg')
          },
          {
            "id": 11,
            "title": "你是什么人便会遇上什么人",
            "desc": "有时就为了一句狠话，像心头一口毒钉，永远麻痺着亲密感情交流。恶言，真要慎出，平日多誠心爱语，乃最简易之佈施。",
            "src": require('../../../common/img/1-3.jpeg')
          },
          {
            "id": 12,
            "title": "你是什么人便会遇上什么人",
            "desc": "有时就为了一句狠话，像心头一口毒钉，永远麻痺着亲密感情交流。恶言，真要慎出，平日多誠心爱语，乃最简易之佈施。",
            "src": require('../../../common/img/login2.jpg')
          },
          {
            "id": 13,
            "title": "你是什么人便会遇上什么人",
            "desc": "有时就为了一句狠话，像心头一口毒钉，永远麻痺着亲密感情交流。恶言，真要慎出，平日多誠心爱语，乃最简易之佈施。",
            "src": require('../../../common/img/login2.jpg')
          },
          {
            "id": 14,
            "title": "你是什么人便会遇上什么人",
            "desc": "有时就为了一句狠话，像心头一口毒钉，永远麻痺着亲密感情交流。恶言，真要慎出，平日多誠心爱语，乃最简易之佈施。",
            "src": require('../../../common/img/login2.jpg')
          },
          {
            "id": 15,
            "title": "你是什么人便会遇上什么人",
            "desc": "有时就为了一句狠话，像心头一口毒钉，永远麻痺着亲密感情交流。恶言，真要慎出，平日多誠心爱语，乃最简易之佈施。",
            "src": require('../../../common/img/login2.jpg')
          },
          {
            "id": 16,
            "title": "你是什么人便会遇上什么人",
            "desc": "有时就为了一句狠话，像心头一口毒钉，永远麻痺着亲密感情交流。恶言，真要慎出，平日多誠心爱语，乃最简易之佈施。",
            "src": require('../../../common/img/1-4.jpg')
          }
        ];
        this.total = this.data.length;
        this.currentChange(1)
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
        background: url("../../../common/img/login2.jpg") no-repeat center;
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
            background-image: url("../../../common/img/login1.jpg");
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
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
