<template>
  <div>
    <h1 class="text-4xl">Template for product {{ id }}</h1>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'products'
  });
  const { id } = useRoute().params;
</script>

<style lang="scss" scoped>

</style>