//Arquivo JS - Formulario de inclusao de novos pacientes no HTML

var botaoAdicionar = document.querySelector("#adicionar-paciente");

//previne que o padrao do FORM ocorra(padrao do botao: recarrega pag, limpa form, enviar dados)
botaoAdicionar.addEventListener("click",function(event){
  event.preventDefault();

//passo a passo para adicionar um novo paciente na tabela:
// 1 - pegar os dados do FORM
// 2 - criando TR
// 3 - criando os TDs
// 4 - preenchendo os TDs com os valores que trazemos do FORM
// 5 - colocar os TDs dentro do TR
// 6 - trazer o TR criado para a tabela que ja existia dentro do HTML
// Assim um novo pacinete foi criado a partir do codigo JavaScript

// traz o formulario do mundo html para o mundo JS
  var form = document.querySelector("#form-adiciona");

//chama funcao passando o form
// vou declarar uma variavel paciente que vai ser o meu objeto paciente
  var paciente = obtemPacienteDoFormulario(form);

// agora que eu tenho os dados do mundo html no JS, eu tenho que mandar do JS
// para o mundo html - criar uma nova linha na minha tabela no HTML(Um paciente é Uma TR com 5 TDs)

//aplicando o CSS do formulario para input invalido e nao montando o
//isNaN é uma funçao para verificar se o conteudo é numerico
   if (isNaN(paciente.imc)){
//    pacienteTr.classList.add("paciente-invalido");
       console.log("Paciente inválido, náo sera incluido uma nova linha na lista: ", paciente.imc);
       var mensagemErro = document.querySelector("#mensagem-erro");
       mensagemErro.textContent = "Paciente inválido, náo sera incluido uma nova linha na tabela: " + paciente.imc;
       return;
   }

   adicionaPacienteNaTabela(paciente);

   // limpar os campos digitados do formulario
   form.reset();

}); // fim do botaoAdicionar

function adicionaPacienteNaTabela(paciente){
  //*** CRIA A TR E A TD
  var pacienteTr = montaTr(paciente);
  // pegar a tabela de pacientes do HTML e trazer para o JS
  var tabela = document.querySelector("#tabela-pacientes");
  //usar o appendChild para colocar o TR dentro do tbody(tabela)
    tabela.appendChild(pacienteTr);

}

// pela value, voce traz o valor dos dados digitados no form para var do js
// tudo isso abaixo sao dados do paciente, o que representa algo no mundo real,
// tem caracteristicas em comum, e isso chamamos de objeto, no caso o OBJETO abaixo é o paciente
function obtemPacienteDoFormulario(form){

//objeto paciente(caracteristicas do paciente: nome, peso, altura, etc.)
    var paciente = {
      nome: form.nome.value,
      peso: form.peso.value,
      altura: form.altura.value,
      gordura: form.gordura.value,
      imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;

}

// definindo a funçao monta TR - melhoria na refatoracao e organizaçao do codigo
function montaTr(paciente){
  //criar uma TR(linha da tabela), ja que eu quero uma nova linha da tabela
    var pacienteTr = document.createElement("tr");

  // adicionar a classe paciente a minha variavel pacienteTr
    pacienteTr.classList.add("paciente");

  //depois de ter as TDs preenchidas, colocar as TDs(filhas), dentro da TR(pai)
  //colocar um elemente filho dentro do elemento pai: appendChild
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

//definindo a funçao monta TD - economia de 15 linhas na refatoraçao do codigo
function montaTd(dado,classe){
  var td = document.createElement("td");
  //colocar o dado digitado dentro da TD
  td.textContent =  dado;
  td.classList.add(classe);

  return td;
}
