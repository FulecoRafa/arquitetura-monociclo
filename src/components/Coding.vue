<template>
  <div class="code">
    <div class="header">
      <div class="title">=> {{title}}</div>
    </div>
    <div class="codeBlock">
        <span class="codeLine" v-for="(line, index) of code" :key="index">
        <span class="lineCount">{{index+1}}</span>
        <span class="codeContent">{{line}}</span>
        <br>
      </span>
    </div>
    <input class="copyContent" type="text" :value="data">
  </div>
</template>

<script>
export default {
    props:{
        data: String,
        header: String
    },
    computed: {
        code(){
            return this.data.split("\n");
        },
        title(){
          return this.header || "Code";
        }
    }
}
</script>

<style scoped>
  .header{
    width: calc(100%-5px);
    border: 2px solid greenyellow;
    border-bottom: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 5px 4px 0 rgb(80, 80, 80);
  }
  .header *{
    padding: 15px;
  }
  .title{
    font-size: 1.7em;
    max-height: 29px;
    padding: 0 0 -1px 10px;
  }
  .copy{
    max-width: 30px;
    font-size: 1.3em;
    cursor: pointer;
    border-left: 2px solid greenyellow;
  }
  .copy:hover{
    background: green;
  }
    .codeBlock{
        border: 2px outset greenyellow;
        padding: 10px 15px;
        box-shadow: 5px 5px 0 rgb(80, 80, 80);
        line-height: 1.5em;
        overflow-x: scroll ;
        scrollbar-width: none;
    }
    .codeBlock::-webkit-scrollbar {
        display: none;
    }
    .codeLine{
        display: flex;
				white-space: pre;
    }
    .lineCount{
        width: 3em;
        text-align: right;
        padding-right: 15px;
        border-right: 1px solid green;
    }
    .codeContent{
        padding-left: 15px;
    }
    .copyContent{
      display: none;
    }
</style>