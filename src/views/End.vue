<template>
    <TextCard>
        <NavButton prev='/cerebro-como'></NavButton>
        <Title>Agora você sabe!</Title>
        <Content>
            Com essa pequena leitura você aprendeu que:
<br><span class="emoji">💡</span> Um aparelho eletrônico requer corrente elétrica para informar a cada componente o que deve ser feito
<br><span class="emoji">💻</span> A RAM é um circuito integrado, portanto se você tirar a alimentação do computador, os programas que estavam em execução são perdidos
<br><span class="emoji">🗃</span> O HD e SSD são discos magnéticos e as informações continuam armazenadas mesmo sem energia elétrica
<br><span class="emoji">📝</span> As linguagens de programação em alto nível foram criadas transformando texto em sinais altos e baixos de corrente elétrica
<br><span class="emoji">📨</span> Mesmo na arquitetura mais simples, são necessárias 5 fases de execução da instrução
<br>Agora você sabe como funciona seu computador. Esperamos que a leitura tenha sido proveitosa e agradecemos a visita.
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
	.emoji{
		font-size: 2em;
	}
</style>
