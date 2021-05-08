<template>
  <div class="resume-block">
    <div class="inblock">
      <div class="left-content">
        <p class="period-text">
          {{ period }}
        </p>
        <p class="title-text">
          {{ title }}
        </p>
        <p class="subtitle-text">
          {{ subTitle }}
        </p>
      </div>
      <div class="right-content">
        <div class="content-text">
          <p
            v-for="({ style = {}, text = '' }, index) in content"
            :key="index"
            :style="style"
            v-html="text.replace(/^\n/, '').replace(/\n/g, '<br/>')"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    period: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    subTitle: {
      type: String,
      default: '',
    },
    content: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/css/variables';

$block-height: $resume-page-block-height;
$block-width: $resume-page-block-width;

.resume-block {
  height: $block-height;
  width: $block-width;
  margin-top: calc(#{$block-height} * 0.1);
  margin-bottom: calc(#{$block-height} * 0.1);

  .inblock {
    height: calc(#{$block-height} - 60px);
    width: calc(#{$block-width} - 60px);
    display: flex;
    text-align: left;

    .left-content {
      flex: 3;
      position: relative;
      margin-left: 30px;
      margin-top: 30px;

      .period-text {
        font-size: 24px;
        margin-top: 30px;
        margin-bottom: 20px;
        color: $complementary-color1;
      }

      .title-text,
      .subtitle-text {
        font-size: 16px;
        margin: 20px auto;
      }

      .subtitle-text {
        color: #666;
      }
    }

    .right-content {
      flex: 5;
      position: relative;

      .content-text {
        word-wrap: break-word;
        position: absolute;
        max-width: 100%;
        margin: 50px 0 0 40px;
        height: calc(100% - 30px);
        max-height: calc(100% - 30px);
        overflow-x: hidden;
        overflow-x: auto;
        width: calc(100% - 40px);

        p {
          margin-bottom: 6px;
          line-height: 1.3;
        }
      }
    }
  }
}
</style>
