<template>
    <div id="app">
        <keep-alive>
            <router-view :key="key"></router-view>
        </keep-alive>

        <div class="to-top" @click="toTop" v-if="is_show">
            <i class="icon el-icon-caret-top"></i>
        </div>
        <div class="menu" ref="menu">
            <ul>
                <li @click="$router.back(-1)">返回</li>
                <li @click="fresh">刷新</li>
                <li v-if="copy_content"
                    v-clipboard:copy="copy_content"
                    v-clipboard:success="onCopy"
                    v-clipboard:error="onError">复制</li>
                <li v-else class="no-drop">复制</li>
            </ul>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        is_show: false,
        copy_content: ''
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
      // 自定义右键菜单
      window.addEventListener('contextmenu', this.showMenu);
      window.addEventListener('click', this.click);
    },
    methods: {
      handleScroll() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        this.is_show = scrollTop > 150 ? true : false
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
      showMenu(parameter) {
        this.copy_content = window.getSelection?window.getSelection().toString():document.selection.createRange().text;
        // event.returnValue = false;
        parameter.preventDefault();
        var x = parameter.clientX;
        var y = parameter.clientY;
        this.$refs.menu.style.top = y + 'px';
        this.$refs.menu.style.left = x + 'px';
        this.$refs.menu.style.display = 'block';
      },
      click() {
        this.$refs.menu.style.display = 'none';
      },
      fresh() {
        window.location.reload();
      },
      onCopy(e) {
        console.log('内容：' + e.text);
      },
      onError: function (e) {
        console.log('无法复制文本！')
      }
    },
    // 监听,当路由发生变化的时候执行
    /*watch:{
      $route: {
        handler: function(val, oldVal){
          console.log(val);
        },
        // 深度观察监听
        deep: true
      }
    },*/
    computed: {
      key() {
        if (this.$route.name === 'home-first') {
          this.$common.setTitle('我的博客 - 首页');
        } else if (this.$route.name === 'home-second') {
          this.$common.setTitle('我的相册');
        } else if (this.$route.name === 'list') {
          this.$common.setTitle('集锦');
        }
      }
    }
  }
</script>

<style lang="scss">
    @import "common/styles/index";
    #app {
        height: 100%;
        line-height: 1.5;
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
        .icon {
            line-height: inherit;
            color: #c93282;
            font-size: 2rem;
            font-weight: bold;
        }
    }
    .menu {
        display: none;
        width: 6rem;
        line-height: 2.5rem;
        background: #fff;
        font-size: 1.4rem;
        padding: 0 5px;
        border: 1px solid #BABABA;
        text-align: center;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        li {
            color: #666;
            cursor: pointer;
            &:hover {
                color: #333;
            }
            &.no-drop {
                cursor: no-drop;
            }
        }
    }
</style>
