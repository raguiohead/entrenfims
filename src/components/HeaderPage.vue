<template>
  <nav class="navBar">
    <h1 class="navBar-title">{{ title }}</h1>

    <div class="navBar-links">
      <router-link class="link" to="/inicio"> Inicio </router-link>
      <router-link class="link" to=""> Contos </router-link>
      <router-link class="link" to="/poemas"> Poemas </router-link>
      <a class="link" :href="url" target="_blank"> @ </a>
    </div>
  </nav>
</template>

<script setup>
    const title = "entrenfims"
    const url = "https://www.instagram.com/entrenfims/"
</script>

<style>
  .navBar{
    align-items: center;
      border:solid 1px black;
    display: flex;
    justify-content: space-between;
    margin: 1rem;
    padding: 1rem;
  }

  .navBar-title{
    font-family: "Raleway", serif;
    font-size: 1.4rem;
  }

  .navBar-links{
    display: flex;
    gap: 1.4rem;
  }

  .link{
    font-family: "Raleway", serif;
    text-decoration: none;
    color: gray;
  }
</style>