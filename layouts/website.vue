<template>
  <div class="container" :class="{ 'hide-scroll': showMobileMenu }">
    <div class="header">
      <FontAwesomeIcon
        class="bar-icon"
        :class="{ hide: showMobileMenu }"
        :icon="['fas', 'bars']"
        @click="showMobileMenu = true"
      />
      <FontAwesomeIcon
        class="close-icon"
        :class="{ hide: !showMobileMenu }"
        :icon="['fas', 'times']"
        @click="showMobileMenu = false"
      />
      <div class="header-inbox">
        <div class="title-block">
          <h2 class="title">
            Website
          </h2>
        </div>
        <div class="menu-block" :class="{ hide: isMobile && !showMobileMenu }">
          <ul class="menu-list">
            <li
              v-for="(page, index) in pages"
              :key="index"
              :class="{
                'menu-item': true,
                'menu-click': new RegExp(`^/?${page.path}/?`).test($route.path),
              }"
              @click="jumpPage(`/${page.path}`)"
            >
              {{ page.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Nuxt class="content" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      pages: [
        {
          name: 'ABOUT ME',
          path: 'aboutMe',
        },
        {
          name: 'RESUME',
          path: 'resume',
        },
        {
          name: 'PROJECTS',
          path: 'projects',
        },
      ],
      showMobileMenu: false,
      isMobile: false,
    };
  },
  mounted() {
    window.addEventListener('resize', this.checkMobile);
  },
  created() {
    this.checkMobile();
  },
  methods: {
    jumpPage(path) {
      if (this.$route.path !== path) {
        this.$router.replace(path);
      }
      this.showMobileMenu = false;
    },
    checkMobile() {
      this.isMobile = window.innerWidth <= 768;
      if (this.showMobileMenu && !this.isMobile) {
        this.showMobileMenu = false;
      }
    },
  },
};
</script>

<style></style>
