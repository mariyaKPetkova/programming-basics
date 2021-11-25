function solve(arg1,arg2){
    let lYear = Number(arg1);
    let year = Number(arg2);

    for(let i = lYear; i <= year; i++){
        if((i % 4 === 0) && (i % 100 !== 0) || (i % 400 ===0)){
            console.log(i);
        }
    }

}
solve(
    1908,
    1919
)
0