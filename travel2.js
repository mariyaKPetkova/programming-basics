function solve (input){
    let index = 0;
    let command = input[index];
    index++;
    
    while (command !== 'End'){
        let piggyBank = 0;
        let destination = command;
        let neededMoney = Number(input[index]);
        index++;
        while(neededMoney > piggyBank){
            let sum = Number(input[index]);

            piggyBank+=sum;

            sum = Number(input[index]);
            index++;
        }
        console.log(`Going to ${destination}!`);

        command = input[index];
        index++;
        neededMoney = Number(input[index]);
        
    }
}
solve
    (["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])