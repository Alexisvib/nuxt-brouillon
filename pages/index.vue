<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/">Nuxt Test</NuxtLink>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products">Products</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <h2>Home Page</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus quia nesciunt eos veritatis. Ratione facere aperiam ex, libero quae, tempore animi, non natus accusantium aspernatur autem dolorem at reiciendis vitae!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus quia nesciunt eos veritatis. Ratione facere aperiam ex, libero quae, tempore animi, non natus accusantium aspernatur autem dolorem at reiciendis vitae!</p>
  </div>
</template>

<script setup>

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