<template>
  <header>
      <h1>Arquitetura Monociclo</h1>
      <div id="nav">
          <router-link to='/'>Artigo</router-link> |
          <router-link to='/simulator'>Simulador</router-link> |
          <router-link to="/credits">Créditos</router-link>
      </div>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
    header{
        background: rgb(91, 184, 37);
        color: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: nowrap;
        width: 100%;
        height: 60px;
        position: fixed;
        top: 0;
        z-index: 20;
    }
    header *::selection{
        background-color: white;
        color: rgb(91, 184, 37);
    }
    h1{
        font-weight: bolder;
        margin-left: 30px;
        color: white;
    }
    #nav {
    padding: 30px;
    }

    #nav a {
    font-weight: bold;
    color: white;
    }

    #nav a:hover{
        color: #f4f815;
    }

    #nav a.router-link-exact-active {
    color: #f4f815;
    }
    #nav a.router-link-exact-active::selection{
        background-color: #f4f815;
        color: rgb(91, 184, 37);
        text-decoration-color: rgb(91, 184, 37);
    }
</style>