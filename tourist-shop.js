function solve(...input){
    let index = 0;
    let budget = Number(input[0]);
    index++;
    index = 1;

    let counter = 0;
    let sum = 0;
    let noMoreMoney = false;
    let neededMoney = 0;

    let command = input[index];
    index++;

    while(command !== "Stop"){
    let product = command;
    let price = Number(input[index]);

    counter++;

    if(counter % 3 === 0){
        price = price/2
    }

    sum += price;
    if(sum > budget){
        noMoreMoney = true;
        counter--;
        neededMoney = sum - budget;
        break;
    }

    index++;
    command = input[index];
    index++;
    price = Number(input[index]);
    }
    if(noMoreMoney){
        console.log(`You don't have enough money!`);
        console.log(`You need ${neededMoney.toFixed(2)} leva!`);
    }else{
        console.log(`You bought ${counter} products for ${sum.toFixed(2)} leva.`);
    }
}
solve([153.20,
    "ji",
    25.20,
    "ki",
    54,
    "hu",
    30,
"Stop"])