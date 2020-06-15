<template>
  <div class="questionCard">
    <div class="question">{{question}}</div>
    <div class="show"><button @click="show = !show">Mostrar</button></div>
    <div class="answer">{{shownAnswer}}</div>
  </div>
</template>

<script>
export default {
  name: "QuestionCard",
  props:['question', 'answer'],
  data: ()=>({
    show: false,
    hideAnswer: ''
  }),
  computed:{
    shownAnswer(){
      return this.show ? this.answer : this.hideAnswer;
    }
  },
  created(){
    let hide = '';
    for(let i = 0 ; i < this.answer.length ; i++){
      let newChar;
      if(this.answer.charAt(i) == ' '){
        newChar = ' ';
      }else{
        let char = this.answer.charCodeAt(i);
        newChar = String.fromCharCode(char + 3249 + Math.round(Math.random()*(200, -200)-200));
      }
      hide += newChar;
    }
    this.hideAnswer = hide;
    const self = this;
    setInterval(function(){
      let increment = Math.round(Math.random()*(200,-200)-200);
      let step = Math.round(Math.random()*(self.hideAnswer.length, 1)+1);
      for(let i = 0 ; i < self.hideAnswer.length ; i+=step){
        if(self.hideAnswer.charAt(i) == ' ') continue;
        let code = self.hideAnswer.charCodeAt(i);
        code += increment;
        if(code > 0xdfb6 || code < 36) code -= 2*increment;
        self.hideAnswer = self.hideAnswer.substring(0, i) + String.fromCharCode(code) + self.hideAnswer.substring(i+1)
      }
    }, 500);
  }
}
</script>

<style scoped>
.questionCard{
  border: 3px solid yellowgreen;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(2, 1fr);
  font-size: 1.3em;
  margin: 15px 0;
}
.questionCard *{
  padding: 10px;
}
.question{
  border: 1px solid greenyellow;
  grid-column: 1/12;
}
.show{
  border: 1px solid greenyellow;
  grid-column: 12/13;
}
.show button{
  background: none;
  font-size: 1.3em;
  border: 2px solid greenyellow;
  color: yellowgreen;
  cursor: pointer;
}
.show button:hover{
  background: greenyellow;
  color: black;
}
.answer{
  grid-column: 1/13;
}
</style>