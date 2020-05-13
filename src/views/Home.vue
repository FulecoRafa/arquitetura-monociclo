<template>
  <div class="home">
    <ChapterBar/>
    <router-view></router-view>
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
    color: green;
    text-align: left;
  }
</style>