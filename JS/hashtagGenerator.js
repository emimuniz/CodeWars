const generateHashTags = (string) => {
    let stringTrimAux = string.replace(/\s/g, '')
    if(stringTrimAux && stringTrimAux.length < 140 && string != ' '){
        let stringCapitalizeLetter = string.replace(/\w\S*/g, capitalizeFirstLetter)
        let stringTrim = `#${stringCapitalizeLetter.replace(/\s/g, '')}`
        return `${stringTrim}`    
    }

    return false
     
}

const capitalizeFirstLetter = (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
}


//Outra alternativa
function generateHashtag (str) {
  return str.length > 140 || str === '' ? false :
    '#' + str.split(' ').map(capitalize).join('');
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
