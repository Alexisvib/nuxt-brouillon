<template>
  <div>
    <h2>About Page</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus quia nesciunt eos veritatis. Ratione facere aperiam ex, libero quae, tempore animi, non natus accusantium aspernatur autem dolorem at reiciendis vitae!</p>
    <p>{{ data.message }}</p>
  </div>
</template>

<script setup>
  const { data } = useFetch('/api/products?mario=prout');
</script>

<style lang="scss" scoped>
  h2 {
    margin-bottom: 2rem;  
    font-size: 2rem;
  }

  p {
    margin: 2rem 0;
  }
</style>