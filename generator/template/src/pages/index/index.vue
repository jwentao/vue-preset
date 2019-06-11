<template>
  <div class="main-root">
    <c-header :activeIndex="0"></c-header>
    <div class="container">
      <side-menu ref="sideMenu" :navData="navData" :routerMap="routerMap"></side-menu>
      <div class="main">
        <router-view v-if="!$route.meta.keepAlive"></router-view>
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
  import header from '../../components/main/header.vue';
  import sideMenu from '../../components/main/sideMenu.vue';
  import { default as navData, routerMap } from './store/common/nav-data';
  import gtagPageView from '../../common/gtagPageView';

  export default {
    name: 'App',
    components: {
      'c-header': header,
      'side-menu': sideMenu
    },
    data () {
      return {
        navData,
        routerMap
      };
    },
    watch: {
      '$route' () {
        gtagPageView('userinfo');
      }
    }
  };
</script>

<style lang="scss">
  .main-root {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    min-width: 960px;
    background: #f1f1f1;
    .container {
      display: flex;
      flex: 1;
      z-index: 10;
      overflow-y: auto;
    }

    .main {
      flex: 1;
      overflow: auto;
      position: relative;
      display: flex;
    }
  }
</style>
