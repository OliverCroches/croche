let carrinho = [];
let total = 0;

function adicionarAoCarrinho(produto, preco) {
    carrinho.push({ produto, preco });
    total += preco;
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const lista = document.getElementById("lista-carrinho");
    lista.innerHTML = "";
    carrinho.forEach(item => {
        const li = document.createElement("li");
        li.textContent = ${item.produto} - R$ ${item.preco.toFixed(2)};
        lista.appendChild(li);
    });

    document.getElementById("total").textContent = Total: R$ ${total.toFixed(2)};
}

document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const contato = document.getElementById("contato").value;

    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    document.getElementById("pix-info").style.display = "block";
    document.getElementById("valorPix").textContent = R$ ${total.toFixed(2)};
});
