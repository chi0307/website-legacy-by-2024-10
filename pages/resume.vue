<template>
  <div class="resume-page">
    <div class="resume-inbox">
      <div class="resume-title">
        <p>
          Resume
        </p>
      </div>
      <div class="experience-title">
        <p>
          Experience
        </p>
        <div class="cv" @click="downloadCV()">
          履歷表
        </div>
      </div>
      <div class="experience">
        <ResumeBlock
          v-for="(experience, index) in experienceList"
          :key="index"
          class="experience-block resume-card"
          :period="experience.period"
          :title="experience.jobPosition"
          :subTitle="experience.companyName"
          :content="experience.description"
        />
      </div>
      <div class="education-title">
        <p>
          Education
        </p>
      </div>
      <div class="education">
        <ResumeBlock
          v-for="(education, index) in educationList"
          :key="index"
          class="experience-block resume-card"
          :period="education.period"
          :title="education.department"
          :subTitle="education.schoolName"
          :content="education.description"
        />
      </div>
      <div class="skill-title">
        <p>
          Professional skillset
        </p>
      </div>
      <div class="skill">
        <SkillsBlock class="resume-card" :professionalSkillset="professionalSkillset" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      experienceList: [
        {
          companyName: '北祥科技服務股份有限公司',
          jobPosition: '軟體設計師',
          period: '2020/05 ~ ',
          description: [
            {
              style: { 'line-height': 1.6 },
              text: `
                依照客戶需求進行系統串接，
                同時用 Express.js 開發 ChatBot，
                任職期間協助部門進行 Socket 系統重構，
                並且協助導入編譯、 log 記錄，
                與設計專案範本供部門使用。
              `,
            },
          ],
        },
        {
          companyName: '凱茂股份有限公司',
          jobPosition: '後端工程師',
          period: '2019/04 ~ 2020/05',
          description: [
            {
              style: { 'margin-bottom': '20px' },
              text: '開發公司產品 - 人資系統',
            },
            {
              style: { 'line-height': 1.6 },
              text: `
                前後端系統開發，
                前端利用 Vue.js 搭配 Vuex 進行開發，
                後端用 Adonis.js 搭配 PostgreSQL 開發，
                同時使用 GraphGL 做前後端串接。
              `,
            },
          ],
        },
      ],
      educationList: [
        {
          schoolName: '國立高雄科技大學',
          department: '資訊管理系',
          period: '2014/09 ~ 2018/07',
          description: [
            {
              style: { 'margin-bottom': '20px' },
              text: '比賽經歷：',
            },
            {
              style: { 'margin-left': '16px', 'margin-bottom': '20px' },
              text: `
                2017/12/08
                資管系專題發表競賽 優勝
              `,
            },
            {
              style: { 'margin-left': '16px', 'margin-bottom': '20px' },
              text: `
                2017/10/24
                2017 搶鮮大賽 優選
              `,
            },
            {
              style: { 'margin-left': '16px', 'margin-bottom': '20px' },
              text: `
                2017/02/17 ~ 19
                SIGFOX 物聯網黑客松 首獎
              `,
            },
          ],
        },
      ],
      professionalSkillset: [
        {
          title: '前端',
          skills: ['HTML', 'JavaScript', 'Vue.js', 'Vuex', 'Nuxt.js', 'SCSS', 'Webpack', 'gulp.js'],
        },
        {
          title: '後端',
          skills: [
            'Linux',
            'Node.js',
            'TypeScript',
            'Deno',
            'Express.js',
            'Adonis.js',
            'Socket.io',
            'Nginx',
            'Docker',
            'Ansible',
            'GraphQL',
            'RESTful',
            'WebSocket',
            'MQTT',
          ],
        },
        {
          title: '資料庫',
          skills: ['MySQL', 'PostgreSQL', 'Redis', 'MongoDB', 'CouchDB'],
        },
        {
          title: '設計',
          skills: [
            'Adobe Photoshop',
            'Adobe Illustrator',
            'Adobe InDesign',
            'Adobe After Effects',
            'Figma',
          ],
        },
      ],
    };
  },
  methods: {
    downloadCV() {
      window.open('./cv.pdf', '__blank');
    },
  },
};
</script>
