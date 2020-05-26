<template>
    <TextCard>
        <NavButton prev='/cerebro-faz' next='/end'></NavButton>
        <Title>Como funciona o cérebro da máquina?</Title>
        <Content>
            Agora que você já sabe os órgãos e as possíveis ações só falta saber uma coisa: como elas acontecem? Temos de olhar para os componentes do processador. Essa é a vista geral dele, retirada do livro “<Bold>Computer organization and design</Bold>” de David Patterson (Ele criou o MIPS. Não sozinho, é claro.) e John Hennessy. Dependendo das operações desejadas, é preciso alterar a arquitetura.
            <br><img src="@/assets/Arquitetura.png" alt="arquitetura">
            <br><br>Parece confuso, mas vamos ver cada um dos componentes.
            <br><br>Sabe essas instruções que acabamos de ver? Elas ficam armazenadas em ordem na memória principal (“memória de curto prazo”). Sabendo disso, podemos começar a descrever o ciclo de execução de instruções:
            <ol>
                <Title>=> Fase de busca de instrução:</Title>
                <li>Um componente do processador(“cérebro”) chamado contador de programa (PC - <Bold>program counter</Bold>, na imagem) armazena o endereço de memória da próxima instrução a ser executada.</li>
                <li>A unidade de controle (“cérebro do cérebro”) emite um sinal para que esse endereço de memória seja lido e seu conteúdo armazenado no registrador de instrução (<Bold>instruction memory</Bold>, na imagem)</li>
                <li>Esse endereço também é enviado a um somador (<Bold>add</Bold>, na imagem), que é somado com 4 <Bold>bytes</Bold>, já que 1 <Bold>byte</Bold> é 8 <Bold>bits</Bold> e a arquitetura é de 32 <Bold>bits</Bold>. Se não houver instrução de desvio, então esse novo endereço será enviado pelos barramentos até um multiplexador (mux, na imagem), que o enviará de volta para o contador de programa. Assim, a próxima instrução será executada quando essa terminar.</li>

                <Title>=> Fase de busca de registradores e decodificação da instrução:</Title>
                <li>A unidade de controle (“cérebro do cérebro”) emite um sinal para que essa instrução seja lida: dependendo do <Bold>opcode</Bold> sabe-se se é entre registradores, imediata ou de desvio. As que são entre registradores têm <Bold>opcode</Bold> 000000 e as imediatas ou de desvio são diferenciadas pelo próprio <Bold>opcode</Bold>. Assim a unidade de controle pode distinguir quais <Bold>bits</Bold> corresponderão a quais campos da instrução (Agora você sabe como as máquinas conseguem distinguir o que é o que em um mar de 0s e 1s).</li>
                <li>Se for uma instrução de registradores, a unidade de controle envia um sinal para a porta <Bold>RegDst</Bold> (registrador destino) para setar os <Bold>bits</Bold> certos como registrador de saída.</li>
                <li>Se a instrução for imediata, extende-se o sinal de 16 <Bold>bits</Bold> da constante para 32 <Bold>bits</Bold> pois serão feitas operações aritméticas ou lógicas com essa constante, e o MIPS trabalha com valores de 32 <Bold>bits</Bold>. Uma operação com o valor de 16 <Bold>bits</Bold> forneceria um resultado incorreto.</li>
                <li>Se for uma instrução de desvio, a constante de endereço sofre um deslocamento de 2 bits à esquerda pois esse endereço está em 26 <Bold>bits</Bold> e arquitetura MIPS trabalha com endereços de 32 <Bold>bits</Bold>. Os 28 <Bold>bits</Bold> são somados aos 4 <Bold>bits</Bold> mais significativos da próxima instrução, tornando-se 32 <Bold>bits</Bold>. A unidade de controle envia um sinal para a porta <Bold>Jump</Bold> (pulo) para que o próximo endereço do contador de programa seja esse novo endereço calculado.</li>
                <li>Se for uma instrução de ramo(desvio condicional), a unidade de controle envia um sinal para a porta <Bold>Branch</Bold>, que será uma entrada para uma porta lógica E. Se o resultado da subtração entre os dois valores enviados for 0, eles são iguais, e a unidade lógica e aritmética envia um sinal para essa mesma porta E. Como as duas entradas são altas, o multiplexador envia para o próximo multiplexador o endereço calculado em 32 <Bold>bits</Bold>. Como a unidade de controle não enviou um sinal para a porta <Bold>Jump</Bold> (pulo), então o próximo endereço do contador de programa é esse novo endereço de 32 <Bold>bits</Bold>.</li>
                <li>Então busca-se os registradores necessários, e, se for necessário, lê-se o especificador de instrução.</li>
                
                <Title>=> Fase de processamento de dados:</Title>
                <li>Se a instrução for imediata e de memória ou aritmética, a unidade de controle envia um sinal para a porta <Bold>AluSrc</Bold>(fonte da unidade lógica e aritmética), para que a entrada da unidade lógica e aritmética seja a constante previamente extendida na fase anterior.</li>
                <li>Sempre que se for usar a unidade lógica e aritmética, a unidade de controle envia um sinal para a unidade de controle da unidade lógica e aritmética informando qual operação deve ser realizada. Assim a unidade de controle da unidade lógica e aritmética comanda os processos internos de <Bold>bits</Bold> a <Bold>bits</Bold> para realizar a operação desejada</li>
                <li>Se o resultado for zero e a instrução for de desvio condicional, é enviado um sinal para a porta E, como explicado na fase anterior. Se não, simplesmente envia-se o resultado para a próxima fase.</li>

                <Title>=> Fase de acesso à memória:</Title>
                <li>Se a instrução requer escrita de dados na memória, então a unidade de controle emitiu um sinal na porta <Bold>MemWrite</Bold> (escrita na memória) do último decodificador e na porta <Bold>MemtoReg</Bold> (memória para registrador); se a instrução requer leitura de dados da memória, então a unidade de controle emitiu um sinal na porta <Bold>MemRead</Bold> (leitura da memória) do último decodificador.</li>

                <Title>=> Fase de escrita de dados:</Title>
                <li>Com exceção das instruções de desvio, as instruções foram feitas para que algum dado fosse escrito em algum registrador. A unidade de controle emitiu um sinal na porta <Bold>RegWrite</Bold> (escrita em registrador) do primeiro decodificador, então se escreve o dado no registrador de saída.</li>
                <li>Assim termina-se o ciclo de instrução e parte-se para a próxima instrução.</li>
            </ol>
            <br><br>Para ilustrar esse processo, vamos descrever o caminho dos dados de instruções e mostrar esse trajeto na arquitetura: <router-link to="/simulation">Acesse aqui o simulador!</router-link>
        </Content>
        <NavButton prev='/cerebro-faz' next='/end'></NavButton>
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

<style scoped>
    img{
        max-width: 80%;
        margin-left: 10%;
    }
    li{
        margin-left: 5%;
    }
</style>