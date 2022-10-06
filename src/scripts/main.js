// Imports go first
import {makePottery} from "./PotteryWheel.js" 
import {firePottery} from "./Kiln.js"
import {usePottery,toSellOrNotToSell} from "./PotteryCatalog.js"
// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 4,6)
console.log(mug)
let plate = makePottery("plate", 8,21)
console.log(plate)
let bowl = makePottery("bowl", 3,5)
console.log(bowl)
let smallMug = makePottery("smallMug", 2,3)
console.log(smallMug)
let saucer = makePottery("saucer", 4,3)
console.log(saucer)
// Fire each piece of pottery in the kiln
mug = firePottery(mug,2201)
console.log(mug)
plate = firePottery(plate,200)
console.log(plate)
bowl = firePottery(bowl,2200)
console.log(bowl)
smallMug = firePottery(smallMug,3200)
console.log(smallMug)
saucer = firePottery(saucer,2)
console.log(saucer)

// Determine which ones should be sold, and their price
mug = toSellOrNotToSell(mug)
console.log(mug)
plate = toSellOrNotToSell(plate)
console.log(plate)
bowl = toSellOrNotToSell(bowl)
console.log(bowl)
smallMug = toSellOrNotToSell(smallMug)
console.log(smallMug)
saucer = toSellOrNotToSell(saucer)
console.log(saucer)
 


// Invoke the component function that renders the HTML list



