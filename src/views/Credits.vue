<template>
  <div class="credits">
    <Title big>Créditos</Title>
    <p>
      Redação: Marcela Tiemi Shinzato <br>
      Design: Rafael Tavares Oliveira <br>
      Edição de Arte: Gustavo Akira Hirakawa <br>
      Monografia: Yago Poletto Salgado <br>
    </p>
    <hr>
    <br>
      <p>Professor Orientador: Rodolfo Ipolito Meneguette</p>
    <hr>
    <br>
    <Hyperlink class="padd-it">Acesse aqui a monografia via e-mail USP</Hyperlink>
    <p>Trabalho realizado como parte da matéria de Organização e Arquitetura de Computadores na <img src="../assets/usp-logo-3.png" alt="USP"> <img src="../assets/ICMC.png" alt="ICMC"> utilizando <img src="../assets/Vue-logo-001.svg" alt="Vue"> e <img src="../assets/aseprite.png" alt="Aseprite"></p>
    <Bold bolder>Grato por acessar nosso site!</Bold>
  </div>
</template>

<script>
import Title from '@/components/Title';
import Hyperlink from '@/components/Hyperlink';
import Bold from '@/components/Bold'

export default {
  components: {
		Hyperlink,
    Title,
    Bold
	}
}
</script>

<style scoped>
  *{
    color: greenyellow;
    font-size: 1.3em;
  }
  *:focus{
    outline: none;
  }
  *::-moz-focus-inner{
    outline: none;
  }
  *::selection{
        background-color: green;
        color: white;
  }
  .credits{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 80px;
  }
  hr{
    width: 90%;
  }
  p{
    padding: 15px;
  }
  .padd-it{
    padding: 25px;
  }
  img{
    max-width: 150px;
    box-shadow: 3px 3px 0 rgb(78, 78, 78);
  }
</style>