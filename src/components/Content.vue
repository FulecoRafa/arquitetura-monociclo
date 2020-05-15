<template>
  <div class="content">
        <p><slot></slot><span class="block">{{cont}}</span></p>
  </div>
</template>

<script>
export default {
    name: "Content",
    data: ()=>({
        showCursor: true
    }),
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
        cont(){
            return this.showCursor?".":""
        }
    }
}
</script>

<style scoped>
    
    .content p{
        line-height: 2;
    }
    .block{
        color: greenyellow;
        background: greenyellow;
        height: 1em;
        width: 0.6em;
    }
</style>