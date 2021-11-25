function solve(input){
    let transactionCount = Number(input.shift());
    let balance = 0;

    for (let i = 0 ; i < transactionCount; i ++){
        let amount = Number(input.shift());

        if (amount < 0){
            console.log(`Invalid operation!`);
            break;
        }
        balance += amount;
        console.log(`Increase: ${amount.toFixed(2)}`);
        
    }
    console.log(`Total: ${balance.toFixed(2)}`);
}

solve([
    '5',
    '120',
    '45.55',
    '-150'
]);