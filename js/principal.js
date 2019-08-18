// arquivo JS que trata das informaçoes fixas no HTML5, chama funçao de calculo e
// preenche o campo de IMC com as novas informaçoes

var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

// looping utilizado porque existe mais de 1 paciente no formulario fixo do html
for(var i = 0; i < pacientes.length ; i++){

  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var tdAltura = paciente.querySelector(".info-altura");
  var peso = tdPeso.textContent;
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");

//  var imc = 0;
  var imc = calculaImc(peso,altura);
  tdImc.textContent = imc;

// aplica o CSS para paciente invalido para as infos que ja estao no HTML
  if (isNaN(imc)){
    paciente.classList.add("paciente-invalido");
  }

}
//declarando validadores
//  var pesoEhValido = true;
//  var alturaEhValido = true;

  //valida o peso inputado pelo usuário
//  if(peso <= 0 || peso >= 500){
//    pesoEhValido = false;
//    console.log(peso);
//    tdImc.textContent = "Peso Inválido";
//    paciente.classList.add("paciente-invalido");
//  }

  //valida a altura inputada pelo usuário
//  if(altura <= 1 || altura >= 2.99){
//    alturaEhValido = false;
//    tdImc.textContent = "Altura Inválida";
//    paciente.style.backgroundColor = "lightcoral";
//  }

//  if(alturaEhValido && pesoEhValido){
//    var imc = calculaImc(peso,altura);
//    tdImc.textContent = imc;
//  }

//funçao que calcula o IMC e retorna o valor com apenas 2 casas decimais
//function calculaImc(peso,altura){
//  var imc = 0;

//  imc = peso / (altura * altura);

//  return imc.toFixed(2);
//}
