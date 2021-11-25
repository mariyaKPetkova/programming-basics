function solve (input){
    index = 0;
    let data = input[index];
    index++
    let maxNum = Number.MIN_SAFE_INTEGER

    while (data !== 'Stop'){
        let num = Number(data);
        if (num > maxNum){
            maxNum = num;
        }

        data = input[index];
        index++
    }
    console.log(maxNum)

}
solve([
    '100',
    '300',
    '400',
    'Stop',
    '1050'
])