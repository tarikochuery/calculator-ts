const numericKeysArray = document.getElementsByClassName('numeric') as HTMLCollectionOf<HTMLButtonElement>
const calculatorScreen = document.getElementById('screen-value') as HTMLParagraphElement
 
let screenValue : string = calculatorScreen.innerText

const concatScreenValue = (value: string | number) : void => {
  if (screenValue.length >= 12) return

  if (typeof value === `number`) {
    screenValue === '0' ? calculatorScreen.innerText = '' + value.toString() : calculatorScreen.innerText = screenValue + value.toString()
    screenValue = calculatorScreen.innerText
    return
  }

    screenValue === '0' ? calculatorScreen.innerText = '' + value.toString() : calculatorScreen.innerText = screenValue + value.toString()
    screenValue = calculatorScreen.innerText
}

for (let numericKey of numericKeysArray){
  numericKey.addEventListener('click',() => concatScreenValue(numericKey.innerText))
}
