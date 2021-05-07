<template>
  <div class="img-circle">
    <div class="circle-spacer" />
    <img :src="src" class="img-fluid" :style="{ 'border-radius': `${radius}% !important` }" />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: '',
    },
    radius: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style scoped lang="scss">
.img-circle {
  width: 100%;
  margin: 1%;
  text-align: center;
  position: relative;
  display: inline-block;

  .circle-spacer {
    position: relative;
    padding-top: 100%;
    float: none;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    float: none;
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
}
</style>
