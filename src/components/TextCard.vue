<template>
  <div class="card">
      <slot></slot>
  </div>
</template>

<script>

export default {
    name: "TextCard"
}
</script>

<style>
    .card{
        max-width: 88%;
        margin: 10px 0 0 180px;
        border: 2px solid green;
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