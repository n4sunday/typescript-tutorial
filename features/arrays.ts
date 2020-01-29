const carMakers: string[] = ['ford', 'toyota', 'chevy']
console.log('carMakers: ', carMakers)

const dates = [new Date(), new Date()]

const carsByMake: string[][] = [
    ['f150'],
    ['corolla'],
    ['camaro']
]

console.log('carsByMake: ', carsByMake)

// Help with inference when extracting values
const car = carMakers[0]
const myCar = carMakers.pop()
console.log('myCar: ', myCar)

// Prevent incompatible values
// carMakers.push(100)

let newCarMakers = carMakers.map((car: string): string => {
    return car.toUpperCase()
})
console.log('newCarMakers: ', newCarMakers)





