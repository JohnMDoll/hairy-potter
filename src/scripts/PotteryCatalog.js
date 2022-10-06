let soldPot = []

export const toSellOrNotToSell = (kilnedPottery) =>{
    let newKilnedPottery = kilnedPottery
    if (kilnedPottery.cracked) {
        return newKilnedPottery
    } else if (kilnedPottery.weight >=6){
        kilnedPottery.price = 40
    } else { kilnedPottery.price = 20 }
    
    return newKilnedPottery
    
}

export const usePottery=(newKilnedPottery)=>{
    let catalog = []
    soldPot.push(newKilnedPottery)
    catalog += soldPot
    return catalog
}