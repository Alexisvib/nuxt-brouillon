<template>
  <div class="card">
    <div class="p-7">
      <img :src="product.image" class="mx-auto my-7"/>
    </div>
    <div class="p-7">
      <h2 class="text-4xl my-7">{{ product.title }}</h2>
      <p class="text-xl my-7">Price : {{ product.price }}</p>
      <h3 class="font-bold border-b-2 mb-4 pb-2">Product Description :</h3>
      <p class="mb-7">{{ product.description }}</p>
    </div>
  </div>
</template>

<script setup>
  const { product } = defineProps(['product']);
</script>

<style lang="scss" scoped>
  .img {
    max-width: 400px;
  }
</style>