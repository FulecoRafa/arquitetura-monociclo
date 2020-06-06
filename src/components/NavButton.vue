<template>
  <div class="nav">
      <div class="button prev" v-if="prev">
          <router-link :to="prev" >{{back}}</router-link>
          <span class="radio"></span>
      </div>
      <div class="button next" v-if="next">
          <span class="radio"></span>
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
        height: 30px;
        margin: 25px 0;
    }
    .button{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .button a{
        color: #55ffff;
    }
    .button a::selecion{
        background: #55ffff;
        color: black;
    }
    .button span{
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
    .button:hover > span{
        border: 1px solid greenyellow;
        background: greenyellow;
        box-shadow: inset 0 0 0 0.15em rgb(0, 0, 0);
    }
    .prev{
      float: left;
    }
    .next{
      float: right;
    }
</style>