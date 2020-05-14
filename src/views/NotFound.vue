<template>
    <TextCard>
        <Title big>404</Title>
        <Title>Página não encontrada</Title>
        <Content>
            Parece que você está tentando acessar uma página que não existe. Navegue usando a <Bold bolder>Barra lateral de navegação</Bold> para ver o resto do site.
        </Content>
    </TextCard>
</template>

<script>
import Title from '@/components/Title.vue';
import TextCard from '@/components/TextCard.vue';
import Content from '@/components/Content.vue';
import Bold from '@/components/Bold.vue'

export default {
    components:{
        Title,
        TextCard,
        Content,
        Bold,
    }
}
</script>

<style>

</style>