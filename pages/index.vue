<template>
  <div class="index-page" />
</template>
<script>
export default {
  layout: 'website',
  created() {
    this.$router.replace({ path: '/aboutMe' });
  },
};
</script>
