const tglDark = document.querySelector("#toggle--dark");
const body = document.body
const imagem = document.querySelector("img");

// Aqui tentamos resgatar o tema armazenado anteriormente
let temaPreferido = localStorage.getItem("tema");

tglDark.addEventListener("change", alterarTema)

function carregarTema() {
    if (temaPreferido === "dark") {
        body.classList.add("dark");
        imagem.setAttribute("src", "img/noite.jpg");

    } else {
        body.classList.remove("dark");
        imagem.setAttribute("src", "img/dia.jpg")
    }
}

function alterarTema() {
    //Existe a classe Dark no body?

    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        imagem.setAttribute("src", "img/dia.jpg")
        localStorage.setItem("tema", "")

    } else {
        body.classList.add("dark");
        imagem.setAttribute("src", "img/noite.jpg");
        localStorage.setItem("tema", "dark")

    }
}





// setItem("Chave", valor) gravar um valor no LocalStorage
// getItem("Chave") resgata um valor do LocalStoraga
// removeItem("chave") remove um único valor do LocalStorage
// clear() limpa todo local storage do seu domínio

carregarTema()