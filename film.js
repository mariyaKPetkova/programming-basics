function solve(input){
    let buget = Number(input.shift());
    let statist = Number(input.shift());
    let priceClothes = Number(input.shift());

    let priceDek = buget * 0.10;

    let clothes = statist * priceClothes;

    if(statist > 150){
        clothes = clothes * 0.9
    }
    let totalPrice = Math.abs(buget - (priceDek + clothes))

    if(totalPrice < buget){
        console.log(`Action! ${totalPrice}lv. left.`)
    }else{
        console.log(`Not enough money. ${totalPrice}lv needed.`)
    }
    }

    solve([
        200,
        120,
        55.5
    ])