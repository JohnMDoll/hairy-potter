let i = 0

export const makePottery = (shape,weight,height)=>{
    i ++
    let pottery = {shape: shape,weight: weight, height: height, id: i}


    return pottery
}