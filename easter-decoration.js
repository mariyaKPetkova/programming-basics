function solve(input){
    let index = 0;
    let countClients = Number(input[0]);
    index++;
    index = 1;

    let averageSum = 0;
    
    for(let i = 1; i <= countClients; i++){
        let counter = 0;
        let totalSum = 0;
        let command = input[index];
        index++;
        while(command !== "Finish"){
            let product = command;
            switch(product){
                case "basket":
                    counter++;
                    totalSum += 1.5;
                break;
                case "wreath":
                    counter++;
                    totalSum += 3.8;
                break;
                case "chocolate bunny":
                    counter++;
                    totalSum += 7;
                break;
            }
    
            command = input[index];
            index++
        }
        if(counter % 2 === 0){
            totalSum *= 0.80;
        }
    
        console.log(`You purchased ${counter} items for ${totalSum.toFixed(2)} leva.`);
        averageSum += totalSum;
        counter = 0;
    }
    averageSum = averageSum / countClients;
    console.log(`Average bill per client is: ${averageSum.toFixed(2)} leva.`)
}
solve([
        '1',
        'basket',
        'wreath',
        'chocolate bunny',
        'wreath',
        'basket',
        'chocolate bunny',
        'Finish'
      ])