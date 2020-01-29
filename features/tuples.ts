const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
}
console.log('drink', drink)
type Drink = [string, boolean, number]



/*
const pepsi = ['brown', true, 40]
console.log('pepsi before', pepsi)
pepsi[0] = 40
pepsi[2] = 'brown'
console.log('pepsi after', pepsi)
*/

const pepsi: [string, boolean, number] = ['brown', true, 40]
const sprite: Drink = ['clear', true, 30]
const tea: Drink = ['brown', false, 10]
console.log('pepsi', pepsi)
console.log('sprite', sprite)
console.log('tea', tea)

const carSpecs: [number, number] = [400, 3354]

const carStats = {
    horsepower: 400,
    weight: 3354
}


