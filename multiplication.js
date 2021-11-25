function solve (input){
    let n = Number(input);
    let result = 0

    for ( i = 1 ; i <= 10; i++){
        result = i * n
        console.log(`${i}*${n}=${result}`)
    }
}
solve(
    '3'
)
0