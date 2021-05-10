<template>
  <div class="skills-block">
    <div class="inblock">
      <div
        v-for="(skillCategory, index) in professionalSkillset"
        :key="index"
        class="skill-category-block"
      >
        <div class="category-title">
          {{ skillCategory.title }}
        </div>
        <div class="skills">
          <p v-for="(skill, skillIndex) in skillCategory.skills" :key="skillIndex" class="skill">
            <FontAwesomeIcon class="icon" :icon="['fas', 'angle-right']" />
            {{ skill }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    professionalSkillset: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/css/variables';

$block-width: $resume-page-block-width;

.skills-block {
  width: $block-width;
  margin-top: 34px;
  margin-bottom: 34px;

  @include mobile {
    width: 90vw;
  }

  .inblock {
    height: 100%;
    width: calc(#{$block-width} - 60px);
    display: flex;
    text-align: left;
    flex-direction: column;
    margin: 30px;

    @include mobile {
      width: calc(90vw - 20px);
      margin: 10px;
    }

    .skill-category-block {
      display: flex;
      flex-direction: column;
      margin: 20px 20px 30px 20px;

      &:last-child {
        margin-bottom: 20px;
      }

      .category-title {
        width: 100%;
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 20px;
      }

      .skills {
        display: flex;
        flex-wrap: wrap;

        .skill {
          width: calc((#{$block-width} - 100px) / 2);
          margin-top: 10px;
          margin-bottom: 10px;

          @include mobile {
            width: calc((90vw - 60px) / 2);
          }

          .icon {
            margin-right: 8px;
            color: $complementary-color1;
          }
        }
      }
    }
  }
}
</style>
