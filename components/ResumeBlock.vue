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

  @include mobile {
    width: 90vw;
  }

  .inblock {
    height: calc(#{$block-height} - 60px);
    width: calc(#{$block-width} - 60px);
    margin: 30px;
    display: flex;
    text-align: left;

    @include mobile {
      height: calc(#{$block-height} - 20px);
      width: calc(90vw - 20px);
      margin: 10px;
      flex-direction: column;
    }

    .left-content {
      flex: 3;
      position: relative;
      margin-left: 30px;
      margin-top: 30px;
      display: flex;
      flex-direction: column;

      @include mobile {
        flex: 2;
        margin-top: 0;
        margin-left: 20px;
        margin-right: 20px;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: flex-start;
      }

      .period-text {
        font-size: 24px;
        margin-top: 30px;
        color: $complementary-color1;

        @include mobile {
          margin-top: 20px;
          width: calc(90vw - 80px);
          height: 30px;
        }
      }

      .title-text,
      .subtitle-text {
        font-size: 16px;
        margin-top: 20px;

        @include mobile {
          margin: 0;
        }
      }

      .subtitle-text {
        color: #666;
      }
    }

    .right-content {
      flex: 5;
      position: relative;

      @include mobile {
        border-top: $complementary-color1 solid 1px;
      }

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

        @include mobile {
          margin: 20px 30px 0 30px;
        }

        p {
          margin-bottom: 6px;
          line-height: 1.3;
        }
      }
    }
  }
}
</style>
