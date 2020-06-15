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
      <p>Referências:</p>
      <ul>
        <li><p>BRUSCHI, S. M. Arquitetura MIPS: caminho de dados (Monociclo). 29 slides. Disponível em: <Hyperlink to="https://edisciplinas.usp.br/course/view.php?id=74003">https://edisciplinas.usp.br/course/view.php?id=74003</Hyperlink>. Acesso em 26 abr. 2020.</p></li>
        
        <li><p>BRUSCHI, S. M. Arquitetura MIPS: unidade de controle (Monociclo). 15 slides. Disponível em: <Hyperlink to="https://edisciplinas.usp.br/course/view.php?id=74003">https://edisciplinas.usp.br/course/view.php?id=74003</Hyperlink>. Acesso em 26 abr. 2020.</p></li>
        
        <li><p>COE1502(MIPS2000) Architecture Instruction Set. Disponível em: <Hyperlink to="http://people.cs.pitt.edu/~don/coe1502/Reference/InstructionSet.html">http://people.cs.pitt.edu/~don/coe1502/Reference/InstructionSet.html</Hyperlink>. Acesso em 26 abr. 2020.</p></li>
        
        <li><p>PATTERSON, D. A.; HENNESSY, J. L. Computer organization and design. Elsevier, 2005.</p></li>

        <li><p>BRUSCHI, S. M. Entrada e saída. 82 slides. Disponível em: <Hyperlink to="https://edisciplinas.usp.br/course/view.php?id=74003">https://edisciplinas.usp.br/course/view.php?id=74003</Hyperlink>. Acesso em 12 jun. 2020.</p></li>

        <li><p>BRUSCHI, S. M. Hierarquia de memória - Memória Cache. 21 slides. Disponível em: <Hyperlink to="https://edisciplinas.usp.br/course/view.php?id=74003">https://edisciplinas.usp.br/course/view.php?id=74003</Hyperlink>. Acesso em 12 jun. 2020.</p></li>
        
        <li><p>BRUSCHI, S. M. Hierarquia de memória - Memória Cache (continuação). 33 slides. Disponível em: <Hyperlink to="https://edisciplinas.usp.br/course/view.php?id=74003">https://edisciplinas.usp.br/course/view.php?id=74003</Hyperlink>. Acesso em 12 jun. 2020.</p></li>
      </ul>
    <hr>
    <br>
    <Hyperlink class="padd-it" to="https://docs.google.com/document/d/1Mg7Yjlxny92MZmMPOyqJmufax10NOqWYuQ87sdDK1R4/edit?usp=sharing">Acesse aqui a monografia via e-mail USP</Hyperlink>
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
  li *{
    font-size: 0.75em;
  }
  .padd-it{
    padding: 25px;
  }
  img{
    max-width: 150px;
    box-shadow: 3px 3px 0 rgb(78, 78, 78);
  }
</style>