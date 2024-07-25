<template>
  <section class="poemas">
    <ul class="poemas-lista">
      <li v-for="poema in poemas" :key="poema.id">
        <div class="poema-item">
            <h2 class="poema-title">{{ poema.title }}</h2>
            <br>
            <p class="poema-content" v-html="formatContent(poema.content)"></p>
        </div>
      </li>
    </ul>
  </section>
  <FooterPage/>
</template>

<script setup>

    import poemas from '@/assets/poemas.json';
    import FooterPage from './FooterPage.vue';


    function formatContent(content) {
      return content.replace(/\n/g, '<br>');
    }

</script>

<style>
    .poemas {
        margin: 1rem;
    }

    .poemas-lista{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 2rem;
        justify-content: center
    }

    .poema-item{
        border: solid 1px black;
        font-family: "Raleway", serif;
        padding: 1rem;
        height: calc(100% - 2rem);
    }

    .poema-title{
        font-style: oblique;
        font-weight: bold;
    }

    .poema-content{
        line-height: 22px;
    }
</style>