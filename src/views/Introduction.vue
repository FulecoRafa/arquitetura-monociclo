<template>
    <TextCard>
        <Title big>A biologia dos computadores</Title>
        <Title>Introdução</Title>
        <Content>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero dignissimos natus quidem provident consequuntur. Distinctio est corporis unde, fuga aut commodi exercitationem cupiditate. Molestias totam nam hic obcaecati eum iure.</Content>
        <NavButton prev='/' next='/niveis-de-maquina'></NavButton>
    </TextCard>
</template>

<script>
import Title from '@/components/Title.vue';
import TextCard from '@/components/TextCard.vue';
import Content from '@/components/Content.vue';
import NavButton from '@/components/NavButton.vue';

export default {
    components:{
        Title,
        TextCard,
        Content,
        NavButton
    }
}
</script>

<style>

</style>