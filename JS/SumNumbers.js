//Exercicio: https://www.codewars.com/kata/54e6533c92449cc251001667

var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    let total = 0;
    let resultado = "";
    if(count < 0 ) return `${count}<0`
    else if(count == 0) return `${count}=${count}`
    else{
        for(i = 0; i <= count; i++){
            total+=i;
            i != count ? resultado+=i+"+": resultado+= i
        }
    }

    return `${resultado} = ${total}`
  };

  return SequenceSum;

})();
