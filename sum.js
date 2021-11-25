function solve(input){
    let text = input.shift();
    let sum = 0;

    while (text != 'Stop'){
        let num = Number(text); 
        sum += num

        text = input.shift()
    }

    console.log(sum)
}

solve([
    '10',
    '20',
    '30',
    '45',
    '100',
    'Stop'
])