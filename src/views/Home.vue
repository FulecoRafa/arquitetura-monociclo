<template>
  <div class="home">
    <ChapterBar/>
    <transition name="article-page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import ChapterBar from '@/components/ChapterBar.vue';

export default {
  name: 'Home',
  components: {
    ChapterBar
  }
  
}
</script>

<style scoped>
  *{
    color: greenyellow;
    text-align: left;
  }
  *:focus{
    outline: none;
  }
  *::-moz-focus-inner{
    outline: none;
  }

  .article-page-enter-active{
    animation: zoomOutBottom 0.75s both;
    animation-delay: 0.75s;
  }
  .article-page-leave-active{
    animation: zoomOutTop 0.75s;
  }
  @keyframes zoomOutTop{
    0%{
      scale: 1;
      transform: translateY(0);
    }
    70%{
      scale: 0.4;
      transform: translateY(-50%);
    }
    100%{
      scale: 0.4;
      transform: translateY(-300%);
    }
  }
  @keyframes zoomOutBottom{
    0%{
      scale: 0.4;
      transform: translateY(300%);
    }
    70%{
      scale: 0.4;
      transform: translateY(-50%);
    }
    100%{
      scale: 1;
      transform: translateY(0);
    }
  }
</style>