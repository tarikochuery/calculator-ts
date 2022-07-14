import { calculatorFactory, ICalculatorFactory } from "./calculatorFactory"
import { toggleOperatorKeySelection } from "./changeOperatorKeySelection"

const numericKeysArray = document.getElementsByClassName('numeric') as HTMLCollectionOf<HTMLButtonElement>
const operatorKeysArray = document.getElementsByClassName('operator') as HTMLCollectionOf<HTMLButtonElement>
const calculatorScreen = document.getElementById('screen-value') as HTMLParagraphElement
const clearButton = document.getElementById('clear') as HTMLButtonElement
const percentKey = document.getElementById('percent') as HTMLButtonElement

let screenValue : string = calculatorScreen.innerText
let screenValueAfterSelectOperator: string = '0'
export let isOperatorSelected: boolean = false
let selectedOperation: Function

export const changeScreenValue = (value: string) => {
  calculatorScreen.innerText = value
}

const concatScreenValue = (value: string | number) : void => {
  if (screenValue.length >= 12) return

  if (isOperatorSelected){
    if (typeof value === `number`) {
      screenValueAfterSelectOperator === '0' ? changeScreenValue('' + value.toString()) : changeScreenValue(screenValueAfterSelectOperator + value.toString())
      screenValueAfterSelectOperator = calculatorScreen.innerText
      return
    }
  
    screenValueAfterSelectOperator === '0' ? changeScreenValue('' + value.toString()) : changeScreenValue(screenValueAfterSelectOperator + value.toString())
    screenValueAfterSelectOperator = calculatorScreen.innerText
    return

  } else {
    if (typeof value === `number`) {
      screenValue === '0' ? changeScreenValue('' + value.toString()) : changeScreenValue(screenValue + value.toString())
      screenValue = calculatorScreen.innerText
      return
    }
  
    screenValue === '0' ? changeScreenValue('' + value.toString()) : changeScreenValue(screenValue + value.toString())
    screenValue = calculatorScreen.innerText
    return
  }
}

const handleClickOperator = (event: MouseEvent): void => {
  let button = event.target as HTMLButtonElement

  if (button.id === 'equal' && isOperatorSelected) {
    selectedOperation(screenValue, screenValueAfterSelectOperator)
    isOperatorSelected = false
    toggleOperatorKeySelection()
    screenValue = calculatorScreen.innerText
    screenValueAfterSelectOperator = '0'
    return
  } else if (button.id !== 'equal') {
    isOperatorSelected = true
    let id = button.id as keyof ICalculatorFactory
    toggleOperatorKeySelection(id)
    selectedOperation = calculatorFactory[id]
  }
}

const clearScreen = (): void => {
  toggleOperatorKeySelection()
  isOperatorSelected = false
  changeScreenValue('0')
  screenValue = '0'
  screenValueAfterSelectOperator = '0'
}

const handleClickPercent = (): void => {
  calculatorFactory.percent(screenValue)
  screenValue = calculatorScreen.innerText
}

for (let numericKey of numericKeysArray){
  numericKey.addEventListener('click',() => concatScreenValue(numericKey.innerText))
}

for (let operatorKey of operatorKeysArray){
  operatorKey.addEventListener('click', (e) => handleClickOperator(e))
}

clearButton.addEventListener('click', clearScreen)

percentKey.addEventListener('click', handleClickPercent)