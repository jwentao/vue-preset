<style scoped lang=scss>
  .menu-btn {
    float: left;
    /*margin-left: 50px;*/
    width: 100px;
    text-align: center;
    position: relative;
    top: -10px;
    &.on {
      background: #2d8cf0;
      .btn-text {
        color: #ffffff;
      }
    }

    .btn-text {
      display: block;
      color: rgba(255, 255, 255, .7);
      line-height: 50px;
      cursor: pointer;
      transition: color .2s;
      &:hover {
        color: #ffffff;
      }
    }
    .menu-container {
      position: absolute;
      width: 300px;
      background: #ffffff;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      z-index: 9999;
      color: #333333;
      padding: 10px;
      .menu-list-btn {
        float: left;
        width: 130px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        margin: 5px;
        border-radius: 4px;
        cursor: pointer;
        border: 1px solid #dcdddd;
        &:hover {
          background: #efefef;
        }
      }
    }
  }
</style>
<template>
  <div class="menu-btn" :class="{on:open}" @mousedown="clickBtn" @mouseup="clickBtn">
    <span class="btn-text"><Icon type="ios-menu-outline" size="20" style="position: relative;top: 2px;"></Icon></span>
    <input id="top-menu-btn" type="text" @focus="focus" @blur="blur"
           style="position: fixed;width: 100px;height: 30px;border: none;opacity: 0;top:0;">
    <div class="menu-container" v-show="open">
      <span class="menu-list-btn" v-for="(item, index) in linkSet" @click="jump(item.url)" :key="index">{{item.name}}</span>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import api from '@/api';
  export default {
    data () {
      return {
        open: false,
        setTime: null,
        linkSet: []
      };
    },
    created () {
      this.getPublicMenu();
    },
    methods: {
      async getPublicMenu () {
        let {data} = await api.getPublicMenu();
        this.linkSet = data.linkSet;
      },
      clickBtn () {
        document.getElementById('top-menu-btn').focus();
      },
      focus () {
        this.open = true;
        clearTimeout(this.setTime);
      },
      blur () {
        this.setTime = setTimeout(() => {
          this.open = false;
        }, 200);
      },
      jump (url) {
        window.open(url, '_blank');
        setTimeout(() => {
          this.open = false;
          document.getElementById('top-menu-btn').blur();
        }, 300);
      }
    }
  };
</script>