export function aleatorio(lista) {
const posicao = Math.floor(Math.random()* lista.length);
return lista[posicao];

}

const nomes = ["Fernanda", "Giuliana", "Maria Eduarda", "Marcelo", "Amanda", "Gustavo", "Gabriel"];
const nome = aleatorio(nomes);
