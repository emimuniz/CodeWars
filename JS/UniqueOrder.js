//Exercicio: https://www.codewars.com/kata/54e6533c92449cc251001667


var uniqueInOrder=function(iterable){
    let element = [];
    for (let index = 0; index < iterable.length; index++) {
        if(iterable[index] != iterable[index -1])
            element.push(iterable[index]);
        
    }

  return element
}
