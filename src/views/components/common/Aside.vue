<template>
    <div>
        <el-aside width="25rem">
            <div class="overlay"></div>
            <div class="main-left">
                <div class="profile">
                    <a href="javascript:;">
                        <img class="cover" src="http://pfakcwsi5.bkt.clouddn.com/1-4.jpg" alt="">
                    </a>
                </div>
                <div class="author">MenLy</div>
                <p class="sub">胆小认生，不易相处</p>
                <div class="nav-menu">
                    <ul>
                        <li>
                            <router-link to="/"><a href="javascript:;">主页</a></router-link>
                        </li>
                        <li>
                            <router-link to="/photos"><a href="javascript:;">相册</a></router-link>
                        </li>
                    </ul>
                </div>
                <div class="nav-crumb">
                    <a href="javascript:;" @click="all">所有文章</a>
                    <!--/ -->
                    <!--<a href="javascript:;">关于我</a>-->
                </div>
                <div class="nav-others">
                    <i class="fa fa-qq"></i>
                    <i class="fa fa-weibo"></i>
                    <i class="fa fa-github"></i>
                </div>
            </div>
        </el-aside>
        <transition name="slide-fade">
            <div class="aside-fade" v-show="show">
                <div class="mask" @click="show = !show"></div>
                <el-aside width="30rem">
                    <el-input
                            placeholder="请输入内容"
                            suffix-icon="el-icon-search"
                            v-model="input">
                    </el-input>
                    <div class="switch text-right">
                        <el-switch
                                v-model="is_switch"
                                inactive-text="tags">
                        </el-switch>
                    </div>
                    <div class="tags" v-if="is_switch">
                        <el-tag size="small" type="">杂谈</el-tag>
                        <el-tag size="small" type="success">js</el-tag>
                        <el-tag size="small" type="info">html</el-tag>
                        <el-tag size="small" type="success">js</el-tag>
                        <el-tag size="small" type="info">html</el-tag>
                        <el-tag size="small" type="info">css</el-tag>
                        <el-tag size="small" type="info">故事</el-tag>
                    </div>
                    <div class="logs">
                        <ul>
                            <li>
                                <a href="javascript:;">
                                    <h2>好</h2>
                                    <div><i class="el-input__icon el-icon-date"></i><span>2018-01-12</span><span>#游记</span></div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <h2>好</h2>
                                    <div><span>2018-01-12</span><span>#游记</span></div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </el-aside>
            </div>
        </transition>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false,
        is_switch: true,
        input: ''
      }
    },
    mounted() {

    },
    methods: {
      all() {
        this.show = true;
      }
    }
  }
</script>

<style lang="scss">
    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to {
        transform: translateX(10px);
        opacity: 0;
    }

    .overlay {
        height: 15rem;
        background: #4d4d4d;
    }

    .el-aside {
        height: 100%;
        overflow: hidden;
    }

    .aside-fade {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 25rem;
        right: 0;
        z-index: 9;
        .mask {
            background: rgba(0,0,0,.3);
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 98;
        }
        .el-aside {
            /*background: linear-gradient(#a2cf11, #f9ae1b);*/
            overflow: auto;
            background: #fff;
            padding: 1rem;
            position: relative;
            z-index: 99;
        }
        .el-input__inner {
            border: 0;
            border-bottom: 2px solid #ddd;
            border-radius: 0;
        }
        .switch {
            margin: 1.5rem 0;
        }
        .el-switch__label {
            color: #666;
        }
        .logs {
            margin: 1rem -1rem;
            li {
                border-bottom: 1px solid #eee;
                a {
                    display: block;
                    padding: 1rem 1.5rem;
                }
                &:hover {
                    .el-input__icon, h2, span {
                        color: #409EFF;
                    }
                }
                span {
                    color: #888;
                    margin-right: 10px;
                }
                .el-input__icon {
                    width: 16px;
                    line-height: inherit;
                    color: #888;
                    text-align: left;
                }
            }
        }
    }

    .main-left {
        text-align: center;
        .profile {
            width: 10rem;
            height: 10rem;
            background: #fff;
            padding: 5px;
            margin: auto;
            margin-top: -5rem;
            border-radius: 100%;
            overflow: hidden;
            img {
                width: 100%;
                height: 100%;
                border-radius: 100%;
            }
        }
        .author {
            font-size: 3rem;
            font-family: 'Times New Roman';
            margin: 2rem 0;

            text-shadow: 0 0 1px #999,
            1px 1px 2px #888,
            2px 2px 2px #777,
            3px 3px 2px #666,
            4px 4px 2px #555,
            5px 5px 2px #333;

            animation: breath 4s linear infinite;
            -webkit-animation: breath 4s linear infinite;
            -o-animation: breath 4s linear infinite;
        }
        .sub {
            color: #999;
            font-size: 1.4rem;
        }
        .nav-menu {
            min-height: 15rem;
            line-height: 3rem;
            display: -webkit-box;
            -webkit-box-orient: horizontal;
            -webkit-box-pack: center;
            -webkit-box-align: center;
            a {
                font-size: 1.4rem;
            }
        }
        .nav-crumb {
            color: #666;
            font-size: 1.2rem;
            a {
                color: #666;
            }
        }
    }
    .nav-others {
        margin-top: 2rem;
        .fa {
            color: #666;
            font-size: 1.7rem;
            margin: 0 3px;
            &.fa-qq {
                font-size: 1.5rem;
                position: relative;
                top: -2px;
            }
        }
    }
</style>
