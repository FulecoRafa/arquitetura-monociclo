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
        padding: 15px;
    }
    .card *::selection{
        background-color: green;
        color: white;
    }
</style>