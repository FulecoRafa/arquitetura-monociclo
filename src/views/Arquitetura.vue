<template>
    <TextCard>
        <NavButton prev='/niveis-de-maquina' next='/cerebro-faz'></NavButton>
        <Title>Entendendo uma arquitetura simples</Title>
        <Content>
            Para não dificultar o entendimento, falaremos sobre a arquitetura <Hyperlink to="https://pt.wikipedia.org/wiki/RISC" info="Reduced Instruction Set Computer, que significa computador com conjunto reduzido de instruções">RISC</Hyperlink> <Hyperlink to="https://pt.wikipedia.org/wiki/Arquitetura_MIPS" info="Microprocessor without interlocked pipeline stages, que significa microprocessador sem estágios intertravados de pipeline">MIPS</Hyperlink>, que é uma das mais simples, principalmente por ser monociclo, o que significa que só se executa uma instrução por vez. Para se executar mais de uma instrução ao mesmo tempo seria necessário o uso de <Hyperlink to="https://pt.wikipedia.org/wiki/Pipeline_(hardware)" info="Técnica que organiza a ordem das operações para evitar desperdiçar tempo e, dessa forma, consegue melhorar o desempenho do computador">pipeline</Hyperlink>.
            <br><br>Todos os processos de execução de instrução ocorrem no processador, que é como o cérebro da máquina e sem ele não há controle sobre os processos. Mas, todas as partes do computador são importantes, assim como todas as partes de um organismo. Basicamente, é preciso processar, armazenar, e trafegar dados com o mundo externo, além de haver um controle sobre os componentes que realizam essas tarefas.
            <br><br>A seguir, as partes que compõem o computador:
            <br><br>
            <Title>=> Unidade de controle</Title>
            Seria como o <Bold bolder>cérebro do cérebro</Bold>. Ela controla as operações dos demais componentes do processador. Possui uma memória de controle, registradores e <Hyperlink to="https://pt.wikipedia.org/wiki/Decodificador" info="Um circuito eletrônico que dependendo por quais portas de entrada chegou corrente, libera corrente para determinadas portas de saída">decodificadores</Hyperlink>e lógica de sequenciamento.
            <br><br>
            <Title>=> Unidade lógica e aritmética</Title>
            Realiza <Bold bolder>processamento de dados</Bold>, que significa receber uma entrada e retornar uma saída. Entre esses dois processos ocorrem operações de lógica (&lt;,&gt;,==,!=, no entanto são feitas <Bold>bit</Bold> a <Bold>bit</Bold> através de AND, OR, NOT, XOR) e aritmética (+, -, *, /, %, deslocamentos de <Bold>bits</Bold>, mas como são <Bold>bit</Bold> a <Bold>bit</Bold>, usa-se apenas adição pois toda subtração, multiplicação, divisão e deslocamentos são derivadas da soma).
            <br><br>
            <Title>=> Memória</Title>
            Como dito anteriormente, há a memória de longo prazo e curto prazo. Memória nada mais é que armazenamento de informação. A memória de longo prazo é chamada <Bold bolder>memória secundária</Bold> e são os discos rígidos magnéticos (HD - <Bold>hard disk</Bold> e SSD - <Bold>solid state drive</Bold>), que armazenam arquivos(como as suas fotos, músicas e PDFs) e aplicações (como seu Netflix e Spotify). Para acessar essa memória é preciso mover um braço mecânico. Ela pode ser reescrita ou não. Por exemplo, num pendrive ou na própria memória RAM as informações podem ser apagadas e escritas, mas num CD-ROM ou disquete não. A memória secundária é não-volátil, o que significa que quando não se recebe mais corrente elétrica, as informações continuam armazenadas.
            <br><br>Já a memória de curto prazo é chamada <Bold bolder>memória primária</Bold>, que é a RAM - <Bold>random access memory</Bold>, e têm acesso muito mais rápido que o disco rígido pois não é preciso mover braço algum já que ela é um <Hyperlink to="https://pt.wikipedia.org/wiki/Circuito_integrado" info="Um espaço muito pequeno por onde se passa corrente elétrica e muito importante nos dispositivos eletrônicos">circuito integrado</Hyperlink>. A memória primária não armazena dados permanentemente, apenas as instruções e dados necessários à execução do programa enquanto há corrente elétrica. Por esse motivo ela é chamada volátil.
            <br><br>Também temos a <Bold bolder>cache</Bold>, que é uma memória mais rápida e menor que a memória principal e serve de intermédio entre um processo e a memória principal. Quando o registrador precisa de um dado, primeiro ele busca na cache, pois ela é uma memória menor e portanto mais rápida para procurar.
            <br><br>Seria como se você estivesse na biblioteca estudando com muitos livros, e você deixa alguns perto de você para não precisar procurar na estante inteira. O ideal é que os livros que você precisa estejam nessa coleção. Então, quanto maior a coleção, maior a chance de o livro procurado estar lá, porém quanto maior a coleção também maior será o tempo para procurar caso você procure um por um. Você também pode estabelecer uma ordem na coleção, sendo que a posição na coleção tenha alguma relação com a posição na estante como uma <Hyperlink to="https://pt.wikipedia.org/wiki/Fun%C3%A7%C3%A3o_hash" info="Técnica de acessar um dado em um arquivo menor que o original usando uma função matemática sobre o dado." >função hash</Hyperlink>, dessa forma você só olha a posição em que deve estar o livro e não a coleção toda. Você ainda pode fazer subcoleções e associar cada livro da estante a uma subcoleção, sendo que você pode colocar qualquer livro em qualquer posição da subcoleção associada. É preciso ter um equilíbrio entre o tempo de procura e a quantidade de livros, mas isso é problema para quem projeta essas coisas.
            <br><br>O problema é que colocando os livros na coleção à medida que você for usando, uma hora a sua mesa de trabalho vai ficar cheia e será preciso tirar um livro para colocar outro. O livro a ser removido pode ser o que não é usado há mais tempo(há quantas vezes ele ficou sem ser usado?), o que foi pego primeiro, o que teve menos usos em um espaço de tempo(quantos usos foram feitos nesse intervalo de tempo?) ou não usar um critério baseado no conteúdo dos livros(um contador é incrementado a cada vez que você consulta um livro e o livro removido é o que estiver na posição do contador. É interessante pois só se usa um contador para a coleção inteira e não um contador para cada livro da coleção como nos outros casos).
            <br><br>Ainda falando sobre memória de curto prazo, temos os <Bold bolder>registradores</Bold>, que estão fora da RAM e da cache, mas dentro do processador (e ainda há registradores dentro da unidade de controle, ou seja, há uma memória para o “organismo” todo, uma memória auxiliar só para o “cérebro” e outra memória auxiliar só para o “cérebro do cérebro”). Os registradores possuem memória muito menor que a cache, armazenando somente um dado por vez, porém, como já estão dentro do processador, o tempo de acesso é o menor entre os níveis de memória. Há 64 registradores no MIPS: 32 deles são reservados para <Hyperlink to="https://pt.wikipedia.org/wiki/V%C3%ADrgula_flutuante" info="Termo usado na computação para se referir a um número com parte quebrada (decimal), mas pode indicar um inteiro também, por exemplo em 1.000 a parte quebrada é 000">ponto flutuante</Hyperlink> e outros 32 para uso geral, que são mostrados na tabela a seguir. E também há outros registradores, com outras funções.
            <Table :info="tableData"></Table>
            <Title>=> Barramentos</Title>
            <br><br>As ligações internas do nosso organismo em questão são chamadas <Bold bolder>barramentos</Bold>, que são fios condutores geralmente feitos de cobre que ligam os componentes citados uns aos outros, sempre conduzindo sinais elétricos altos (1) ou baixos (0) que representam dados, endereços e controle. Se o barramento for dedicado, há um barramento para cada. Se não, usam-se <Bold bolder>multiplexadores</Bold>, que dependendo de quais são os sinais de entrada, liberam ou um sinal alto ou um baixo. Dessa forma, por um único barramento pode trafegar dados, endereços e controle. É por isso que o computador precisa ter bateria ou estar ligado à tomada. Sem corrente elétrica não há outro meio de informar o que deve ser feito.
            <Title>=> Clock</Title>
            Para que tudo funcione em sincronia, há o <Bold bolder>clock</Bold> que controla o ritmo das operações e evita que tudo entre em colapso. Na arquitetura MIPS, que veremos a seguir, pode ser que ele não seja tão vital, mas em uma arquitetura com <Bold>pipeline</Bold> ele é necessário para não se desorganizar a ordem dos processos. O <Bold>clock</Bold> é a propriedade que você vê quando vai comprar um <Bold>notebook</Bold> e está escrito “processador de 3GHz”, por exemplo. Ele é a frequência em <Hyperlink to="https://pt.wikipedia.org/wiki/Hertz" info="Unidade de medida de ciclos por segundo">Hertz</Hyperlink> de quantos ciclos de instrução podem ser feitos por segundo. Um ciclo de instrução é o uso de todos os componentes para executar uma instrução. No caso de uma arquitetura com pipeline, em que mais de uma instrução será executada ao mesmo tempo, o tempo do clock será 5 vezes o tempo da fase de execução mais longa. 
            <title>=> E/S</title>
            Por fim, há os “órgãos” externos do computador, que são os <Bold bolder>dispositivos E/S</Bold>. Dispositivos de entrada trazem dados do mundo exterior para o computador, como o teclado, o <Bold>mouse</Bold>, as mesas digitalizadoras, a <Bold>webcam</Bold> e o microfone, e dispositivos de saída retornam dados para o usuário, como o monitor, as caixas de som e fones de ouvido, e as impressoras.
            <br><br>Eles possuem um <Hyperlink to="" info="Armazenamento temporário usado para transmitir dados de um dispositivo a outro regulando a velocidade de leitura e escrita">buffer</Hyperlink> para manter a sincronia entre os dois dispositivos e um módulo E/S, já que usam-se diferentes velocidades de transmissão. Agora, um pouco de história.
            <br><br>Nos primeiros computadores, o processador supervisionava diretamente os dispositivos E/S, o que o deixava mais ocupado do que deveria. Então, introduziu-se um “gerente” para que o processador tenha apenas o trabalho de armazenar o dado do buffer na memória e conversar com o gerente e não tenha que lidar com cada problema que apareça com os dispositivos E/S. Só que primeiramente o processador ficava o tempo todo esperando por uma manifestação do gerente. Agora, o gerente que iria interromper o processador quando necessário. Ou seja, antes o chefe corria atrás do gerente, agora o gerente corre atrás do chefe. Quando chega interrupção, os dados do processo atual são guardados, o processador realiza a operação de E/S, e depois retoma-se à operação anterior.
            <br><br>Não fazia sentido o processador ter o trabalho de armazenar o dado do buffer E/S na memória a cada operação, então ligou-se os dispositivos E/S com a memória através de um “gerente dos gerentes” (controlador DMA). Como o material dos barramentos não é muito barato, em muitas arquiteturas havia um “disputa” para usar o único barramento que ligava o processador, a memória, o DMA e os módulos (gerentes) de E/S, então colocou-se um barramento ligando o DMA e os gerentes dos dispositivos E/S, como se o controlador fosse um segundo processador. Dessa forma, se houver um único barramento, ele liga o processador, o gerente geral de E/S e a memória.
            <br><br>Trazendo para o mundo real: quando você digita algo no teclado, os bits que formam os caracteres são enviados pelo fio que liga o teclado ao gabinete, que são escritos no buffer (memória auxiliar do teclado). O módulo (“gerente”) do teclado lê o buffer e comunica ao DMA(“gerente do gerente”) qual caracter foi digitado. O DMA escreve o dado na memória principal (curto prazo) e avisa o processador (o “chefe”) que chegou uma tarefa muito importante (escrever seu caracter). O processador para o que está fazendo, guarda os dados que estava usando, busca seu caracter na memória cache(auxiliar da principal), executa a operação de escrita do seu caracter, e só assim retoma ao que estava fazendo.
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
