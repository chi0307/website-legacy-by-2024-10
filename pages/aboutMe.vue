<template>
  <div class="about-me-page">
    <div class="right-block" />
    <div class="message-block">
      <div class="present-block">
        <div class="present-top-block">
          <shape-image class="about-me-image" src="/aboutMe.JPG" :radius="50" />
          <div class="about-me-name">
            <h1>Benson</h1>
          </div>
          <div class="about-me-line" />
          <div class="about-me-title">
            <h3>FrontEnd Developer</h3>
          </div>
        </div>
        <div class="present-bottom-block">
          <a v-for="(social, index) in socials" :key="index" :href="social.url" target="_blank">
            <FontAwesomeIcon :icon="social.icon" />
          </a>
        </div>
      </div>
      <div class="description-block">
        <h1 class="description-title">
          Hello
        </h1>
        <p class="description-content">
          This is my personal website.
        </p>
        <div class="description-link">
          <button class="resume-button" @click="$router.replace({ path: '/resume' })">
            RESUME
          </button>
          <button class="projects-button" @click="$router.replace({ path: '/projects' })">
            PROJECTS
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      socials: [
        { icon: ['fab', 'instagram'], url: 'https://www.instagram.com/unni_0913' },
        { icon: ['fab', 'github'], url: 'https://github.com/chi0307' },
        { icon: ['fab', 'bitbucket'], url: 'https://bitbucket.org/junchi_0307' },
      ],
    };
  },
};
</script>
