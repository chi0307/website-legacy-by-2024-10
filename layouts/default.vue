<template>
  <div class="container">
    <div class="menu">
      <div class="menu-inbox">
        <div class="title-block">
          <h2 class="title">
            Website
          </h2>
        </div>
        <div class="menu-block">
          <ul>
            <li
              v-for="(page, index) in pages"
              :key="index"
              :class="{ 'menu-item': true, 'menu-click': $route.name === page.path }"
            >
              <router-link :to="page.path">
                {{ page.name }}
              </router-link>
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
        {
          name: 'CONTACT',
          path: 'contact',
        },
      ],
    };
  },
};
</script>

<style></style>
