const operatorKeysCollection = document.getElementsByClassName('operator') as HTMLCollectionOf<HTMLButtonElement>

const operatorKeysArray = Array.from(operatorKeysCollection)

export const toggleOperatorKeySelection = (operator?: string): void => {
  if (operator){
    const selectedKeys = operatorKeysArray.filter((key: HTMLButtonElement) => searchOperatorKeyById(key, operator))
    const selectedKey = selectedKeys[0]
    selectedKey.classList.toggle('selected')
    return
  }

  const selectedKeys = operatorKeysArray.filter((key: HTMLButtonElement) => searchOperatorKeyByClass(key))
  const selectedKey = selectedKeys[0]
  if (selectedKey){
    selectedKey.classList.toggle('selected')
    return
  }
  return
}

const searchOperatorKeyById = (key: HTMLButtonElement, operator: string): boolean => {
  return key.id === operator
}

const searchOperatorKeyByClass = (key: HTMLButtonElement): boolean => {
  return key.classList.contains('selected')
}

