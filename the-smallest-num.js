function solve(input){
    let index = 0;
    let data = input[index];
    index++;

    let minNum = Number.MAX_SAFE_INTEGER
    
    while (data != 'Stop'){
        let num = Number(data);
        if (num < minNum){
            minNum = num;
        }
        data = input[index]
        index++
    }
    console.log(minNum)
}
solve([
    '100',
    '300',
    '400',
    'Stop',
    '1050'
])
function solve(input){
    let index = 0;
    let countNum = Number(input[index]);
    index++;

    let minNum = Number.MAX_SAFE_INTEGER

    for(let i = 0; i <= countNum; i++){
        let num = Number(input[index]);
        index++;

        if (num < minNum){
            minNum = num;
        }
    }
    console.log(minNum)
}