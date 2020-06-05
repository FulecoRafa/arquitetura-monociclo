<template>
  <span class="linkWrap">
      <a :href="to" target="_blank"><slot></slot></a>
      <div class="hover" v-if="info">
          {{info}}
          <br><br><span class="click">Clique para saber mais!</span>
      </div>
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
        /* z-index: -1; */
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
    a::selection{
        background: white;
        color: black;
    }
    .hover{
        display: none;
        font-size: 0.87em;
        border: 2px solid greenyellow;
        width: 200px;
        padding: 10px;
        position: absolute;
        background: black;
        z-index: 100;
        left: calc(-20% - 200px);
        top: 50%;
        transform: translate(0, -100%);
    }
    a:hover + .hover{
        display: inline;
    }
    .click{
        font-size: 0.84rem;
    }
</style>