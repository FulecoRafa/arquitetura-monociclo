<template>
    <TextCard>
        <NavButton prev='/niveis-de-maquina' next='/cerebro-faz'></NavButton>
        <Title>Entendendo uma arquitetura simples</Title>
        <Content>
            Para não dificultar o entendimento, falaremos sobre a arquitetura <Hyperlink to="https://pt.wikipedia.org/wiki/RISC" info="Reduced Instruction Set Computer, que significa computador com conjunto reduzido de instruções">RISC</Hyperlink> <Hyperlink to="https://pt.wikipedia.org/wiki/Arquitetura_MIPS" info="Microprocessor without interlocked pipeline stages, que significa microprocessador sem estágios intertravados de pipeline">MIPS</Hyperlink>, que é uma das mais simples, principalmente por ser monociclo, o que significa que só se executa uma instrução por vez. Para se executar mais de uma instrução ao mesmo tempo seria necessário o uso de <Hyperlink to="https://pt.wikipedia.org/wiki/Pipeline_(hardware)" info="Técnica que organiza a ordem das operações para evitar desperdiçar tempo e, dessa forma, consegue melhorar o desempenho do computador">pipeline</Hyperlink>.
            <br><br>Todos os processos de execução de instrução ocorrem no processador, que é como o cérebro da máquina e sem ele não há controle sobre os processos. Mas, todas as partes do computador são importantes, assim como todas as partes de um organismo. Basicamente, é preciso um componente que controle os outros componentes, um componente que realize processamento de dados, componentes de armazenamento, e componentes de entrada e saída.
            <br><br>A seguir, as partes que compõem o computador:
            <br><br>
            <Title>=> Unidade de controle</Title>
            Seria como o <Bold bolder>cérebro do cérebro</Bold>. Ela controla as operações dos demais componentes do processador. Possui uma memória de controle, registradores e <Hyperlink to="https://pt.wikipedia.org/wiki/Decodificador" info="Um circuito eletrônico que dependendo por quais portas de entrada chegou corrente, libera corrente para determinadas portas de saída">decodificadores</Hyperlink>e lógica de sequenciamento.
            <br><br>
            <Title>=> Unidade lógica e aritmética</Title>
            Realiza <Bold bolder>processamento de dados</Bold>, que significa receber uma entrada e retornar uma saída. Entre esses dois processos ocorrem operações de lógica (&lt;,&gt;,==,!=, no entanto são feitas <Bold>bit</Bold> a <Bold>bit</Bold> através de AND, OR, NOT, XOR) e aritmética (+, -, *, /, %, deslocamentos de <Bold>bits</Bold>, mas como são <Bold>bit</Bold> a <Bold>bit</Bold>, usa-se apenas adição pois toda subtração, multiplicação, divisão e deslocamentos são derivadas da soma).
            <br><br>
            <Title>=> Memória</Title>
            Como dito anteriormente, há a memória de longo prazo e curto prazo. A memória de longo prazo é chamada <Bold bolder>memória secundária</Bold> e são os discos rígidos magnéticos (HD - <Bold>hard disk</Bold> e SSD - <Bold>solid state drive</Bold>), que armazenam arquivos(como as suas fotos, músicas e PDFs) e aplicações (como seu Netflix e Spotify). Para acessar essa memória é preciso mover um braço mecânico.
            <br><br>Já a memória de curto prazo é chamada <Bold bolder>memória primária</Bold>, que é a RAM - <Bold>random access memory</Bold>, e têm acesso muito mais rápido que o disco rígido pois não é preciso mover braço algum já que ela é um <Hyperlink to="https://pt.wikipedia.org/wiki/Circuito_integrado" info="Um espaço muito pequeno por onde se passa corrente elétrica e muito importante nos dispositivos eletrônicos">circuito integrado</Hyperlink>. A memória primária não armazena dados permanentemente, apenas as instruções e dados necessários à execução do programa. 
            <br><br>Também temos a <Bold bolder>cache</Bold>, que é uma memória mais rápida e menor que a memória principal e serve de intermédio entre um processo e a memória principal.
            <br><br>Ainda falando sobre memória de curto prazo, temos os <Bold bolder>registradores</Bold>, que estão fora da RAM e da cache, mas dentro do processador (e ainda há registradores dentro da unidade de controle, ou seja, há uma memória para o “organismo” todo, uma memória auxiliar só para o “cérebro” e outra memória auxiliar só para o “cérebro do cérebro”). Os registradores possuem memória muito menor que a cache, armazenando somente um dado por vez. Há 64 registradores no MIPS: 32 deles são reservados para <Hyperlink to="https://pt.wikipedia.org/wiki/V%C3%ADrgula_flutuante" info="Termo usado na computação para se referir a um número com parte quebrada (decimal), mas pode indicar um inteiro também, por exemplo em 1.000 a parte quebrada é 000">ponto flutuante</Hyperlink> e outros 32 para uso geral, que são mostrados na tabela a seguir. E também há outros registradores, com outras funções.
            <Table :info="tableData"></Table>
            <br><br>As ligações internas do nosso organismo em questão são chamadas <Bold bolder>barramentos</Bold>, que são fios condutores geralmente feitos de cobre que ligam os componentes citados uns aos outros, sempre conduzindo sinais elétricos altos (1) ou baixos (0).  Elas são auxiliadas por <Bold bolder>multiplexadores</Bold>, que dependendo de quais são os sinais de entrada, liberam ou um sinal alto ou um baixo. É por isso que o computador precisa ter bateria ou estar ligado à tomada. Sem corrente elétrica não há outro meio de informar o que deve ser feito.
            <br><br>Para que tudo funcione em sincronia, há o <Bold bolder>clock</Bold> que controla o ritmo das operações e evita que tudo entre em colapso. Na arquitetura MIPS, que veremos a seguir, pode ser que ele não seja tão vital, mas em uma arquitetura com <Bold>pipeline</Bold> ele é necessário para não se desorganizar a ordem dos processos. O <Bold>clock</Bold> é a propriedade que você vê quando vai comprar um <Bold>notebook</Bold> e está escrito “processador de 3GHz”, por exemplo. Ele é a frequência em <Hyperlink to="https://pt.wikipedia.org/wiki/Hertz" info="Unidade de medida de ciclos por segundo">Hertz</Hyperlink> de quantos ciclos de instrução podem ser feitos por segundo. Um ciclo de instrução é o uso de todos os componentes para executar uma instrução. No caso de uma arquitetura com pipeline, em que mais de uma instrução será executada ao mesmo tempo, o tempo do clock será 5 vezes o tempo da fase de execução mais longa. 
            <br><br>Por fim, há os “órgãos” externos do computador, que são os <Bold bolder>dispositivos E/S</Bold>. Dispositivos de entrada trazem dados do mundo exterior para o computador, como o teclado, o <Bold>mouse</Bold>, as mesas digitalizadoras, a <Bold>webcam</Bold> e o microfone, e dispositivos de saída retornam dados para o usuário, como o monitor, as caixas de som e fones de ouvido, e as impressoras.
        </Content>
        <NavButton prev='/niveis-de-maquina' next='/cerebro-faz'></NavButton>
    </TextCard>
</template>

<script>
import Title from '@/components/Title.vue';
import TextCard from '@/components/TextCard.vue';
import Content from '@/components/Content.vue';
import NavButton from '@/components/NavButton.vue';
import Bold from '@/components/Bold.vue';
import Hyperlink from '@/components/Hyperlink.vue';
import Table from '@/components/Table.vue';


import {regs} from '@/data/regs.js';

export default {
    components:{
        Title,
        TextCard,
        Content,
        NavButton,
        Bold,
        Hyperlink,
        Table
    },
    data: ()=>({
        tableData: regs
    })
}
</script>

<style>

</style>
