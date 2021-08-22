let BtnCriarTarefa = document.getElementById("criar-tarefa");
let listaDeTarefas = document.getElementById("lista-tarefas");
let textoInput = document.getElementById("texto-tarefa");
BtnCriarTarefa.addEventListener("click", adicionaTarefa);
function adicionaTarefa (){
   let tarefa = document.createElement("li");
   tarefa.innerText = textoInput.value;
   tarefa.className = "itemLista"
   listaDeTarefas.appendChild(tarefa);
   textoInput.value = "";
}