<template>
  <div id="app">
    <Header>
    </Header>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  name: "app",
  components: {
    Header,
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
body{
  background: black;
}
#app {
  font-family: 'Courier New', Courier, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}


</style>
