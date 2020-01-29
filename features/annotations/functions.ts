const add = (a: number, b: number): number => {
    return a + b
}
console.log('a+b: ', add(100, 20))

const subtract = (a: number, b: number) => {
    a - b
}

function divide(a: number, b: number): number {
    return a / b
}

const nultiply = function (a: number, b: number): number {
    return a * b
}

const logger = (message: string): void => {
    console.log(message)
    return undefined
}

const throwError = (message: string): void => {
    if (!message) {
        throw new Error(message)
    }
}



