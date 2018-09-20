<template>
    <div class="header-box">
        <div class="header" :class="{visible: is_visible}">
            <div class="container">
                <router-link to="/home">
                    <a href="javascript:;" class="logo">
                        <!--<img src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg" alt="">-->
                        个人博客
                    </a>
                </router-link>
                <div class="nav-list">
                    <ul class="nav-list-ul">
                        <li class="nav-item"><router-link to="/home"><a href="javascript:;">主页</a></router-link></li>
                        <li class="nav-item"><router-link to="/home-second"><a href="javascript:;">我的相册</a></router-link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        input: '',
        is_visible: true,
        scrollAction: null,
        originalDir: null
      }
    },
    props: {
      visible: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll () {
        var direction = this.scrollFunc();
        if(direction && this.originalDir !== direction){
          if (direction === 'down') {
            this.is_visible = false;
          } else {
            this.is_visible = true;
          }
          this.originalDir = direction;
        }
      },
      scrollFunc() {
        var scrollDirection;
        if (!this.scrollAction) {
          this.scrollAction = window.pageYOffset;
        }
        var diff = this.scrollAction - window.pageYOffset;
        if (diff < 0) {
          scrollDirection = 'down';
        } else {
          scrollDirection = 'up';
        }
        this.scrollAction = window.pageYOffset;
        return scrollDirection;
      }
    }
  }
</script>

<style lang="scss">
    .header-box {
        position: relative;
        height: 6rem;
        margin-bottom: 2rem;
    }
    .header {
        height: 6rem;
        color: #909090;
        background: rgba(255, 255, 255, .5);
        border-bottom: 1px solid #f1f1f1;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 250;
        transition: all .5s;
        -webkit-transform: translate3d(0,-100%,0);
        transform: translate3d(0,-100%,0);
        &.visible {
            background: rgba(255, 255, 255, .9);
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
        }
        .container {
            display: flex;
            align-items: center;
        }
        .logo {
            font-size: 2rem;
            margin-right: 2rem;
        }
        .nav-list {
            flex: 1 0 auto;
            &-ul {
                display: flex;
                align-items: center;
                li {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 5rem;
                    color: #71777c;
                    font-size: 1.33rem;
                    padding: 0 1.6rem;
                }
            }
        }
    }
</style>
