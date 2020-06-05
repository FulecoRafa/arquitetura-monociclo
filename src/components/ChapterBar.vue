<template>
  <ul id="chapters">
        <li v-for="chapter of chapters" :key="chapter.link">
          <router-link :to="chapter.link">{{chapter.name}}</router-link>
        </li>
  </ul>
</template>

<script>
export default {
    data: () =>({
        chapters: [
            {
                name: "Introdução",
                link: '/article'
            },
            {
                name: "Níveis de máquina",
                link: '/article/niveis-de-maquina'
            },
            {
                name: "Entendendo uma arquitetura simples",
                link: '/article/arquitetura-simples'
            },
            {
                name: "O que faz o cérebro da máquina?",
                link: '/article/cerebro-faz'
            },
            {
                name: "Como funciona o cérebro da máquina?",
                link: '/article/cerebro-como'
            },
            {
                name: "Agora você sabe!!!",
                link: '/article/end'
            }
        ]
    })
}
</script>

<style scoped>
    #chapters{
        position: fixed;
        top: 60px;
        height: 800px;
        width: 160px;
        border: 2px solid greenyellow;
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        list-style: square outside;
        color: greenyellow;
    }
    #chapters *::selection{
        background-color: green;
        color: white;
    }
    #chapters li{
        padding: 10px;
        max-width: 60%;
    }
    #chapters a{
        font-size: 18px;
        color: greenyellow;
    }
    #chapters a.router-link-exact-active{
        color: #f4f815;
    }
    #chapters a.router-link-exact-active::selection{
        background-color: #f4f815;
        color: black;
    }
    @media screen and (max-width: 700px) {
        #chapters{
            visibility: hidden;
            left: -100%;
        }
    }
</style>