<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  created() {
    this.check100vh();
  },
  methods: {
    check100vh() {
      const value = `${window.innerHeight}px`;
      document.documentElement.style.setProperty('--real100vh', value);
    },
  },
};
</script>

<style></style>
