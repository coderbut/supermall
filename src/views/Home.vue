<template>
  <div class="home">
    <van-search placeholder="商品搜索 共269万件好物" v-model="searchData" input-align="center"></van-search>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      searchData: '',
      images: [],
      data: {}
    }
  },
  computed:{

  },
  components: {},
}
</script>
