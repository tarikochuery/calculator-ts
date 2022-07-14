import { changeScreenValue } from './calculator'

export interface ICalculatorFactory {
  sum: (value1: string, value2: string) => void
  minus: (value1: string, value2: string) => void
  times: (value1: string, value2: string) => void
  divide: (value1: string, value2: string) => void
  percent: (value: string) => void
}

export const calculatorFactory: ICalculatorFactory = {
  sum: (value1: string, value2: string): void => {
    let result: number|string = Number(value1) + Number(value2)
    result = reduceDecimalPlaces(result)
    changeScreenValue(result)
  },
  minus: (value1: string, value2: string): void => {
    let result: number|string = Number(value1) - Number(value2)
    result = reduceDecimalPlaces(result)
    changeScreenValue(result)
  },
  times: (value1: string, value2: string): void => {
    let result: number|string = Number(value1) * Number(value2)
    result = reduceDecimalPlaces(result)
    changeScreenValue(result)
  },
  divide: (value1: string, value2: string): void => {
    let result: number|string = Number(value1) / Number(value2)
    result = reduceDecimalPlaces(result)
    changeScreenValue(result)
  },
  percent: (value: string): void => {
    let result: number|string = Number(value)/100
    result = reduceDecimalPlaces(result)
    changeScreenValue(result)
  }
}

const reduceDecimalPlaces = (value:number): string => {
  if (isDecimal(value)){
    return value.toFixed(2)
  }

  return String(value)
}

const isDecimal = (value: number): boolean => {
  const numberStr = String(value)
  return numberStr.includes('.')
}