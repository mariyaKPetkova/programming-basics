function solve(arg1,arg2,arg3){
    let budget = Number(arg1);
    let fuelLitters = Number(arg2);
    let day = arg3;
    let sum = 0;

    switch(day){
        case "Saturday" :
            sum = (fuelLitters * 2.10) + 100;
            sum *= 0.90;
        break;
        case "Sunday" :
            sum = (fuelLitters * 2.10) + 100;
            sum *= 0.80;
        break;
    }

    if (budget >= sum){
        console.log(`Safari time! Money left: ${(budget - sum).toFixed(2)} lv.`);
    }else{
        console.log(`Not enough money! Money needed: ${(sum - budget).toFixed(2)} lv.`);
    }

}
solve(120,30,"Saturday")