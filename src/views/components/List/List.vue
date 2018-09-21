<template>
    <div class="list" ref="viewBox">
        <header-nav></header-nav>
        <div class="list-main container">
            <el-row :gutter="20">
                <el-col :sm="16">
                    <div class="grid-content list-left">
                        <el-row :gutter="10">
                            <el-col :xs="24">
                                <div class="grid-content box">
                                    <div class="box-title">
                                        <div class="box-title-lf">javascript</div>
                                        <div class="box-title-rt text-right">
                                            <a href="javascript:;">javascript</a>
                                            <a href="javascript:;">css</a>
                                            <a href="javascript:;">angular</a>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <h2 class="title">js禁用页面上右键菜单、选中和复制</h2>
                                        <div class="item-box">
                                            <div class="item-lf">
                                                <img src="../../../common/img/login1.jpg" alt="">
                                            </div>
                                            <div class="item-rt">
                                                <p class="overflow" style="-webkit-box-orient: vertical;-webkit-line-clamp: 4;">有时候我们不想页面上的内容被人复制走，那么就可以使用js对页面进行设置，禁止右键菜单、禁止选中、禁止复制等功能可以有效的达到这个效果</p>
                                            </div>
                                        </div>
                                        <div class="item-bottom text-right">
                                            <router-link to="/detail"><a href="javascript:;" class="more">阅读原文&gt;&gt;</a></router-link>
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
                        <div class="con">
                            <calendar @click-event="getDate"
                                      :start-date="new Date(2015,7)"></calendar>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
  import HeaderNav from '../common/Header';
  import Calendar from '../common/Calendar';

  export default {
    components: {
      HeaderNav,
      Calendar
    },
    data() {
      return {
        input: ''
      }
    },
    mounted() {

    },
    methods: {
      getDate(param) {
        console.log(param);

        this.$notify({
          title: '你选择的日期是',
          message: param.year + '-' + param.month + '-' + param.day
        });
      }
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
                margin-bottom: 2rem;
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
        .box-title {
            display: flex;
            flex-direction: row;
            align-items: center;
            font-size: 1.8rem;
            padding: 1rem 1.5rem;
            border-bottom: #000 2px solid;
            &-lf {
                font-weight: bold;
            }
            &-rt {
                flex: 1;
                font-size: 1.4rem;
                a {
                    display: inline-block;
                    height: 100%;
                    margin-left: 2rem;
                    &:hover {
                        color: #C93282;
                    }
                }
            }
        }
    }
    .item {
        padding: 1.5rem 1.5rem 0;
        &-box {
            display: flex;
            flex-direction: row;
        }
        &-lf {
            width: 22.5rem;
            height: 10rem;
            margin-right: 1.5rem;
            overflow: hidden;
            img {
                width: 100%;
                height: 100%;
            }
        }
        &-rt {
            flex: 1;
            color: #888;
            font-size: 1.4rem;
        }
        .title {
            font-size: 1.8rem;
            margin-bottom: 1.5rem;
        }
        &-bottom {
            font-size: 1.4rem;
            padding: 1.5rem 0 1rem;
            border-bottom: #ccc 1px dashed;
            .more {
                color: #096;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
</style>
