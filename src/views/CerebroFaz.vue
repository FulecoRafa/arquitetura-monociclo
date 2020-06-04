<template>
    <TextCard>
        <NavButton prev='/arquitetura-simples' next='/cerebro-como'></NavButton>
        <Title>O que faz o cérebro da máquina?</Title>
        <Content>
            Até aqui vimos a estrutura de um computador, mas o que fazer com ela?
            <br><br>As instruções no MIPS têm 32 <Bold>bits</Bold>(dígitos binários) e se dividem em operações com memória (salvar ou abrir), aritméticas (+,-,*,/), lógicas (&lt;,>,==,!=), e de desvio (mudar a ordem de execução das operações). Todas elas se dividem em imediatas e de registradores.
            <br><br><Bold bolder>Instruções imediatas</Bold> têm formato 6 <Bold>bits</Bold> que descrevem o código da operação, 5 <Bold>bits</Bold> que representam o registrador de dado de entrada, 5 <Bold>bits</Bold> que representam o registrador de dado de saída e 16 <Bold>bits</Bold> que representam o valor constante usado na instrução.
            <Table :info="imediateTable"></Table>
            <br><br><Bold bolder>Instruções de registradores</Bold> têm formato 6 <Bold>bits</Bold> que descrevem o código geral da operação, 5 <Bold>bits</Bold> que representam o primeiro registrador de dado de entrada,  5 <Bold>bits</Bold> que representam o segundo registrador de dado de entrada, 5 <Bold>bits</Bold> que representam o registrador de dado de saída, 5 <Bold>bits</Bold> que representam o deslocamento, e 6 <Bold>bits</Bold> que especificam uma instrução dado um código geral de instrução.
            <Table :info="regTable"></Table>
            <br><br>Temos ainda a instrução de <Bold bolder>desvio</Bold>, com formato 6 <Bold>bits</Bold> de código da operação e 26 <Bold>bits</Bold> de endereço de desvio.
            <Table :info="deviationTable"></Table>
            <br><br>Assim como nas linguagens C, Java, Python etc, há um número muito grande de funções e muitas delas nós mal conhecemos, o mesmo acontece com Assembly. Mostraremos as funções mais usadas, mas gostaríamos de deixar claro que existem outras além dessas. Algumas são chamadas de pseudo-MIPS pois na verdade são combinações de funções “puras”, por exemplo uma multiplicação, que é várias instruções de soma. 
            <br><br>É estranho, mas com pouco mais de 30 funções Assembly é possível escrever todo o universo de Java e C e demais linguagens. Além disso, agora você sabe como foram feitas as linguagens de alto nível: programadores criaram métodos para converter determinadas palavras escolhidas por eles mesmos em palavras Assembly.
            <br><br>A tabela a seguir apresenta as instruções de registradores, com seus nomes mais legíveis para nós humanos, e sua estrutura.
            <Table :info="instructionTable"></Table>
            <br><br>Agora vamos às instruções imediatas. A diferença é que em vez de se trabalhar com valores de 2 registradores de entrada, nestas, um deles é um valor constante já escrito no código da instrução.
            <Table :info="imediateInstructionTable"></Table>
            <br><br>Por fim, as instruções com formato de desvio.
            <Table :info="deviationInstructionTable"></Table>
            <br><br>Para exemplificar o que vimos, vamos transformar um código simples de C em Assembly, e de Assembly para código binário.
            
            <br><br><Coding data="//função que retorna a diferença entre as somas de dados 4 valores
            int exemplo(int a, int b, int c, int d) 
            {
                return (g+h) - (i+j);
            }
            "></Coding>
            <Title>=> C</Title>
            <Coding data="#assumimos que a foi armazenado em $a0, b em $a1, c em $a2 e d em $a3
            #rótulo:
            exemplo:
            #a soma de a e b é armazenada em $t0
            add $t0, $a0, $a1
            #a soma de c e d é armazenada em $t1
            add $t1, $a2, $a3
            #(a+b)-(c+d) é armazenado em $v0
            sub $v0, $t0, $t1
            #fim, retorna para o ponto de onde a função foi chamada
            jr $ra
            #fim do código Assembly
            "></Coding>
            <Title>=> Assembly</Title>
            <Coding data="00000000100001010100000000100000000000001100011101001000001000000000000100001001000100000010001000000011111000000000000000001000"></Coding>
            <Title>=> Bits</Title>
            É “só” isso que acontece para somar dois inteiros. Imagine operações mais complexas!
        </Content>
        <NavButton prev='/arquitetura-simples' next='/cerebro-como'></NavButton>
    </TextCard>
</template>

<script>
import Title from '@/components/Title.vue';
import TextCard from '@/components/TextCard.vue';
import Content from '@/components/Content.vue';
import NavButton from '@/components/NavButton.vue';
import Bold from '@/components/Bold.vue'
// import Hyperlink from '@/components/Hyperlink.vue'
import Table from '@/components/Table.vue';
import Coding from '@/components/Coding.vue';

// Data
import {instructions} from '@/data/instructions.js'
import {imediateInstructions} from '@/data/imediateInstructions.js'


export default {
    components:{
        Title,
        TextCard,
        Content,
        NavButton,
        Bold,
        // Hyperlink,
        Table,
        Coding
    },
    data: ()=>({
        imediateTable: {
            data: [[
                {
                    text: "6: opcode",
                },
                {
                    text: "5: reg. entrada",
                },
                {
                    text: "5: reg. saída",
                },
                {
                    text: "16: constante",
                }
            ]]
        },
        regTable:{
            data:[[
                {
                    text: "6: opcode"
                },
                {
                    text: "5: entr. 1"
                },
                {
                    text: "5: entr. 2"
                },
                {
                    text: "5: saída"
                },
                {
                    text: "5: desloc."
                },
                {
                    text: "6: esp. op."
                }
            ]]
        },
        deviationTable: {
            data: [[
                {
                    text: "6: opcode",
                },
                {
                    text: "26: endereço de desvio",
                }
            ]]
        },
        instructionTable: instructions,
        imediateInstructionTable: imediateInstructions,
        deviationInstructionTable:{
            header:[
                "Nome",
                "Assembly",
                "opcode",
                "endereço de desvio"
            ],
            data:[
                [
                    {
                        text: "pulo"
                    },
                    {
                        text: "j"
                    },
                    {
                        text: "000010"
                    },
                    {
                        text: "endereço"
                    },
                ],
                [
                    {
                        text: "pulo com volta"
                    },
                    {
                        text: "jal"
                    },
                    {
                        text: "000011"
                    },
                    {
                        text: "endereço"
                    },
                ]
            ]
        }
    })
}
</script>

<style scoped>
    code{
        white-space: normal;
    }
</style>
