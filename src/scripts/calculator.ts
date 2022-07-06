const numericKeysArray = document.getElementsByClassName('numeric') as HTMLCollectionOf<HTMLButtonElement>
const calculatorScreen = document.getElementById('screen-value') as HTMLParagraphElement
const operatorKeysArray = document.getElementsByClassName('operator') as HTMLCollectionOf<HTMLButtonElement>
const clearButton = document.getElementById('clear') as HTMLButtonElement


interface ICalculatorFactory {
  sum: (value1: string, value2: string) => void
  minus: (value1: string, value2: string) => void
  times: (value1: string, value2: string) => void
  divide: (value1: string, value2: string) => void
}

let screenValue : string = calculatorScreen.innerText
let screenValueAfterSelectOperator: string = '0'
let isOperatorSelected: boolean = false
let selectedOperation: Function

const calculatorFactory: ICalculatorFactory = {
  sum: (value1: string, value2: string): void => {
    let result: number = Number(value1) + Number(value2)
    calculatorScreen.innerText = result.toString()
  },
  minus: (value1: string, value2: string): void => {
    let result: number = Number(value1) - Number(value2)
    calculatorScreen.innerText = result.toString()
  },
  times: (value1: string, value2: string): void => {
    let result: number = Number(value1) * Number(value2)
    calculatorScreen.innerText = result.toString()
  },
  divide: (value1: string, value2: string): void => {
    let result: number = Number(value1) / Number(value2)
    calculatorScreen.innerText = result.toString()
  }
}

const concatScreenValue = (value: string | number) : void => {
  if (screenValue.length >= 12) return

  if (isOperatorSelected){
    if (typeof value === `number`) {
      screenValueAfterSelectOperator === '0' ? calculatorScreen.innerText = '' + value.toString() : calculatorScreen.innerText = screenValueAfterSelectOperator + value.toString()
      screenValueAfterSelectOperator = calculatorScreen.innerText
      return
    }
  
    screenValueAfterSelectOperator === '0' ? calculatorScreen.innerText = '' + value.toString() : calculatorScreen.innerText = screenValueAfterSelectOperator + value.toString()
    screenValueAfterSelectOperator = calculatorScreen.innerText
    return

  } else {
    if (typeof value === `number`) {
      screenValue === '0' ? calculatorScreen.innerText = '' + value.toString() : calculatorScreen.innerText = screenValue + value.toString()
      screenValue = calculatorScreen.innerText
      return
    }
  
    screenValue === '0' ? calculatorScreen.innerText = '' + value.toString() : calculatorScreen.innerText = screenValue + value.toString()
    screenValue = calculatorScreen.innerText
    return
  }

}

const handleClickOperator = (event: MouseEvent): void => {
  let button = event.target as HTMLButtonElement

  if (button.id === 'equal') {
    selectedOperation(screenValue, screenValueAfterSelectOperator)
    isOperatorSelected = false
    screenValue = calculatorScreen.innerText
    screenValueAfterSelectOperator = '0'
    return
  }

  // button.classList.toggle('selected')

  isOperatorSelected = true
  let id: string = button.id

  selectedOperation = calculatorFactory[id]
}

const clearScreen = (): void => {
  calculatorScreen.innerText = '0'
  screenValue = '0'
  screenValueAfterSelectOperator = '0'
}

for (let numericKey of numericKeysArray){
  numericKey.addEventListener('click',() => concatScreenValue(numericKey.innerText))
}

for (let operatorKey of operatorKeysArray){
  operatorKey.addEventListener('click', (e) => handleClickOperator(e))
}

clearButton.addEventListener('click', clearScreen)