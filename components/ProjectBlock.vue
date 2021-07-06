<template>
  <div class="project-block">
    <div class="inblock">
      <div class="project-text" v-html="description" />
      <div class="preview-image">
        <img :src="previewImage" @click="openPreview()" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      default: '',
    },
    previewImage: {
      type: String,
      default: '',
    },
    previewUrl: {
      type: String,
      default: '',
    },
  },
  methods: {
    openPreview() {
      this.$emit('openPreview', this.previewUrl);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables';

$block-width: $project-page-block-width;
$block-height: $project-page-block-height;

.project-block {
  width: $block-width;
  height: $block-height;
  margin-top: 34px;
  margin-bottom: 34px;
  background-color: $white-color;
  display: flex;
  box-shadow: -12px 12px 20px 0 rgba(0, 0, 0, 0.2);

  @include mobile {
    width: 90vw;
  }

  .inblock {
    height: calc(#{$block-height} - 60px);
    width: calc(#{$block-width} - 60px);
    display: flex;
    text-align: left;
    flex-direction: column;
    margin: 30px;
    flex: 1;

    @include mobile {
      width: calc(90vw - 20px);
      height: calc(#{$block-height} - 40px);
      margin: 30px 10px 30px 10px;
    }

    .project-text {
      text-align: left;
      height: calc((#{$block-height} - 60px) * 0.25);
      line-height: 1.5;
      padding-left: 5%;
      padding-right: 5%;
      bottom: 0;

      @include mobile {
        height: calc((#{$block-height} - 40px) * 0.25);
      }
    }

    .preview-image {
      height: calc((#{$block-height} - 60px) * 0.75);
      margin: auto;
      position: relative;
      width: 100%;

      @include mobile {
        height: calc((#{$block-height} - 40px) * 0.75);
      }

      img {
        max-height: 100%;
        max-width: 100%;
        width: auto;
        height: auto;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        cursor: pointer;
      }
    }
  }
}
</style>
