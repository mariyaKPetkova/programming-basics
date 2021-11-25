function solve (input){
    let a = Number(input[0]);
    let b = Number(input[1]);
    let magN = Number(input[2]);
    let counter = 0;
    let isFound = false;

    for(let i = a;i <= b; i++){
        for(let j = a; j <= b; j++){
            counter++;
            if( i + j === magN){
                console.log(`Combination N: ${counter} (${i} + ${j} = ${magN})`);
            isFound = true;
            break;
            }
        }
        if (isFound) {
            break;
        }
    }

    if(!isFound){
        console.log(`${counter} combination - neither equals ${magN}`)
    }
}
solve([
    '88',
    '888',
    '2000'
])