var botaoAdicionar = document.querySelector("#adicionar-Llivros");


botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    valida_form();
        function valida_form (){
            if(document.getElementById("vinculo").value == ""|| document.getElementById("titulo").value == "" || document.getElementById("autor").value == ""){
                alert('Campos obrigatorios faltando');
                document.getElementById("vinculo").focus();
                document.getElementById("titulo").focus();
                document.getElementById("autor").focus();
                return false;
            }
            if (document.getElementById("ano").value < 1900 || document.getElementById("ano").value > 2019) {
                alert('Ano de publicaçao não aceito');
                document.getElementById("ano").focus();

                return false;
            }
        }

    var form = document.querySelector("#form-livros");

    var livros = obterLivros(form);

    var livrosLista = montaTrLivros(livros);

    var tabela = document.querySelector("#lista-livros");

    tabela.appendChild(livrosLista);

    form.reset();
});

function obterLivros(form) {

    var livros = {
        vinculo: form.vinculo.value,
        titulo: form.titulo.value,
        autor: form.autor.value,
        ediçao: form.ediçao.value,
        issn: form.issn.value,
        ano: form.ano.value,
        editora: form.editora.value,

    }

    return livros;
}

function montaTrLivros(livros) {
    var livrosLista = document.createElement("tr");
    livrosLista.classList.add("livros");

    livrosLista.appendChild(montaTdLivros(livros.vinculo, "info-vinculo"));
    livrosLista.appendChild(montaTdLivros(livros.titulo, "info-titulo"));
    livrosLista.appendChild(montaTdLivros(livros.autor, "info-autor"));
    livrosLista.appendChild(montaTdLivros(livros.ediçao, "info-ediçao"));
    livrosLista.appendChild(montaTdLivros(livros.issn, "info-issn"));
    livrosLista.appendChild(montaTdLivros(livros.ano, "info-ano"));
    livrosLista.appendChild(montaTdLivros(livros.editora, "info-editora"));

    return livrosLista;
}

function montaTdLivros(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}
