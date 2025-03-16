const listaAmigos = [];

function adicionarAmigo(){
    document.getElementById("resultado").innerHTML = "";
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    
    if (!nome) {
        alert("Por favor, insira um nome.");
        return;
    }

    listaAmigos.push(nome);
    atualizarLista();
    input.value = "";
    input.focus();
}

function atualizarLista(){
    const listaAmigosElemento = document.getElementById("listaAmigos");

    listaAmigosElemento.innerHTML = "";

    listaAmigos.forEach(nome => {
        const itemAmigo = document.createElement("li");
        itemAmigo.textContent = nome;
        listaAmigosElemento.appendChild(itemAmigo);
    });
}

function sortearAmigo(){
    if (listaAmigos.length === 0) {
        alert("Não há amigos na lista para sortear.");
        return;
    }

    const amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];

    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `O amigo sorteado é: ${amigoSorteado}`;

    limparLista();
}

function limparLista(){
    listaAmigos.length = 0;
    atualizarLista();
}