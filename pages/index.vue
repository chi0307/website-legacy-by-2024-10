<template>
  <div class="index-page" />
</template>
<script>
export default {
  created() {
    this.$router.replace({ path: '/aboutMe' });
  },
};
</script>
