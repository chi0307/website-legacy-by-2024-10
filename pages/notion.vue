<template>
  <div />
</template>

<script>
export default {
  data() {
    return {
      notionUrl: 'https://chi0307.notion.site/Website-93fcfd9c08644812a467cd8c688d7108',
    };
  },
  created() {
    // eslint-disable-next-line
    window.location.href = this.notionUrl;
  },
};
</script>
