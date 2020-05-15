<template>
  <span class="linkWrap">
      <a :href="to" target="_blank"><slot></slot></a>
      <div class="hover" v-if="info">{{info}}</div>
  </span>
</template>

<script>
export default {
    props: {
        to: String,
        info: String
    }
}
</script>

<style scoped>
    .linkWrap{
        position: relative;
    }
    a{
        color: white;
        text-decoration: none;
    }
    a:hover{
        text-decoration: underline;
    }
    a::after{
        content: '🔗';
        padding: 0 3px;
    }
    .hover{
        display: none;
        border: 2px solid green;
        width: 200px;
        padding: 10px;
        position: absolute;
        background: black;
        z-index: 100;
        left: 120%;
        top: 50%;
        transform: translate(0, -100%);
    }
    a:hover + .hover{
        display: inline;
    }
</style>