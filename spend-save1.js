function solve (input){
    let index = 0;
    let neededMoney = Number (input[index]);
    index++
    let piggyBank = Number (input[index]);
    index++

    let days = 0;
    let spendCounter = 0;
     
    let action = input[index]

    while (piggyBank < neededMoney){
        let sum = Number(input[index + 1])

        if (action === "spend"){
            spendCounter++;
            if(spendCounter >= 5){
                break;
            }
            piggyBank -= sum;

            if (piggyBank < 0){ //neededMoney=Math.max(0,(piggyBank-sum))
                piggyBank = 0; 
            }

        }else if(action === 'save'){
            piggyBank += sum;
            spendCounter = 0;
        }

        days ++;
        index += 2

        action = input[index];
        
    }

    if (spendCounter >= 5){
        console.log(`You can't save the money.`);
        console.log(`${spendCounter}`);
    }else{
        console.log(`You saved the money for ${days} days.`);
    }
}
solve(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])




