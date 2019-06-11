<template>
  <div class="root">
    <div class="logo">
      template
    </div>

    <!--<publicMenu></publicMenu>-->
    <!--<Menu mode="horizontal" :theme="theme1" active-name="1">-->
    <!--<MenuItem name="1">-->
    <!--asd-->
    <!--</MenuItem>-->
    <!--</Menu>-->
    <div class="main-menu">
    </div>
    <div class="info">

      <div class="userInfo">
        <span>用户: {{userInfo && userInfo.name}}</span>
      </div>
      <div class="env">
        <span>环境: {{userInfo && userInfo.env}}</span>
      </div>

      <div class="doc" style="border-left:1px solid white;" @click="jumpDoc">
        <span style="text-decoration: underline;">
        文档
        </span>
      </div>

      <div class="doc" @click="jumpCallback">
        <span style="text-decoration: underline;">
          反馈
        </span>
      </div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      jumpCallback () {
        this.$Message.info('暂无反馈方式');
        // window.open('http://callback-jingwei.huya.com/main#/create?pid=4', '_blank');
      },
      jumpDoc () {
        // window.open('https://project.huya.com/wiki/#/team/N7nFVeMy/space/K7Mw7Jws/page/QBmLMy3i', '_blank');
      }
    }
  };

</script>

<style scoped lang=scss>
  .root {
    z-index: 999;
    background-color: #33414a;
    height: 52px;
    padding: 0 30px;
    box-shadow: 0 0 9px 0 #1b1a1a;
    position: relative;
    color: white;
    .logo {
      /*background-image: url("../../images/logo.png");*/
      background-repeat: no-repeat;
      background-size: 40px 40px;
      width: 220px;
      height: 52px;
      display: inline-block;
      /*padding-left: 48px;*/
      font-size: 30px;
      font-weight: 600;
      line-height: 52px;
      float: left;
    }
    .main-menu {
      float: left;
      display: flex;
      .menu-item {
        flex: 0 0 96px;
        text-align: center;
        cursor: pointer;
        color: white;
        font-size: 16px;
        height: 52px;
        line-height: 52px;
      }
      .active {
        background-color: rgba(73, 80, 96, 1);
      }
    }
    .info {
      float: right;
      font-size: 16px;
      padding: 14px;
    }

    .env, .userInfo, .doc {
      display: inline-block;
      float: right;
      padding: 0 5px;
    }
    .doc {
      cursor: pointer;
    }
    .userInfo, .env {
      border-left: 1px solid white;
    }
  }
</style>
