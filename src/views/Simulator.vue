<template>
  <div class="simulator">
    <span>Mostrando: {{show}}</span>
    <div class="view">
      <img  :class="{'hidden': selection != 0}" src="../assets/instructions/static.png" alt="Arquitetura">
      <img  :class="{'hidden': selection != 1}" src="../assets/instructions/add.gif" alt="Arquitetura">
      <img  :class="{'hidden': selection != 2}" src="../assets/instructions/lw.gif" alt="Arquitetura">
      <img  :class="{'hidden': selection != 3}" src="../assets/instructions/jump.gif" alt="Arquitetura">
    </div>
    <div class="selector">
      <div class="option" :class="{'pressed': selection == 1}" @click="mark(1)"><span>Add || Tipo R</span></div>
      <div class="option" :class="{'pressed': selection == 2}" @click="mark(2)"><span>LW || Tipo I</span></div>
      <div class="option" :class="{'pressed': selection == 3}" @click="mark(3)"><span>Jump || Tipo J</span></div>
    </div>
    <div class="message"><span>Por que não vira o celular?</span></div>
  </div>
</template>

<script>
export default {
  data: ()=>({
    selection: 0
  }),
  methods:{
    mark: function(index){
      if(this.selection == index){
        this.selection = 0;
      }else{
        this.selection = index;
      }
    }
  },
  computed:{
    show(){
      if(this.selection == 1){
        return "Add";
      }else if(this.selection == 2){
        return "LW";
      }else if(this.selection == 3){
        return "Jump";
      }else{
        return "Arquitetura Completa";
      }
    }
  }
}
</script>

<style>
  .simulator{
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  span{
    color: greenyellow;
    font-size: 1.3em;
  }
  .view{
    max-width: 63%;
    border: 3px solid greenyellow;
  }
  .view img{
    width: 100%;
  }
  .selector{
    margin-top: 25px;
    display: flex;
  }
  .option{
    border: 2px solid greenyellow;
    margin: 5px 20px;
    padding: 5px 15px;
    position: relative;
    box-shadow: 8px 8px 0 rgb(68, 68, 68);
    cursor: pointer;
  }
  .pressed{
    box-shadow: 6px 6px 0 rgb(68, 68, 68);
    transform: translate(2px, 2px);
    border: 2px solid magenta;
  }
  .pressed > span{
    color: magenta;
  }
  .hidden{
    display: none;
  }
  .message{
    margin-top: 20px;
    visibility: hidden;
  }
  @media (orientation: portrait) and (max-width:700px){
    .message{
      visibility: visible;
    }
  }
</style>