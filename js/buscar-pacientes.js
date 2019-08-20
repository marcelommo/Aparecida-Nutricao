var botaoAdicionar = document.querySelector("#buscar-paciente");

botaoAdicionar.addEventListener("click", function(){
  console.log("Buscando Pacientes");

  var xhr = new XMLHttpRequest()
//abrindo conexao - configuranco a requisicao que vc vai enviar
  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

//carrega os dados de outro site para o mundo do JS
  xhr.addEventListener("load", function(){
    var resposta = xhr.responseText;
    console.log(resposta);
    console.log(typeof resposta);

//traduz a resposta para o JavaScript - tecnica chamada AJAX (requisicao no javascript de modo assincrono(sem travar o JS))
    var pacientes = JSON.parse(resposta);

    pacientes.forEach( function(paciente){
        adicionaPacienteNaTabela(paciente);
    });

  });
  xhr.send()
});
