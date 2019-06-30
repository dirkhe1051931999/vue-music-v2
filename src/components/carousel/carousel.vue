<template>
  <div class="carousel">
    <swiper v-if="carousel.length > 0" :options="swiperOption" class="swiper">
      <swiper-slide
        v-for="(item, index) in carousel"
        :key="index"
        class="swiper-slide"
      >
        <img :src="item.imageUrl" alt />
      </swiper-slide>
      <div class="swiper-pagination dots" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  props: {
    carousel: {
      default: [],
      type: Array
    }
  },
  name: "",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        autoplay: {
          disableOnInteraction: false
        },
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          currentClass: "active"
        }
      }
    };
  },
  methods: {},
  created() {},
  mounted() {}
};
</script>

<style scoped lang='less'>
.carousel {
  width: 92%;
  top: 75px;
  left: 50%;
  position: absolute;
  border-radius: 10px;
  transform: translateX(-50%);
  box-sizing: border-box;
  overflow: hidden;
  img {
    width: 100%;
    display: block;
    height: 280px;
  }
  .dots {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 24px;
    text-align: center;
    font-size: 0;
    /deep/ .swiper-pagination-bullet {
      display: inline-block;
      margin: 0 8px;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.8);
    }
    /deep/ .swiper-pagination-bullet-active {
      width: 40px;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.5);
      transition: all 0.3s ease;
    }
  }
}
</style>
