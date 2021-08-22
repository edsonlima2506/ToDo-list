let BtnCriarTarefa = document.getElementById("criar-tarefa");
let listaDeTarefas = document.getElementById("lista-tarefas");
let textoInput = document.getElementById("texto-tarefa");
BtnCriarTarefa.addEventListener("click", adicionaTarefa);
function adicionaTarefa (){
   let tarefa = document.createElement("li");
   tarefa.innerText = textoInput.value;
   tarefa.className = "itemLista";
   tarefa.id = textoInput.value;
   tarefa.addEventListener("click", trocaBg);
   listaDeTarefas.appendChild(tarefa);
   textoInput.value = "";
}
function trocaBg (eventoDeOrigem) {
    let itemClicado = eventoDeOrigem.target.id;
    document.getElementById(itemClicado).style.backgroundColor = "rgb(128, 128, 128)";
} 
