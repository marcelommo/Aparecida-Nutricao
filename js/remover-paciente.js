// selecionar todos os pacientes que tem a classe pacientes
//var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
  event.target.parentNode.classList.add("fadeOut");

  setTimeout(function(){
      event.target.parentNode.remove();
  },500);
});






//tabela.addEventListener("dblclick", function(){
//  var alvoEvento = event.target;
//  var paiDoAlvo = alvoEvento.parentNode; //TR = paciente - quem queremos remover
//  paiDoAlvo.remove();
//});

//fazer um for each pra ser simples e usa-se uma funçao anonima
//pacientes.forEach(function(paciente){
//  paciente.addEventListener("dblclick", function(){
//    console.log("Fui clicado por um duplo clique");
/// this é o dono do evento, quem chamou o evento
//    this.remove();
//  });
//});
