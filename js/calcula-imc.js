//funçao que calcula o IMC e retorna o valor com apenas 2 casas decimais
function calculaImc(peso,altura){

  //declarando validadores
  var pesoEhValido = true;
  var alturaEhValido = true;
  var imc = 0;

  //valida o peso inputado pelo usuário
  if(peso <= 0 || peso >= 500){
    pesoEhValido = false;
    imc = "Peso Inválido: " + peso;
//    paciente.classList.add("paciente-invalido");
    return imc;
  }

  //valida a altura inputada pelo usuário
  if(altura <= 1 || altura >= 2.99){
    alturaEhValido = false;
    imc = "Altura Inválida: " + altura;
//    paciente.style.backgroundColor = "lightcoral";
    return imc;
  }

  if(alturaEhValido && pesoEhValido){
    imc = peso / (altura * altura);
    return imc.toFixed(2);
  }


}

// como o calculo sao para duas coisas diferentes na tela(html fixo e novo input do Formulario)
// a aplicação do CSS ficou em cada um dos arquivos JS pela variavel NaN
