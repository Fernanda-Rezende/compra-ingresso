let totalPista = 100;
let totalSuperior = 200;
let totalInferior = 400;

function comprar () {
    //recuperar o tipo de ingresso
    let tipoIngresso = document.getElementById('tipo-ingresso').value;

    //recupera a quantidade
    let quantidade = document.getElementById('qtd').value;

    //recupera a quantidade total de ingressos
    let qtdPista = document.getElementById('qtd-pista');
    let qtdSuperior = document.getElementById('qtd-superior');
    let qtdInferior = document.getElementById('qtd-inferior');

    while (tipoIngresso.includes('pista')) {
        if (totalPista < quantidade) {
            alert('Quantidade de ingressos indisponíveis para Pista!');
        } else {
            alert('Compra realizada com sucesso!');
            totalPista = totalPista - quantidade;
            qtdPista.textContent = totalPista;
        }
        break;
    }

    while (tipoIngresso.includes('superior')) {
        if (totalSuperior < quantidade) {
            alert('Quantidade de ingressos indisponíveis para Cadeira Superior!'); 
        } else {
            alert('Compra realizada com sucesso!');
            totalSuperior = totalSuperior - quantidade;
            qtdSuperior.textContent = totalSuperior;
        }
        break;
    }

    while (tipoIngresso.includes('inferior')) {
        if (totalInferior < quantidade) {
            alert('Quantidade de ingressos indisponíveis para Cadeira Inferior!');
        } else {
            alert('Compra realizada com sucesso!');
            totalInferior = totalInferior - quantidade;
            qtdInferior.textContent = totalInferior;
        }
        break;
    }

    document.getElementById('qtd').value = '';

}

