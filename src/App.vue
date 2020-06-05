<template>
  <div id="app">
    <Header>
    </Header>
    <transition name="main">
      <router-view/>
    </transition>
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

.main-enter-active{
  animation: blur 0.3s both reverse;
  animation-delay: 0.3s;
}
.main-leave-active{
  animation: blur 0.3s both;
}
@keyframes blur{
  0%{
    filter: blur(0);
  }
  100%{
    filter: blur(10px);
  }
}

</style>
