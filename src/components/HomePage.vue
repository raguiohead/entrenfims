<template>
    <section class="content">
        <h1 class="title">olá. <br> me chamo guilherme. <br>este é o meu <span class="title-italic">"blog"</span></h1>
    </section>
    <FooterPage/>
</template>

<script setup>

    import FooterPage from './FooterPage.vue';

</script>

<style>

    .content{
        font-family: "Raleway", serif;
        margin: 1rem;
    }

    .title{
        text-align: center;
        font-weight: 200;
        font-size: 3rem;
    }

    .title-italic{
        font-style: italic;
    }

</style>