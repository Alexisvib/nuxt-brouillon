<template>
  <div>
    <p>Template for product {{ id }}</p>
  </div>
</template>

<script setup>
  const { id } = useRoute().params;
</script>

<style lang="scss" scoped>

</style>