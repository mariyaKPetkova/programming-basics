function solve (input){
    let index = 0;
    let days = Number(input[index]);
    index++;
    let hours = Number(input[index]);
    index++;
    
    let priceParking = 0;
    let totalPriceParking = 0;

    for(let i = 1; i <= days; i++){
        for(let j = 1; j <= hours; j++){
            if (i % 2 === 0 && j % 2 !== 0){
            priceParking += 2.50;
            }else if(i % 2 !== 0 && j % 2 === 0){
            priceParking += 1.25;
            }else{
            priceParking += 1;
            }
        }
        console.log(`Day: ${i} - ${priceParking.toFixed(2)} leva`);
        totalPriceParking += priceParking;
        priceParking = 0;
    }
    console.log(`Total: ${totalPriceParking.toFixed(2)} leva`)
}
solve([5,2])