<template>
  <van-swiper class="my-swiper" :autoplay="3000" indicator-color="red">
    <van-swipe-item v-for="(item,index) in banner" :key="index">
      <a :href="item.link">
        <img :src="item.image" :alt="title">
      </a>
    </van-swipe-item>
  </van-swiper>
</template>

<script>

import {getHomeMultidata} from "@/network/home";

export default {
  name: "VantSwiper",
  data() {
    return {
      banners: []
    }
  },
  components: {},
  created() {
    getHomeMultidata().then(res => {
      // this.banners = res.data.data.banner.list;
      console.log(res);
    })
  }
}
</script>

<style scoped>

</style>
