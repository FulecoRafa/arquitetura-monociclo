<template>
  <div class="tableWrap">
      <table>
        <thead>
            <th v-for="(header,index) of info.header" :key="index">{{header}}</th>
        </thead>
        <tr v-for="(row,index) of info.data" :key="index">
            <td v-for="(cell,index) of row" :key="index"><Bold bolder>{{cell.bold}}</Bold>{{cell.text}}</td>
        </tr>
    </table>
  </div>
</template>

<script>
import Bold from '@/components/Bold.vue'

export default {
    components:{
        Bold
    },
    props: {
        info: Object
    }
}
</script>

<style scoped>
    .tableWrap{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 30px 0;
    }
    table{
        border: 3px solid greenyellow;
        border-collapse: collapse;
    }
    table td, table th{
        border: 2px dashed greenyellow;
        padding: 15px;
    }
</style>