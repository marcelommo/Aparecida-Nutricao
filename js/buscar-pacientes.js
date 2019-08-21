var botaoAdicionar = document.querySelector("#buscar-paciente");

botaoAdicionar.addEventListener("click", function(){
  console.log("Buscando Pacientes");

  var xhr = new XMLHttpRequest()
//abrindo conexao - configuranco a requisicao que vc vai enviar
  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

//carrega os dados de outro site para o mundo do JS
  xhr.addEventListener("load", function(){
  var erroAjax = document.querySelector("#erro-ajax");
    if( xhr.status == 200){
      //se foi ok, ele adiciona a classe invisivel
      erroAjax.classList.add("invisivel");
      var resposta = xhr.responseText;

      //traduz a resposta para o JavaScript - tecnica chamada AJAX (requisicao no javascript de modo assincrono(sem travar o JS))
      var pacientes = JSON.parse(resposta);

      pacientes.forEach( function(paciente){
          adicionaPacienteNaTabela(paciente);
      });

    }else{
      console.log( xhr.status);
      console.log( xhr.responseText);
      //se deu erro ele remove a classe invisivel
      erroAjax.classList.remove("invisivel");
    }

  });
  xhr.send()
});
