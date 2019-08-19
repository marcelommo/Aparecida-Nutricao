//procurar por cada letra digitada no campo de filtro pelo evento de digitar(Evento Input)

var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){

  var pacientes = document.querySelectorAll(".paciente");

  for(var i = 0; i < pacientes.lenght; i++){
    var paciente = pacientes[i];
    var tdNome = paciente.querySelector("info-nome");
    var nome = paciente.textContent;
  }

});
