function solve(arg1,arg2,arg3){
    let countGuests = Number(arg1);
    let priceCover = Number(arg2);
    let budget = Number(arg3);
    let totalSum = 0;

    if (countGuests >= 10 && countGuests <= 15){

        priceCover = priceCover * 0.85;

    }else if(countGuests >= 16 && countGuests <= 20){

        priceCover = priceCover * 0.80;

    }else if(countGuests > 20){

        priceCover = priceCover * 0.75;

    }
    budget = budget * 0.90;
    
    totalSum = budget - (countGuests * priceCover)

    if (totalSum >= 0){
        console.log(`It is party time! ${totalSum.toFixed(2)} leva left.`);
    }else{
        console.log(`No party! ${Math.abs(totalSum).toFixed(2)} leva needed.`);
    }
}
solve(24,
    35,
    550
    )