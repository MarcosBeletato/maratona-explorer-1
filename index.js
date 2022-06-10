const elementoResposta = document.querySelector("#resposta");
const inputResposta = document.querySelector("#inputResposta");
const buttonPerguntar = document.querySelector("#buttonPerguntar");
const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim."
]

function fazerPergunta() {
  
  //testar input vazio
  if (inputResposta.value == "" || !inputResposta.value.endsWith("?")) {
    alert ("Por favor, digite uma pergunta.");
    return;
  }

  buttonPerguntar.setAttribute("disabled", true);

  //gerar número aleatório
  const numeroAleatorio = Math.floor(Math.random() * respostas.length);
  const resposta = respostas[numeroAleatorio];

  //escrever resposta na página
  elementoResposta.innerHTML = `<div> ${inputResposta.value} </div> ${resposta}`;  // template string
  elementoResposta.style.opacity = 1;
  
  //fazer a resposta desaparecer
  setTimeout(function(){
    elementoResposta.style.opacity = 0;
    buttonPerguntar.removeAttribute("disabled");
  }, 3000)
}


