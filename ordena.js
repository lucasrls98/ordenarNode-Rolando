// Importando a biblioteca readline-sync para ler a entrada dos usuários 
import rls from "readline-sync"

// Array para armazenar as propriedades de CSS digitadas pelo usuário.
const propriedadesCSS = [];


function capturarEntradaUsuario() {
    const entrada = (rls.question('Digite uma propriedade de CSS (ou "SAIR" para sair): ')).toUpperCase(); 
    // Captura a entrada do usuário e a converte para maiúsculas.
    if (entrada === 'SAIR') {
        exibirPropriedadesOrdenadas(); 
        // Se o usuário digitar "SAIR", exibe as propriedades ordenadas.
    } else if (entrada.trim() === '') {
        console.log('Entrada vazia. Digite uma propriedade válida ou "SAIR".');
        capturarEntradaUsuario();
        // Se a entrada estiver vazia ou contiver apenas espaços, pede ao usuário uma entrada válida.
    } else {
        propriedadesCSS.push(entrada);
        // Adiciona a propriedade à lista de propriedades.
        capturarEntradaUsuario();
        // Chama novamente a função para capturar a próxima entrada.
    }
}

function exibirPropriedadesOrdenadas() {
    if (propriedadesCSS.length === 0) {
        console.log('Nenhuma propriedade foi digitada.');
        // Se não houver propriedades, exibe uma mensagem.
    } else {
        try {
            const propriedadesOrdenadas = propriedadesCSS.sort();
            // Ordena as propriedades alfabeticamente.
            console.log('Propriedades ordenadas:');
            propriedadesOrdenadas.forEach(propriedade => {
                console.log(propriedade);
                // Exibe cada propriedade ordenada.
            });
        } catch (erro) {
            console.error('Ocorreu um erro ao ordenar as propriedades:', erro.message);
            // Se ocorrer um erro ao ordenar, exibe uma mensagem de erro.
        }
    }
}

capturarEntradaUsuario();
// Inicia o processo de captura e ordenação das propriedades.