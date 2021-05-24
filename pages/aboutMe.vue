<template>
  <div class="about-me-page">
    <div class="white-block" />
    <div class="message-block">
      <div class="present-block">
        <div class="present-top-block">
          <ShapeImage class="about-me-image" :src="personalImage" :radius="50" />
          <div class="about-me-name">
            <h1>{{ name }}</h1>
          </div>
          <div class="about-me-line" />
          <div class="about-me-title">
            <h3>{{ workPosition }}</h3>
          </div>
        </div>
        <div class="present-bottom-block">
          <a v-for="(social, index) in socials" :key="index" :href="social.url" target="_blank">
            <FontAwesomeIcon :icon="social.icon" />
          </a>
        </div>
      </div>
      <div class="description-block">
        <div class="description-inblock">
          <h1 class="description-title">
            {{ descriptionTitle }}
          </h1>
          <p class="description-content">
            {{ descriptionContent }}
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
  </div>
</template>
<script>
export default {
  layout: 'website',
  data() {
    return {
      name: 'Benson',
      workPosition: 'FrontEnd Developer',
      personalImage: '/aboutMe.JPG',
      socials: [
        { icon: ['fab', 'instagram'], url: 'https://www.instagram.com/unni_0913' },
        { icon: ['fab', 'github'], url: 'https://github.com/chi0307' },
        { icon: ['fab', 'bitbucket'], url: 'https://bitbucket.org/junchi_0307' },
      ],
      descriptionTitle: 'Hello',
      descriptionContent: '這是我的個人網站，目前仍緩慢更新中。',
    };
  },
};
</script>
