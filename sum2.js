function solve (input){
    let index = 0;
    let firstNum = Number(input[index]);
    index ++;
    
    let sum = 0;
    let counter = 0;
    let num = Number(input[index]);
    index++; 
    while (sum < firstNum){
        
        sum += num;
        counter++

        num = Number(input[index]);
        index++;
    }
    console.log(sum)
}
solve([
    '100',
    '12',
    '20',
    '30',
    '40',
    '50'
])