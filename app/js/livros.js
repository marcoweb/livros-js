let livros = [
    {'id': 1, 'titulo': 'Assassinato no Expresso do Oriente', 'genero': 'Policial'}
]

function loadLivros() {
    const tableLivrosItems = document.querySelector('#tblLivros').querySelector('tbody');
    tableLivrosItems.innerHTML = '';
    livros.forEach((item) => {
        let tdId = document.createElement('td');
        tdId.appendChild(document.createTextNode(item['id']));
        let tdTitulo = document.createElement('td');
        tdTitulo.appendChild(document.createTextNode(item['titulo']));
        let tdGenero = document.createElement('td');
        tdGenero.appendChild(document.createTextNode(item['genero']));
        let tr = document.createElement('tr');
        tr.appendChild(tdId);
        tr.appendChild(tdTitulo);
        tr.appendChild(tdGenero);
        tableLivrosItems.appendChild(tr);
    });
}

function addLivro(livro) {
    if(livro['id'] == null) {
        livro['id'] = livros[livros.length - 1]['id'] + 1;
    }
    livros.push(livro);
    loadLivros();
}

document.querySelector('#btnSalvar').addEventListener('click', () => {
    let txtTitulo = document.querySelector('#titulo');
    let txtGenero = document.querySelector('#genero');
    let livro = {
        'id' : null,
        'titulo': txtTitulo.value,
        'genero' : txtGenero.value
    }
    addLivro(livro);
});

loadLivros();