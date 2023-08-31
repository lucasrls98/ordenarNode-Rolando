import rls from "readline-sync"

const propriedadesCSS = [];

function capturarEntradaUsuario() {
    const entrada = (rls.question('Digite uma propriedade de CSS (ou "SAIR" para sair): ')).toUpperCase();
    if (entrada === 'SAIR') {
        exibirPropriedadesOrdenadas();
    } else if (entrada.trim() === '') {
        console.log('Entrada vazia. Digite uma propriedade válida ou "SAIR".');
        capturarEntradaUsuario();
    } else {
        propriedadesCSS.push(entrada);
        capturarEntradaUsuario();
    }
}

function exibirPropriedadesOrdenadas() {
    if (propriedadesCSS.length === 0) {
        console.log('Nenhuma propriedade foi digitada.');
    } else {
        try {
            const propriedadesOrdenadas = propriedadesCSS.sort();
            console.log('Propriedades ordenadas:');
            propriedadesOrdenadas.forEach(propriedade => {
                console.log(propriedade);
            });
        } catch (erro) {
            console.error('Ocorreu um erro ao ordenar as propriedades:', erro.message);
        }
    }
}

capturarEntradaUsuario();