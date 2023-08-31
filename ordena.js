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