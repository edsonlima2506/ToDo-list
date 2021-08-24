let BtnCriarTarefa = document.getElementById("criar-tarefa");
let listaDeTarefas = document.getElementById("lista-tarefas");
let textoInput = document.getElementById("texto-tarefa");
let BtnApagarTudo = document.getElementById("apaga-tudo");
let BtnApagarCompletos = document.getElementById("remover-finalizados");
let BtnSalvarTarefas = document.getElementById("salvar-tarefas");
let BtnDeletaSelecionado = document.getElementById("remover-selecionado");
let ids = [];

BtnCriarTarefa.addEventListener("click", adicionaTarefa);
BtnApagarTudo.addEventListener("click", apagaTudo);
BtnApagarCompletos.addEventListener("click", apagaCompletos);
BtnSalvarTarefas.addEventListener("click", salvaTarefas);
BtnDeletaSelecionado.addEventListener("click", removeSelecionado);

function adicionaTarefa (){
   let tarefa = document.createElement("li");
   tarefa.innerText = textoInput.value;
   tarefa.className = "itemLista";
   tarefa.id = textoInput.value;
   tarefa.addEventListener("click", trocaBg);
   tarefa.addEventListener("dblclick", completaTarefa);
   listaDeTarefas.appendChild(tarefa);
   textoInput.value = "";
}
function trocaBg (eventoDeOrigem) {
    let itensDaLista = document.getElementsByClassName("itemLista")
    for (let i = 0; i < itensDaLista.length; i += 1){
        let identificador = itensDaLista[i].id;
        let bgColor = document.getElementById(identificador).style.backgroundColor;
        if (bgColor == "rgb(128, 128, 128)") {
            document.getElementById(identificador).style.backgroundColor = "white";
            document.getElementById(identificador).setAttribute("name", "");
        }
    }
    let itemClicado = eventoDeOrigem.target.id;
    document.getElementById(itemClicado).style.backgroundColor = "rgb(128, 128, 128)";
    document.getElementById(itemClicado).setAttribute("name", "selecionado");
}
function completaTarefa (eventoDeOrigem) {
   if (eventoDeOrigem.target.className === "itemLista completed") {
    eventoDeOrigem.target.className = "itemLista";
   } else {
    eventoDeOrigem.target.className = "itemLista completed";
    ids.push(eventoDeOrigem.target.id);
   }
}
function apagaTudo () {
   listaDeTarefas.innerHTML = "";
}
function apagaCompletos () {
    for (let i = 0; i < ids.length; i++){
        let completo = document.getElementById(ids[i]);
        listaDeTarefas.removeChild(completo);
    }
    ids = [];
}
function salvaTarefas () {
   
}
function removeSelecionado () {
    let remover = document.getElementsByName("selecionado");
    listaDeTarefas.removeChild(remover[0]);
    console.log(remover);
}