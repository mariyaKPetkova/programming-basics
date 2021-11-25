function solve (input){
    let balance = 0;
    index = 0;
    let comand = input[index];
    index++

    while ( comand !== 'NoMoreMoney'){
        
        let sum = Number(comand); 
        if (sum < 0){
            console.log(`Invalid operation!`)
            break;
        }

        console.log(`Increase: ${sum.toFixed(2)}`);
        balance += sum
        
        comand = input[index];
        index++
    
    }
    console.log(`Total: ${balance.toFixed(2)}`)

}
solve(["120",
"45.55",
"-150"])
