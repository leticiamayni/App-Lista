var listElement = document.querySelector('#app ol');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var itens = JSON.parse(localStorage.getItem('list_itens')) || [];

function renderItens() {
    listElement.innerHTML = '';
    for (i of itens) { //FOR PARA ARRAY
        // i REPRESENTA VETOR
    var iElement = document.createElement('li');
    //CRIAR ELEMENTO LINHA
    var iText = document.createTextNode(i);
    //ATRIBUIR TEXTO

    //---------------- FUNÇÃO EXCLUIR
    //CRIAR ELEMENTO a
    var linkElement = document.createElement('a');

    //ATRIBUIR TEXTO
    var linkText = document.createTextNode('Excluir');
    
    //ATRIBUIR LINK
    linkElement.setAttribute('href', '#');
    
    //PEGAR POSIÇÃO NOS ITENS DENTRO DA ARRAY
    var pos = itens.indexOf(i);
    
    //ATRIBUTOS: CLIQUE E CHAMAR FUNÇÃO CONCATENANDO RESULTADO
    linkElement.setAttribute('onclick', 'deleteItem(' + pos + ')');
    
    //APARENTAR
    linkElement.appendChild(linkText);

    iElement.appendChild(iText);
    iElement.appendChild(linkElement);
    listElement.appendChild(iElement);

    } 
}
//CHAMAR FUNÇÃO PARA RENDERIZAR 
renderItens();

function addItem() {
    var iText = inputElement.value;

    itens.push(iText);
    inputElement.value = '';
    renderItens();
    saveToStorage();
}

function deleteItem(pos) {
    itens.splice(pos, 1);
    renderItens();
    saveToStorage();
}

buttonElement.onclick = addItem;
buttonElement = document.addEventListener('keypress', function(e) {
    if(e.which == 13) {
        addItem();
    //FUNÇÃO ENVIAR COM ENTER //
    }
}, false);

function saveToStorage() {

    localStorage.setItem('list_itens', JSON.stringify(itens));
}