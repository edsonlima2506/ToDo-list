let BtnCriarTarefa = document.getElementById("criar-tarefa");
let listaDeTarefas = document.getElementById("lista-tarefas");
let textoInput = document.getElementById("texto-tarefa");
BtnCriarTarefa.addEventListener("click", adicionaTarefa);
function adicionaTarefa (BtnCriarTarefa){
   let tarefa = document.createElement("li");
   tarefa.innerText = textoInput.value;
   listaDeTarefas.appendChild(tarefa);
   textoInput.value = "";
}