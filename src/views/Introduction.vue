<template>
    <TextCard>
        <!-- <Title big>A biologia dos computadores</Title> -->
        <Title>Introdução</Title>
        <Content>
            Você já teve a curiosidade de saber como funcionam os nossos dispositivos eletrônicos, como os nossos <Bold>smartphones</Bold> e <Bold>laptops</Bold>? Mesmo que você seja um programador e já tenha noção de como funcionam as coisas em alto nível, você sabe como suas instruções de C, Java e Python são traduzidas para o computador até chegar nos sinais elétricos do <Hyperlink to="https://pt.wikipedia.org/wiki/Hardware" info="A parte física do computador, que torna a execução da parte lógica possível na máquina">hardware</Hyperlink>?
            <br><br>Apesar de não serem seres vivos, eles têm uma “biologia” como a nossa, com “órgãos”, incluindo um “cérebro”, “vasos condutores” que transportam sinais elétricos, e possuem memória de curto e longo prazo.
            <br><br>Todos os processos complexos de um <Hyperlink to="https://pt.wikipedia.org/wiki/C%C3%B3digo-fonte" info="O programa em forma de texto interpretável pela máquina">código fonte</Hyperlink> precisam ser quebrados em processos muito pequenos, mas bastante trabalhosos, para que juntos executem um processo complexo, que muitas vezes é tão simples quanto adicionar um elemento a uma <Hyperlink to="https://pt.wikipedia.org/wiki/Lista_ligada" info="Artifício da programação para agrupar informações, com blocos de informações conectados por ponteiros">lista encadeada</Hyperlink>. Esse, inclusive, requer dezenas de pequenas operações.
            <br><br>Para entender esse funcionamento, primeiro deixaremos claro as relações de alto e baixo nível da máquina, ou seja, quando um evento se aproxima mais do mundo externo ou interno do computador. Mostramos um modelo simples de entender: a arquitetura RISC-MIPS, junto com os seus “órgãos”, e como o funcionamento deles é sincronizado por uma propriedade chamada <Bold>clocking</Bold>. Então, mostramos que tipo de pequenos comandos as máquinas executam para gerar comandos complexos, assim como todo o caminho percorrido por sinais elétricos para torná-los possíveis.
        </Content>
        <NavButton next='/niveis-de-maquina'></NavButton>
    </TextCard>
</template>

<script>
import Title from '@/components/Title.vue';
import TextCard from '@/components/TextCard.vue';
import Content from '@/components/Content.vue';
import NavButton from '@/components/NavButton.vue';
import Bold from '@/components/Bold.vue'
import Hyperlink from '@/components/Hyperlink.vue'

export default {
    components:{
        Title,
        TextCard,
        Content,
        NavButton,
        Bold,
        Hyperlink
    }
}
</script>

<style>

</style>