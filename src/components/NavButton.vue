<template>
  <div class="nav">
      <div class="button" v-if="prev">
          <router-link :to="prev" >{{back}}</router-link>
          <div class="radio"></div>
      </div>
      <div class="button" v-if="next">
          <div class="radio"></div>
          <router-link :to="next">{{front}}</router-link>
      </div>
  </div>
</template>

<script>
export default {
    props:[
        'next',
        'prev'
    ],
    data: ()=>({
        back: "< Voltar",
        front: "Continuar >"
    })
}
</script>

<style scoped>
    .nav{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .button{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .button a{
        color: #55ffff;
    }
    .button div{
        border: 1px solid #55ffff;
        border-radius: 50%;
        height: 0.7em;
        width: 0.7em;
        margin: 0 10px;
    }
    .button:hover{
        cursor: pointer;
    }
    .button:hover > a{
        color: greenyellow;
    }
    .button:hover > div{
        border: 1px solid greenyellow;
        background: greenyellow;
        box-shadow: inset 0 0 0 0.15em rgb(0, 0, 0);
    }
</style>