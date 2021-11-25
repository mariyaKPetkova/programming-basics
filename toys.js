function solve (arg1,arg2,arg3,arg4,arg5,arg6){
    let travelPrice = Number(arg1);
    let puzzel = Number(arg2);
    let doll = Number(arg3);
    let teddyBear = Number(arg4);
    let minion = Number(arg5);
    let truck = Number(arg6);

    let totalSum = 0;
    let toyCount = puzzel+doll+teddyBear+minion+truck;
    let toyPrice = puzzel * 2.60 + doll * 3.00 + teddyBear * 4.10 +
        minion * 8.20 + truck * 2.00;
    
    if(toyCount >= 50){
        toyPrice *= 0.75
        
    }

    toyPrice *= 0.90
    totalSum = toyPrice - travelPrice
    

    if(toyPrice >= travelPrice){
        console.log(`Yes! ${totalSum.toFixed(2)} lv left.`)
    }else{
        console.log(`Not enough money! ${Math.abs(totalSum.toFixed(2))} lv needed.`)
    }
}

solve("40.8", "20", "25", "30", "50", "10")