let led = "ligar";

const ligar = () => {
  let btnEnviar = document.getElementById("btnEnviar");
  let imgLampada = document.getElementById("div-lampada");

  if (led == "ligar") {
    imgLampada.src = "img/acesa.jpg";
    imgLampada.alt = "Lampada acesa.";

    btnEnviar.innerHTML = "Apagar";
    led = "apagar";
  } else {
    imglampada.src = "img/apagada.jpg";
    imgLampada.alt = "Lampada apagada";

    btnEnviar.innerHTML = "Acender";
    led = "ligar";
  }
};

const gerarImagem = () => {
  let qtdImagem = document.getElementById("inQtdImg").value;
  let canvas = document.getElementById("canvas");
  canvas.innerHTML = "";
  for (let i = 1; i <= qtdImagem; i++) {
    canvas.innerHTML += `<img class="imagens" id="lampada" src="img/apagada.jpg" alt="Lâmpada">`;
  }
};

const calcular = () => {
  let inValorPedido = document.getElementById("inValorPedido");
  let inPercDesc = document.getElementById("inPercDesc");
  let inValDesc = document.getElementById("inValDesc");
  let inValFinal = document.getElementById("inValFinal");

  if (inValorPedido.value >= 2000) {
    inPercDesc.value = 1.5;
    inValDesc.value = (inValorPedido.value * inPercDesc.value) / 100;
    inValFinal.value = inValorPedido.value - inValDesc.value;
  
} else if (inValorPedido.value >= 1500) {
    inPercDesc.value = 1.0;
    inValDesc.value = (inValorPedido.value * inPercDesc.value) / 100;
    inValFinal.value = inValorPedido.value - inValDesc.value;
  
  }
  if (inValorPedido.value >= 1000) {
    inPercDesc.value = 0.8;
    inValDesc.value = (inValorPedido.value * inPercDesc.value) / 100;
    inValFinal.value = inValorPedido.value - inValDesc.value;
  
  } else if (inValorPedido.value >= 500) {
    inPercDesc.value = 0.5;
    inValDesc.value = (inValorPedido.value * inPercDesc.value) / 100;
    inValFinal.value = inValorPedido.value - inValDesc.value;
  
  }
};

const validaForm = () => {
  let msgErro = document.getElementById("mensagem-erro")
  let inData = document.getElementById("inData").value
  let inCli = document.getElementById("inCli").value
  let inFone = document.getElementById("inFone").value
  let inMail = document.getElementById("inMail").value
  let inProd = document.getElementById("inProd").value
  let inQtd = document.getElementById("inQtd").value
  let inVal = document.getElementById("inVal").value

msgErro.style.display = "block";

//Apagando as informações de erro
msgErro.innerText = "";

//Validação de dados
inData == "" && (msgErro.innerHTML += "Data inválida <br>");
inCli == "" && (msgErro.innerHTML += "Nome do cliente inválido <br>");
inCli.length < 3 && (msgErro.innerHTML += "Nome do cliente com tamanho inválido <br>");
inFone == "" && (msgErro.innerHTML += "Telefone inválido <br>");
inMail == "" && (msgErro.innerHTML += "E-mail inválido <br>");
inMail.length < 6 && (msgErro.innerHTML += "E-mail com tamanho inválido <br>");
inProd == "" && (msgErro.innerHTML += "Produto inválido <br>");
inProd.length < 6 && (msgErro.innerHTML += "Produto com tamanho inválido <br>");
inQtd == "" && (msgErro.innerHTML += "Qntde inválida <br>");
inQtd < 0 && (msgErro.innerHTML += "Qntde negativa! <br>");
inVal == "" && (msgErro.innerHTML += "Valor inválido <br>");
inVal < 0 && (msgErro.innerHTML += "Valor negativo! <br>");

//Mostrar | ocultar erros
msgErro.innerText == ""
? ((msgErro.style.display = "none"), (msgErro.innerText = "Enviado!"))
: ((msgErro.style.display = "block"),msgErro.classList.remove("verde"));

msgErro.innerText == "Enviado!" &&
((msgErro.style.display = "block"),
(msgErro.innerText = "Formulário enviado com sucesso!"),
msgErro.classList.add("verde"));

};
//   switch (true) {
//     case inData == "":
//    msgErro.style.display = "block";
//     msgErro.innerText = "O campo data está vazio!";
//     break;
    
//     case inCli == "":
//       msgErro.style.display = "block";
//        msgErro.innerText = "O campo cliente está vazio!";
//        break;
     
//        case inFone == "":
//         msgErro.style.display = "block";
//          msgErro.innerText = "O campo telefone está vazio!";
//          break;
       
//          case inMail == "":
//    msgErro.style.display = "block";
//     msgErro.innerText = "O campo email está vazio!";
//     break;
  
//     case inProd == "":
//    msgErro.style.display = "block";
//     msgErro.innerText = "O campo produto está vazio!";
//     break;
  
//     case inQtd == "":
//    msgErro.style.display = "block";
//     msgErro.innerText = "O campo quantidade está vazio!";
//     break;
  
//     case inVal == "":
//    msgErro.style.display = "block";
//     msgErro.innerText = "O campo valor está vazio!";
//     break;
  
        
//     default:
//       msgErro.style.display = "block"
//       msgErro.innerText = "Existem campos sem preencher!"
//       break;
//   }
// 


