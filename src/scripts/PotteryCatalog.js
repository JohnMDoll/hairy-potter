let soldPot = []

export const toSellOrNotToSell = (kilnedPottery) =>{
    let newKilnedPottery = kilnedPottery
    if (kilnedPottery.cracked) {
        return kilnedPottery
    } else if (newKilnedPottery.weight >=6){
        newKilnedPottery.price = 40
    } else { newKilnedPottery.price = 20 }
    usePottery(newKilnedPottery)
    soldPot.push(newKilnedPottery)
    return newKilnedPottery
    
}

export const usePottery=(goodKilnedPottery)=>{
    let catalog = []
        catalog = [...soldPot]
    return catalog
}