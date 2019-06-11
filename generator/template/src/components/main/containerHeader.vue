<template>
  <div>
    <div class="title">{{title}}</div>
    <div class="line"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      title: {}
    }
  };

</script>

<style scoped lang=scss>
  .title {
    text-align: left;
    font-size: 18px;
    border-bottom: 1px solid #d4d2d2;
    padding-bottom: 13px;
  }
</style>
