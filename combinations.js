function solve(input) {
    let index = 0;
    let start = Number(input[index]);
    index++;
    let end = Number(input[index]);
    index++;
    let magicNum = Number(input[index]);
    index++;
    let result = 0;
    let counter = 0;
    let isFound = false;

    for (let i = start; i <= end; i++){
        for( let j = start; j <= end;j++){
            counter++;
            result = i + j;
            if(result === magicNum){
                console.log(`Combination N:${counter} (${i} + ${j} = ${result})`);
                isFound = true;
                break;
            }
        }
        if(isFound){
            break;
        }
    }
    if(!isFound){
        console.log(`${counter} combinations - neither equals ${magicNum}`);
    }
}
solve