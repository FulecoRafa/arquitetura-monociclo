<template>
    <div class="codeBlock">
        <span class="codeLine" v-for="(line, index) of code" :key="index">
          <span class="lineCount">{{index+1}}</span>
          <span class="codeContent">{{line}}</span>
          <br>
        </span>
  </div>
</template>

<script>
export default {
    props:{
        data: String
    },
    computed: {
        code(){
            return this.data.split("\n");
        }
    }
}
</script>

<style scoped>
    .codeBlock{
        border: 2px outset greenyellow;
        padding: 10px 15px;
        box-shadow: 5px 5px 0 rgb(80, 80, 80);
        line-height: 1.5em;
        overflow-x: scroll -moz-scrollbars-none;
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
</style>