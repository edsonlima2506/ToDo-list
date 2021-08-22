let BtnCriarTarefa = document.getElementById("criar-tarefa");
let listaDeTarefas = document.getElementById("lista-tarefas");
let textoInput = document.getElementById("texto-tarefa");
let BtnApagarTudo = document.getElementById("apaga-tudo");
BtnCriarTarefa.addEventListener("click", adicionaTarefa);
BtnApagarTudo.addEventListener("click", apagaTudo);
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
        }
    }
    let itemClicado = eventoDeOrigem.target.id;
    document.getElementById(itemClicado).style.backgroundColor = "rgb(128, 128, 128)";
}
function completaTarefa (eventoDeOrigem) {
   if (eventoDeOrigem.target.className == "itemLista completed") {
    eventoDeOrigem.target.className = "itemLista";
   } else {
    eventoDeOrigem.target.className = "itemLista completed";
   }
}
function apagaTudo () {
   listaDeTarefas.innerHTML = "";
}
