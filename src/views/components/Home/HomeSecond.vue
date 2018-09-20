<template>
    <div class="home-one">
        <el-row :gutter="10" class="box">
            <!--<el-col :xs="12" :sm="6" class="reveal-top" v-for="item in data" :key="item.id">
                <div class="grid-content">
                    <img :src="item.src" alt="" style="width: 100%;">
                </div>
            </el-col>-->
            <el-col :xs="12" :sm="6" v-show="currData1.length">
                <div class="grid-content">
                    <el-row>
                        <el-col :xs="24" class="reveal-top" v-for="item in currData1" :key="item.id">
                            <div class="grid-content">
                                <img v-lazy="item.src" alt="" style="width: 100%;">
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
            <el-col :xs="12" :sm="6" v-show="currData2.length">
                <div class="grid-content">
                    <el-row>
                        <el-col :xs="24" class="reveal-top" v-for="item in currData2" :key="item.id">
                            <div class="grid-content">
                                <img v-lazy="item.src" alt="" style="width: 100%;">
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
            <el-col :xs="12" :sm="6" v-show="currData3.length">
                <div class="grid-content">
                    <el-row>
                        <el-col :xs="24" class="reveal-top" v-for="item in currData3" :key="item.id">
                            <div class="grid-content">
                                <img v-lazy="item.src" alt="" style="width: 100%;">
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
            <el-col :xs="12" :sm="6" v-show="currData4.length">
                <div class="grid-content">
                    <el-row>
                        <el-col :xs="24" class="reveal-top" v-for="item in currData4" :key="item.id">
                            <div class="grid-content">
                                <img v-lazy="item.src" alt="" style="width: 100%;">
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
  export default {
    name: 'home-second',
    data() {
      return {
        data: [],
        currData1: [],
        currData2: [],
        currData3: [],
        currData4: [],
        screenWidth: window.innerWidth || document.body.clientWidth
      }
    },
    mounted() {
      this.init();
      this.resize();
    },
    methods: {
      init() {
        this.data = [
          {
            "id": 1,
            "title": "你是什么人便会遇上什么人",
            "src": require('../../../common/img/1-3.jpeg')
          },
          {
            "id": 2,
            "title": "你是什么人便会遇上什么人",
            "src": require('../../../common/img/login1.jpg')
          },
          {
            "id": 3,
            "title": "你是什么人便会遇上什么人",
            "src": require('../../../common/img/1-4.jpg')
          },
          {
            "id": 4,
            "title": "你是什么人便会遇上什么人",
            "src": require('../../../common/img/5-1.jpg')
          },
          {
            "id": 5,
            "title": "你是什么人便会遇上什么人",
            "src": require('../../../common/img/login2.jpg')
          },
          {
            "id": 6,
            "title": "你是什么人便会遇上什么人",
            "src": require('../../../common/img/6-3.jpg')
          },
          {
            "id": 7,
            "title": "你是什么人便会遇上什么人",
            "src": require('../../../common/img/topbg.jpg')
          },
          {
            "id": 8,
            "title": "你是什么人便会遇上什么人",
            "src": require('../../../common/img/login2.jpg')
          },
          {
            "id": 9,
            "title": "你是什么人便会遇上什么人",
            "src": require('../../../common/img/6-3.jpg')
          },
          {
            "id": 10,
            "title": "你是什么人便会遇上什么人",
            "src": require('../../../common/img/topbg.jpg')
          },
          {
            "id": 13,
            "title": "你是什么人便会遇上什么人",
            "src": require('../../../common/img/1-4.jpg')
          },
          {
            "id": 14,
            "title": "你是什么人便会遇上什么人",
            "src": require('../../../common/img/5-1.jpg')
          },
          {
            "id": 15,
            "title": "你是什么人便会遇上什么人",
            "src": require('../../../common/img/login2.jpg')
          },
          {
            "id": 16,
            "title": "你是什么人便会遇上什么人",
            "src": require('../../../common/img/6-3.jpg')
          },
          {
            "id": 17,
            "title": "你是什么人便会遇上什么人",
            "src": require('../../../common/img/topbg.jpg')
          },
          {
            "id": 18,
            "title": "你是什么人便会遇上什么人",
            "src": require('../../../common/img/login2.jpg')
          },
          {
            "id": 19,
            "title": "你是什么人便会遇上什么人",
            "src": require('../../../common/img/6-3.jpg')
          }
        ];
        this.getCloum();
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
      getCloum() {
        let that = this;
        let chartArr = this.data;
        that.currData1 = [];
        that.currData2 = [];
        that.currData3 = [];
        that.currData4 = [];

        if (this.screenWidth < 768) {
          for(let i = 0; i < chartArr.length; i++) {
            if (i % 2 === 0) {
              that.currData1.push(chartArr[i])
            }
            if (i % 2 === 1) {
              that.currData2.push(chartArr[i])
            }
          }
        } else {
          for(let i = 0; i < chartArr.length; i++) {
            if (i % 4 === 0) {
              that.currData1.push(chartArr[i])
            }
            if (i % 4 === 1) {
              that.currData2.push(chartArr[i])
            }
            if (i % 4 === 2) {
              that.currData3.push(chartArr[i])
            }
            if (i % 4 === 3) {
              that.currData4.push(chartArr[i])
            }
          }
        }
      }
    },
    watch: {
      screenWidth(newV, oldV) {
        this.screenWidth = newV;
        this.getCloum();
      }
    }
  }
</script>

<style lang="scss">
    .home-one {
        .reveal-top .grid-content {
            background: #fff;
            padding: 10px;
            margin-bottom: 10px;
            border: 1px #d9d9d9 solid;
        }
    }
</style>
