<template>
    <div class="home container">
        <div class="home-header">
            <div class="logo">
                <a href="javascript:;">个人博客</a>
                <div class="color-picker">
                    <el-color-picker v-model="color" @change="change()"></el-color-picker>
                </div>
                <div class="date pull-right">
                    <i>{{weekDay}}</i>
                    <i style="font-size: 2rem;">{{date}}</i>
                </div>
            </div>
            <div class="header-tabs">
                <ul>
                    <li @click="handleClick('first')" :class="{active: activeName === 'first'}">
                        <a href="javascript:;">主页</a>
                    </li>
                    <li @click="handleClick('second')" :class="{active: activeName === 'second'}">
                        <a href="javascript:;">我的相册</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="home-main">
            <keep-alive>
                <router-view v-if="isRouterAlive"></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
  import ToTop from '../common/ToTop';

  export default {
    name: 'home',
    components: {
      ToTop
    },
    data () {
      return {
        activeName: 'first',
        color: '#C93282',
        isRouterAlive: true,
        weekDay: null,
        date: null
      }
    },
    mounted() {
      let hash = window.location.hash;
      let name = hash.slice(hash.lastIndexOf('-') + 1);
      let date = new Date().toDateString().split(' ');
      this.activeName = name ? name : 'first';
      this.weekDay = date[0];
      this.date = date[1] + '·' + date[2] + '·'+ date[3];
    },
    methods: {
      handleClick(item) {
        this.activeName = item;
        this.$router.push({
          path: '/home-' + item
        })
      },
      change() {
        this.$store.commit('changeColor', this.color);
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
      }
    }
  }
</script>

<style lang="scss">
    .home {
        &-header {

        }
        .logo {
            font-size: 2.6rem;
            padding: 2rem 0;
            position: relative;
            a {
                color: #fff;
                text-decoration: none;
                text-shadow: 0 0 1px #999,
                1px 1px 2px #888,
                2px 2px 2px #777,
                3px 3px 2px #666,
                4px 4px 2px #555,
                5px 5px 2px #333;

                animation: breath 4s linear infinite;
                -webkit-animation: breath 4s linear infinite;
            }
        }
        .date {
            margin-top: 4rem;
            text-shadow: 0 0 8px #000;
            font-family: 'Times New Roman';
            i {
                color: #fff;
            }
        }
    }
    .header-tabs {
        padding: 2rem 0;
        ul {
            overflow: hidden;
        }
        li {
            float: left;
            width: 10rem;
            height: 3rem;
            line-height: 3rem;
            font-size: 1.5rem;
            padding: 0;
            text-align: center;
            a {
                display: block;
                color: #C93282;
                border-radius: 2rem 0;
                text-shadow: #fff 1px 0 2px, #fff 0 1px 2px, #fff -1px 0 2px, #fff 0 -1px 2px;
            }
            &.active a, &:hover a {
                color: #fff;
                background: #C93282;
                text-shadow: none;
            }
        }
    }
    .color-picker {
        position: absolute;
        top: 2rem;
        right: 0;
    }
    .to-top {
        width: 4rem;
        height: 4rem;
        line-height: 4rem;
        background: #fff;
        text-align: center;
        border-radius: 100%;
        cursor: pointer;
        box-shadow: 0 0 6px rgba(0,0,0,.12);
        z-index: 5;
        position: fixed;
        bottom: 5rem;
        right: 2rem;
        -webkit-transition: all .3s linear;
        -moz-transition: all .3s linear;
        -ms-transition: all .3s linear;
        -o-transition: all .3s linear;
        transition: all .3s linear;
        &:hover {
            background: #c93282;
            .icon {
                color: #fff;
            }
        }
    }
    .icon {
        line-height: inherit;
        color: #c93282;
        font-size: 2rem;
        font-weight: bold;
    }
</style>
