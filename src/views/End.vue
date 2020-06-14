<template>
    <TextCard>
        <NavButton prev='/cerebro-como'></NavButton>
        <Title>Agora você sabe!</Title>
        <Content>
          <h1>É hora de testar seus novos conhecimentos!</h1>
          <QuestionCard question="Se o computador fosse um organismo, que componente seria o cérebro? Que parte seria os vasos condutores? Em qual parte ficaria a memória de longo prazo?" answer="Processador / Barramento / Memória Secundária"/>
          <QuestionCard question="Por que precisamos ligar o computador na tomada ou deixar o notebook carregado?" answer="Um aparelho eletrônico requer corrente elétrica para informar a cada componente o que deve ser feito." />
          <QuestionCard question="Quanto maior a cache, melhor o desempenho do computador?" answer="Não necessariamente, pois quanto maior a cache, maior o número de dados armazenados, porém maior é o tempo de procura." />
          <QuestionCard question="Se os computadores possuem memória RAM, por que é preciso uma cache?" answer="Porque senão a cada operação seria preciso varrer toda a RAM, o que tornaria os computadores muito lentos." />
          <QuestionCard question="O que acontece com a RAM se você tirar a energia elétrica?" answer="A RAM é um circuito integrado, portanto os programas que estavam em execução são perdidos." />
          <QuestionCard question="O que acontece com o HD se você tirar a energia elétrica?" answer="O HD e SSD são discos magnéticos e as informações continuam armazenadas mesmo sem energia elétrica." />
          <QuestionCard question="Como foram criadas as linguagens de programação?" answer="Transformando texto em sinais altos e baixos de corrente elétrica." />
          <QuestionCard question="Se o computador fosse uma empresa e o processador fosse o chefe, por que ele contrataria supervisores para os dispositivos de entrada e saída?" answer="Um módulo E/S lidaria com os problemas dos dispositivos e um controlador DMA escreveria os dados na memória e só se comunicaria com o processador quando necessário, deixando o processador mais livre para trabalhar em processos que não envolvam entrada e saída." />
          <QuestionCard question="Se você for montar um PC Gamer e encontrar dois processadores com especificações e preços similares, mas um com 3,1GHz e outro com 3,8GHz, qual você escolheria?" answer="Olhando apenas para o clock, quanto maior a frequência, mais operações são executadas no mesmo espaço de tempo, portanto mais rápido será." />
          <QuestionCard question="O que é preciso fazer com uma instrução na arquitetura mais simples?" answer="São necessárias 5 fases de execução da instrução: busca da instrução, busca de registradores e decodificação da instrução, processamento de dados, acesso à memória e escrita de dados. Imagine arquiteturas mais complexas!" />
          Agora você sabe como funciona seu computador. Esperamos que a leitura tenha sido proveitosa, que você tenha acertado todas as perguntas e agradecemos a visita.
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
import QuestionCard from '@/components/QuestionCard.vue';

export default {
    components:{
        Title,
        TextCard,
        Content,
        NavButton,
        // Bold,
        // Hyperlink,
        QuestionCard
    }
}
</script>

<style>
</style>
