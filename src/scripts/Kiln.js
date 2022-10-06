

export const firePottery = (shapedClay, kilnTemp) =>{
    let firedPottery = shapedClay
    firedPottery.fired = true
    if (kilnTemp>2200) {
        firedPottery.cracked = true    
    } else {firedPottery.cracked = false}
    return firedPottery 
}