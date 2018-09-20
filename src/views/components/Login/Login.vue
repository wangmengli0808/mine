<template>
    <div class="login text-center">
        <div class="mask"></div>
        <div class="login-box">
            <img class="head-photo" src="../../../common/img/1-4.jpg" alt="">
            <div class="intro">
                <span class="text">May I introduce myself?</span>
            </div>
            <small class="wang">MISS WANG</small>
            <div class="go">
                <router-link to="/home">
                    <el-button type="danger">GO AHEAD</el-button>
                </router-link>
            </div>
        </div>
        <!--<div>-->
        <!--<el-button @click="startHacking">Start</el-button>-->
        <!--</div>-->
    </div>
</template>

<script>
  export default {
    methods: {
      startHacking () {
        this.$notify({
          title: 'It works!',
          type: 'success',
          message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
          duration: 5000
        })
      }
    }
  }
</script>

<style lang="scss">
    .login {
        height: 100%;
        background: url("../../../common/img/login1.jpg") no-repeat center;
        background-size: cover;
        position: relative;
        &-box {
            color: #fff;
            position: relative;
            top: 50%;
            transform: translateY(-50%);
        }
    }
    .head-photo {
        width: 12rem;
        height: 12rem;
        border-radius: 100%;
        margin-bottom: 5rem;
    }

    .go {
        margin-top: 10rem;
    }
</style>
