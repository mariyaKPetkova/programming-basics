function solve (input){
    
    let neededMoney = Number (input[0]);
    let piggyBank = Number (input[1]);

    let days = 0;
    let spendCounter = 0;

    let index = 2; 
    let action = input[index];

    while (spendCounter < 5 && piggyBank < neededMoney){ // !!!
        let sum = Number(input[index + 1])

        if (action === "spend"){
            spendCounter++;
            piggyBank -= sum
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
    if (spendCounter <= 5){
        console.log("You can`t save the money.");
        console.log(`${days}`);
    }else{
        console.log(`You saved the money for ${days} days.`);
    }
}
solve(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])




