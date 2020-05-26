<template>
    <TextCard>
        <NavButton prev='/cerebro-como'></NavButton>
        <Title>Agora você sabe!</Title>
        <Content>
            Antes de começar a ler, pode ser que você não sabia como era dentro de um computador. Mas agora você sabe qual é a língua que ele entende, quais são seus órgãos, como funcionam e o que ele pode fazer. Também sabe como foram feitas as linguagens de programação, já que viu como elas são traduzidas para a máquina. Agora você sabe o que está dentro desse objeto tão misterioso e também que as máquinas são mais parecidas com nós do que você provavelmente pensava. 
        </Content>
        <NavButton prev='/cerebro-como'></NavButton>
    </TextCard>
</template>

<script>
import Title from '@/components/Title.vue';
import TextCard from '@/components/TextCard.vue';
import Content from '@/components/Content.vue';
import NavButton from '@/components/NavButton.vue';
// import Bold from '@/components/Bold.vue'
// import Hyperlink from '@/components/Hyperlink.vue'

export default {
    components:{
        Title,
        TextCard,
        Content,
        NavButton,
        // Bold,
        // Hyperlink
    }
}
</script>

<style>

</style>