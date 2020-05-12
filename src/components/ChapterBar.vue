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
        height: 90vh;
        width: 160px;
        border: 2px solid green;
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
    #chapters li{
        padding: 10px;
    }
    #chapters a{
        color: green;
    }
    #chapters a.router-link-exact-active{
        color: #f4f815;
    }
</style>