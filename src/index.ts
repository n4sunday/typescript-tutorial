import { Sorter } from './Sorter'
import { NumbersCollecttion } from './NumbersCollection'

const numbersCollection = new NumbersCollecttion([1, 0, 3, 9, 20, 8])
const sorter = new Sorter(numbersCollection)
sorter.sort()
console.log(numbersCollection.data);