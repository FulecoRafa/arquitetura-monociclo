<template>
    <TextCard>
        <Title>Entendendo uma arquitetura simples</Title>
        <Content>
            Para não dificultar o entendimento, falaremos sobre a arquitetura RISC MIPS, que é uma das mais simples. Mas o que essa sigla significa?
            <br><br>RISC é <Bold>Reduced Instruction Set Computer</Bold>, que significa computador com conjunto reduzido de instruções e MIPS é <Bold>Microprocessor without interlocked pipeline stages</Bold>, que significa microprocessador sem estágios intertravados de <Hyperlink to='https://pt.wikipedia.org/wiki/Pipeline_(hardware)' info='Técnica que organiza a ordem das operações para evitar desperdiçar tempo e, dessa forma, consegue melhorar o desempenho do computador'>pipeline</Hyperlink>. O processador é como o cérebro da máquina.
            <br><br>A seguir, as partes que compõem o computador:
            <br><br>
            <Title>=> Unidade de controle</Title>
            Seria como o <Bold bolder>cérebro do cérebro</Bold>. Ela controla as operações dos demais componentes do processador. Possui uma memória de controle, registradores e <Hyperlink to='https://pt.wikipedia.org/wiki/Decodificador'>decodificadores</Hyperlink>e lógica de sequenciamento.
            <br><br>
            <Title>=> Unidade lógica e aritmética</Title>
            Realiza <Bold bolder>processamento de dados</Bold>, que significa receber uma entrada e retornar uma saída. Entre esses dois processos ocorrem operações de lógica (&lt;,&gt;,==,!=, no entanto são feitas <Bold>bit</Bold> a <Bold>bit</Bold> através de AND, OR, NOT, XOR) e aritmética (+, -, *, /, %, deslocamentos de <Bold>bits</Bold>, mas como são <Bold>bit</Bold> a <Bold>bit</Bold>, usa-se apenas adição pois toda subtração, multiplicação, divisão e deslocamentos são derivadas da soma).
            <br><br>
            <Title>=> Memória</Title>
            Como dito anteriormente, há a memória de longo prazo e curto prazo. A memória de longo prazo é chamada <Bold bolder>memória secundária</Bold> e são os discos rígidos magnéticos (HD - <Bold>hard disk</Bold> e SSD - <Bold>solid state drive</Bold>), que armazenam arquivos(como as suas fotos, músicas e PDFs) e aplicações (como seu Netflix e Spotify). Para acessar essa memória é preciso mover um braço mecânico.
            <br><br>Já a memória de curto prazo é chamada <Bold bolder>memória primária</Bold>, que é a RAM - <Bold>random access memory</Bold>, e têm acesso muito mais rápido que o disco rígido pois não é preciso mover braço algum já que ela é um <Hyperlink to='https://pt.wikipedia.org/wiki/Circuito_integrado' info='Um espaço muito pequeno por onde se passa corrente elétrica e muito importante nos dispositivos eletrônicos'>circuito integrado</Hyperlink>. A memória primária não armazena dados permanentemente, apenas as instruções e dados necessários à execução do programa. 
            <br><br>Também temos a <Bold bolder>cache</Bold>, que é uma memória mais rápida e menor que a memória principal e serve de intermédio entre um processo e a memória principal.
            <br><br>Ainda falando sobre memória de curto prazo, temos os <Bold bolder>registradores</Bold>, que estão fora da RAM e da cache, mas dentro do processador (e ainda há registradores dentro da unidade de controle, ou seja, há uma memória para o “organismo” todo, uma memória auxiliar só para o “cérebro” e outra memória auxiliar só para o “cérebro do cérebro”). Os registradores possuem memória muito menor que a cache, armazenando somente um dado por vez. Há 64 registradores no MIPS: 32 deles são reservados para <Hyperlink to='https://pt.wikipedia.org/wiki/V%C3%ADrgula_flutuante' info='Termo usado na computação para se referir a um número com parte quebrada (decimal), mas pode indicar um inteiro também, por exemplo em 1.000 a parte quebrada é 000'>ponto flutuante</Hyperlink> e outros 32 para uso geral, que são mostrados na tabela a seguir. E também há outros registradores, com outras funções.
        </Content>
        <NavButton prev='/niveis-de-maquina' next='/cerebro-faz'></NavButton>
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