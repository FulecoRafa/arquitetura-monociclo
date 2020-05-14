<template>
  <span :class="{'bolder' : bolder}" ><slot></slot></span>
</template>

<script>
export default {
    props: {
        bolder: Boolean
    }
}
</script>

<style scoped>
    .bolder{
        color: magenta !important;
    }
    .bolder::selection{
        background-color: magenta;
        color: white;
    }
    span{
        font-weight: bolder;
        color: blueviolet;
    }
    span::selection{
        background-color: blueviolet;
        color: white;
    }
</style>