<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control class="tab-control" :title="['流行','新款','精选']" @tabClick="tabClick"/>
    <goods-list :goods="showGoods"></goods-list>
  </div>
</template>

<script>
//子组件
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";
//公共组件
import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/content/tabControl/TabControl";
import GoodsList from "@/components/content/goodsList/GoodsList";

import {getHomeMultidata, getHomeGoods} from "@/network/home";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 1, list: []},
        'new': {page: 1, list: []},
        'sell': {page: 1, list: []}
      },
      currentType: 'pop'
    }
  },
  computed: {
    showGoods(){
      return this.goods[this.currentType].list;
    }
  },
  components: {
    TabControl,
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    GoodsList
  },
  created() {
    //请求首页数据
    this.getHomeMultidata();
    //请求商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  methods: {

    /**
     * 事件监听方法
     */
    tabClick(index){
      switch (index){
        case 0: this.currentType = 'pop';break;
        case 1: this.currentType = 'new';break;
        case 2: this.currentType = 'sell';
      }
    },

    /*
      网络请求相关
     */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    getHomeGoods(type){
      //每次调用该函数使得page+1
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        // console.log(res);
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
      });
    }
  }
}
</script>

<style scoped>
#home {
  padding-top: 44px;
}

.home-nav {
  background-color: var(--color-tint);
  color: white;

  /* nav固定于顶部 */
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}
</style>
