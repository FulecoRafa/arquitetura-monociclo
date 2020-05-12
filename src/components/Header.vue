<template>
  <header>
      <h1>Arquitetura monociclo</h1>
      <div id="nav">
          <router-link to='/'>Home</router-link> |
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
    }
    h1{
        font-weight: bolder;
        margin-left: 30px;
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
</style>