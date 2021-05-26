<template>
  <div>
    <div class="project-page">
      <p class="project-description-text">
        <FontAwesomeIcon class="icon" :icon="['fas', 'dot-circle']" />
        點擊圖片可預覽網頁
      </p>
      <div v-for="(project, index) of projects" :key="index">
        <ProjectBlock
          :description="project.text"
          :previewImage="project.previewImage"
          :previewUrl="project.previewUrl"
          @openPreview="openPreview"
        />
      </div>
    </div>
    <modal name="project-preview-modal" height="90%" width="90%" classes="project-preview-modal">
      <iframe class="preview" :src="previewUrl" frameborder="0" />
    </modal>
  </div>
</template>
<script>
export default {
  layout: 'website',
  data() {
    return {
      projects: [
        {
          text: `
            開發一個 FB、Line 訊息共用的套件，<br />
            搭配使用畫面產生 JSON 結構<br />
            <a href="https://www.npmjs.com/package/@chi0307/transform-chatbot-message" target="_blank">
              搭配套件
            </a>
          `,
          previewImage: '/chatbot-preview.png',
          previewUrl: '/side/chatbot',
        },
      ],
      previewUrl: '',
    };
  },
  methods: {
    openPreview(url) {
      this.previewUrl = url;
      this.$modal.show('project-preview-modal');
    },
  },
};
</script>
