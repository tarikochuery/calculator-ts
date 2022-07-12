import { changeScreenValue } from './calculator'

interface ICalculatorFactory {
  sum: (value1: string, value2: string) => void
  minus: (value1: string, value2: string) => void
  times: (value1: string, value2: string) => void
  divide: (value1: string, value2: string) => void
}

export const calculatorFactory: ICalculatorFactory = {
  sum: (value1: string, value2: string): void => {
    let result: number = Number(value1) + Number(value2)
    changeScreenValue(result.toString())
  },
  minus: (value1: string, value2: string): void => {
    let result: number = Number(value1) - Number(value2)    
    changeScreenValue(result.toString())
  },
  times: (value1: string, value2: string): void => {
    let result: number = Number(value1) * Number(value2)
    changeScreenValue(result.toString())
  },
  divide: (value1: string, value2: string): void => {
    let result: number = Number(value1) / Number(value2)
    changeScreenValue(result.toString())
  }
}