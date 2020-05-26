<template>
    <TextCard>
        <NavButton prev='/' next='/arquitetura-simples'></NavButton>
        <Title>Níveis de Máquina</Title>
        <Content>
            Para que o nosso diálogo com a máquina chegue de fato em sua estrutura física, um longo caminho é feito. Quando as operações se aproximam do ser humano, chamamos de <Bold bolder>alto nível</Bold>; quando se aproxima da máquina, chamamos de <Bold bolder>baixo nível</Bold>.
            <br><br>Linguagens como Python são de alto nível pois são legíveis às pessoas; C é uma linguagem de médio-alto nível pois não é tão complicada assim, mas é menos ”intuitiva” que as outras; Assembly é a linguagem de mais baixo nível.
            <br><br>Quando você <Bold bolder>compila</Bold> seu código, ele é transformado em Assembly. O Assembly é <Bold bolder>montado</Bold> para código binário, ou seja, as operações Assembly são transformadas em operações escritas apenas em 0 e 1. Então ocorre a <Bold bolder>Linkedição</Bold>, que é a inclusão das bibliotecas no seu código e a passagem de referências(por exemplo, quando você passa uma variável como parâmetro em uma função).
            <br><br>Agora seu código está pronto para ser executado. Os 0s e 1s equivalem a sinais elétricos baixos e altos respectivamente, que atuam na microarquitetura e consequentemente no nível <Bold bolder>lógico</Bold> da máquina.
        </Content>
        <NavButton prev='/' next='/arquitetura-simples'></NavButton>
    </TextCard>
</template>

<script>
import Title from '@/components/Title.vue';
import TextCard from '@/components/TextCard.vue';
import Content from '@/components/Content.vue';
import NavButton from '@/components/NavButton.vue';
import Bold from '@/components/Bold.vue'
// import Hyperlink from '@/components/Hyperlink.vue'

export default {
    components:{
        Title,
        TextCard,
        Content,
        NavButton,
        Bold,
        // Hyperlink
    }
}
</script>

<style>

</style>