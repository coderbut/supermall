<template>
  <div class="tab-control">
    <div v-for="(item,index) in title" :key="index" class="tab-control-item" :class="{active:index===currentIndex}" @click="itemClick(index)">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data(){
    return {
      currentIndex: 0
    }
  },
  props: {
    title: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    itemClick(index){
      this.currentIndex = index;
      //自定义事件传出值
      this.$emit('tabClick', index);
    }
  }
}
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 16px;
  height: 40px;
  line-height: 40px;
  font-weight: bold;
  background-color: #ffffff;
}

.tab-control-item {
  /*position: fixed;*/
  flex: 1;
}
.tab-control-item span{
  padding: 5px;
}
.active{
  color: var(--color-high-text);
}
.active span{
  border-bottom: 3px solid var(--color-tint);
}
</style>
