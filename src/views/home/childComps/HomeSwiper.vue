<template>
  <swiper>
    <swiper-item v-for="(item,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from "@/components/common/swiper";
// import {getHomeMultidata} from "@/network/home";

export default {
  name: "HomeSwiper",
  // data(){
  //   return {
  //     banners: [],
  //   }
  // },
  props: {
    banners: {
      type: Array,
      default(){
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  // created() {
  //   getHomeMultidata().then(res => {
  //     console.log(res);
  //     this.banners = res.data.data.banner.list;
  //     this.recommends = res.data.data.recommend.list;
  //   })
  // }
}
</script>

<style scoped>

</style>
