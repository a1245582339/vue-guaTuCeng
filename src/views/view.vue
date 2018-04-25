<template>
  <div>
      <h1>canvas</h1>
      <guaguale :image1="image1" :image2="image2" :width="guawidth" :height="guaheight" :percent="percent" @success="guaSuccess"> </guaguale>
  </div>
</template>
<script>
import guaguale from "@/components/guaguale";
export default {
  components: {
    guaguale
  },
  data() {
    return {
      image1: "static/init.png",    // 涂层图片
      image2: "static/failed.png",  // 奖励图片
      guawidth: 670,
      guaheight: 176,
      percent: 50   // 刮开多少时清空涂层
    };
  },
  methods: {
    guaSuccess() {
      console.log("大于50%了");
    }
  }
};
</script>
<style scoped>

</style>

