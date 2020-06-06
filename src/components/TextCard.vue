<template>
  <div class="card">
      <Title big>A biologia dos computadores</Title>
      <slot></slot>
  </div>
</template>

<script>
import Title from '@/components/Title.vue';

export default {
    name: "TextCard",
    components: {
        Title
    }
}
</script>

<style>
    .card{
        max-width: 88%;
        margin: 70px 0 0 220px;
        border: 2px solid greenyellow;
        padding: 25px;
    }
    .card *::selection{
        background-color: green;
        color: white;
    }
    @media screen and (max-width: 700px){
        .card{
            max-width: unset;
            margin-left: 0;
        }
    }
</style>