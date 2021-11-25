function solve(input){
    let index = 0;
    let budget = Number(input[index]);
    index++;
    let countSeries = Number(input[index]);
    index++;

    let totalSum = 0;
    
    for(let i = 1; i <= countSeries; i++){
        let nameSeries = input[index];
        index++;
        let priceSeries = Number(input[index]);
        index++;

        switch(nameSeries){
            case "Thrones":
                priceSeries *= 0.50;
            break;
            case "Lucifer":
                priceSeries *= 0.60;
            break;
            case "Protector":
                priceSeries *= 0.70;
            break;
            case "TotalDrama":
                priceSeries *= 0.80;
            break;
            case "Area":
                priceSeries *= 0.90;
            break;
        }

        totalSum += priceSeries;

    }
    if(budget >= totalSum){
        console.log(`You bought all the series and left with ${(budget-totalSum).toFixed(2)} lv.`);
    }
    if(budget < totalSum){
        console.log(`You need ${(totalSum - budget).toFixed(2)} lv. more to buy the series!`);
    }
}
solve([
    25,
    6,
    'Teen Wolf',
    8,
    'Protector',
    5,
    'TotalDrama',
    5,
    'Area',
    4,
    'Thrones',
    5,
    'Lucifer',
    9
])