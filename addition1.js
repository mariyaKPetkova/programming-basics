function solve(input){
    let word = input + "";
    let sum = 0

    for (let i =0; i < word.length;i++){
        let num = Number(word[i])
        sum += num
    }
console.log(sum)
}

   
solve(
    "123455"
)
0