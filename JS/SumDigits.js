//Exercicio: https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript


const SumDigits = (n) => {
    let numeros = n.toString().split('')
    let total = 0
    do {
        total = numeros.reduce((acumulador, valorAtual) => parseInt(acumulador) + parseInt(valorAtual), 0)
        numeros = total.toString().split('')

    } while (numeros.length > 1);

    return total
}

//Outra solução
function digital_root(n) {
  if (n < 10) return n;
  
  return digital_root(
    n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
}
