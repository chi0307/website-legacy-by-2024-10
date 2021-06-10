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
          previewImage: '/chatbot-json-toolbox-preview.png',
          previewUrl: '/side/chatbot-json-toolbox',
        },
        {
          text: `
            簡單的一個
            <a href="https://chi0307.github.io/chatbot" target="_blank">chatbot</a>
            呈現畫面，<br />
            嘗試用 PWA、Vue 3.0、TS 開發，<br />
            目前僅用假資料，無串接後台。
          `,
          previewImage: '/chatbot-preview.png',
          previewUrl: 'https://chi0307.github.io/chatbot',
        },
        {
          text: `
            一個簡單的娛樂用 line bot<br />
            嘗試串接 Google TTS、Google STT、Google Map<br />
            部署在 heroku
          `,
          previewImage: '/linebot-preview.png',
          previewUrl: 'https://line.me/R/ti/p/%40tyo2763z',
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
