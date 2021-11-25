function solve(input){
    let index = 0;
    let currentInfo = input[index];
 
    let primeSum = 0;
    let nonPrimeSum = 0;

    while(currentInfo !== 'stop'){
        let num = Number(currentInfo);

        if (num < 0){
            console.log(`Number is negative.`);
            index++;
            currentInfo = input[index];
            continue;
        }

        let isPrime = true;

        for(let dev = 2; dev < num; dev++){

            if (num % dev === 0){
                isPrime = false;
                break;
            }
                
        }
        if (isPrime){
            primeSum += num;
        }else{
            nonPrimeSum += num;
        }

        index++
        currentInfo = input[index]
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`)
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);

}
solve([
    '30',
    '83',
    '33',
    '-1',
    '20',
    'stop'
])