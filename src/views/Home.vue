<template>
  <div class="home">
    <ChapterBar/>
    <TextCard>
      <Title big>A biologia dos computadores</Title>
      <Title>Introdução</Title>
    </TextCard>
  </div>
</template>

<script>
import ChapterBar from '@/components/ChapterBar.vue';
import TextCard from '@/components/TextCard.vue';
import Title from '@/components/Title';

export default {
  name: 'Home',
  components: {
    ChapterBar,
    TextCard,
    Title
  }
  
}
</script>

<style scoped>

</style>