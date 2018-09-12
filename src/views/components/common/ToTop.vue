<template>
    <div>
        <div class="to-top" @click="toTop">
            <i class="icon el-icon-caret-top"></i>
        </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    mounted() {

    },
    methods: {
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
</style>
