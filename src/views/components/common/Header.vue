<template>
    <div class="header-box">
        <div class="header" :class="{visible: true}">
            <div class="container">
                <a href="" class="logo">
                    <!--<img src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg" alt="">-->
                    个人博客
                </a>
                <div class="nav-list">
                    <ul class="nav-list-ul">
                        <li class="nav-item"><a href="">主页</a></li>
                        <li class="nav-item"><a href="">我的相册</a></li>
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
        visible: true
      }
    },
    mounted() {
      window.addEventListener('scroll', this.scroll)
    },
    methods: {
      scroll() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > 100) {
          this.visible = false
        } else {
          this.visible = true
        }
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
        transition: all .2s;
        -webkit-transform: translate3d(0,-100%,0);
        transform: translate3d(0,-100%,0);
        &.visible {
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
