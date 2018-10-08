<template>
    <div class="main" style="height: 100%;">
        <el-container style="height: 100%;">
            <blog-aside class="hidden-sm-and-down"></blog-aside>
            <el-main class="main-right">
                <div class="hidden-md-and-up" style="margin: -1.5rem -1.5rem 0;">
                    <div class="overlay" style="height: 10rem;"></div>
                    <div class="main-left">
                        <div class="profile">
                            <a href="javascript:;">
                                <img class="cover" src="http://pfakcwsi5.bkt.clouddn.com/1-4.jpg" alt="">
                            </a>
                        </div>
                        <div class="author" style="margin: 1rem 0;">MenLy</div>
                        <p class="sub">胆小认生，不易相处</p>
                        <div class="nav-menu" style="min-height: auto;margin-bottom: 10px;">
                            <ul>
                                <li style="float: left;margin: 0 10px;">
                                    <router-link to="/index"><a href="javascript:;">主页</a></router-link>
                                </li>
                                <li style="float: left;margin: 0 10px;">
                                    <router-link to="/photos"><a href="javascript:;">相册</a></router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <article class="article">
                    <div class="article-box">
                        <h1 class="article-title">相册</h1>
                        <div class="article-inner">
                            <div class="inner-con" v-for="item in photos" :key="item.id">
                                <div class="date">
                                    <span>{{item.year}}</span><span>{{item.month}}月</span>
                                </div>
                                <el-row :gutter="10" v-viewer="{movable: false}" class="viewer-imgs">
                                    <el-col :xs="12" :sm="6" v-for="i in item.images" :key="i">
                                        <div class="grid-content">
                                            <img style="width: 100%;height: 100%;" :src="i+'?imageView2/1/w/300/h/300'" alt="">
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
        total: 20,
        dialogVisible: false,
        screenWidth: window.innerWidth || document.body.clientWidth,
        width: '',
        height: '',
        dialogMsg: {},
        photos: [
          {
            id: 1,
            created_date: '2018-09-30',
            year: 2018,
            month: 9,
            images: [
              'http://pfakcwsi5.bkt.clouddn.com/2-16.jpg'
            ]
          },
          {
            id: 2,
            created_date: '2018-08-29',
            year: 2018,
            month: 8,
            images: [
              'http://pfakcwsi5.bkt.clouddn.com/1-4.jpg',
              'http://pfakcwsi5.bkt.clouddn.com/2-16.jpg'
            ]
          }
        ]
      }
    },
    activated() {
      this.$common.setTitle('我的相册');
    },
    mounted() {
      this.resize()
    },
    methods: {
      currentChange() {

      },
      handleClose(done) {
        done();
      },
      showPics(item) {
        this.dialogVisible = true;
        this.dialogMsg = {
          imgs: [
            'http://pfakcwsi5.bkt.clouddn.com/2-16.jpg?imageView2/1/w/300/h/300',
            'http://pfakcwsi5.bkt.clouddn.com/image/jpg/img-1.jpg?imageView2/1/w/300/h/300'
          ]
        };
      },
      resize() {
        const that = this;
        window.onresize = () => {
          return (() => {
            window.screenWidth = document.body.clientWidth;
            that.screenWidth = window.screenWidth;
          })()
        }
      },
      show () {
        const viewer = this.$el.querySelector('.viewer-imgs').$viewer
        viewer.show()
      }
    },
    watch: {
      screenWidth(newV, oldV) {
        if (newV < 768) {
          this.width = this.screenWidth * 0.9 + 'px';
        } else {
          this.width = this.screenWidth * 0.5 + 'px'
        }
        this.height = parseInt(this.width) * 0.75 + 'px';
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
