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
                link: '/'
            },
            {
                name: "Níveis de máquina",
                link: '/niveis-de-maquina'
            },
            {
                name: "Entendendo uma arquitetura simples",
                link: '/arquitetura-simples'
            },
            {
                name: "O que faz o cérebro da máquina?",
                link: '/cerebro-faz'
            },
            {
                name: "Como funciona o cérebro da máquina?",
                link: '/cerebro-como'
            },
            {
                name: "Agora você sabe!!!",
                link: '/end'
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
        border: 2px solid green;
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        list-style: square outside;
        color: green;
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
        color: green;
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