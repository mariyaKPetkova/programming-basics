function solve(input){
    let index = 0;
    let sumPrime = 0;
    let sumNonPrime = 0;
    let inputData = input[index];
    index++;
    while(inputData !== 'stop'){
        let currentNum = Number(inputData);
        if (currentNum < 0){
            console.log(`Number is negative.`);
            inputData = input[index];
            index++;
            continue;
        }   
        let isPrime = true;

        for(let dev = 2; dev < currentNum; dev++){

            if (currentNum % dev === 0){
                isPrime = false;
                break;
            }
                
        } 
        if(isPrime){
            sumPrime += currentNum;
        }else{
            sumNonPrime += currentNum;
        }
        inputData = input[index];
        index++;
    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);

}
solve(["30",
"83",
"33",
"-1",
"20",
"stop"])

