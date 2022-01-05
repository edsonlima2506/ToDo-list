let BtnCriarTarefa = document.getElementById("criar-tarefa");
let listaDeTarefas = document.getElementById("lista-tarefas");
let textoInput = document.getElementById("texto-tarefa");
let BtnApagarTudo = document.getElementById("apaga-tudo");
let BtnApagarCompletos = document.getElementById("remover-finalizados");
let BtnDeletaSelecionado = document.getElementById("remover-selecionado");
let BtnSalvar = document.getElementById("salvar-tarefas");
let ids = [];

BtnCriarTarefa.addEventListener("click", adicionaTarefa);
BtnApagarTudo.addEventListener("click", apagaTudo);
BtnApagarCompletos.addEventListener("click", apagaCompletos);
BtnDeletaSelecionado.addEventListener("click", removeSelecionado);
BtnSalvar.addEventListener("click", salvaLista);

// let listaSalva = JSON.parse(localStorage.getItem("lista"));
// window.onload = function() {
//     let lista = JSON.parse(localStorage.getItem("lista"));
//     listaDeTarefas.innerHTML = lista;
//   };
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
function removeSelecionado () {
    let remover = document.getElementsByName("selecionado");
    listaDeTarefas.removeChild(remover[0]);
    console.log(remover);
}
function salvaLista () {
    localStorage.setItem("lista", JSON.stringify(document.getElementsByClassName("itemLista")));
}
todoList = document.getElementById("lista-tarefas");
todoItem = document.getElementsByClassName("itemLista");
function showList() {
    // mostra a lista de todo
    if (todoList.length > 0) {
      let listaSalva = `<ul>
        ${todoList.map(todoItem => `<li data-id="${todoItem.id}</li>` )}
        </ul>`;
      todoOutput.innerHTML = listaSalva;
    } else {
      listaDeTarefas.innerHTML = '';
    }
  }
  window.addEventListener('load', () => {
    // guarda em uma variável o elemento tasks-output
    if (localStorage.getItem('lista')) {
      todoList = JSON.parse(localStorage.getItem('lista'));
      showList();
    } else {
      todoList = [];
    }
  
    if (todoList.length === 0) {
      todoOutput.innerHTML = 'Nenhuma tarefa cadastrada';
    }});