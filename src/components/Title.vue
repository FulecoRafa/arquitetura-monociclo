<template>
  <div class="title">
    <h1 :style="{'font-size': font}">
        <slot></slot>
        <span class="cursor" v-if="showCursor" :style="{'margin-top': margin }"></span>
    </h1>
  </div>
</template>

<script>
export default {
    data: ()=>({
        showCursor: true
    }),
    props:{
        big: Boolean
    },
    mounted: function() {
        this.switch();
    },
    methods: {
        switch(){
            const self = this;
            setInterval(()=>{
            self.showCursor = !self.showCursor;
            }, 700);
        }
    },
    computed:{
        font: function(){
            return this.big?"35px":"30px";
        },
        margin: function(){
            return this.big?"25px":"20px";
        }
    }
}
</script>

<style>
    .title{
        display: flex;
        margin-bottom: 25px;
    }
    h1{
        color: green;
        font-size: 23px;
    }
    .cursor{
        display: inline-block;
        background: green;
        margin: 20px 0 0 5px;
        width: 15px;
        height: 4px;
    }
</style>