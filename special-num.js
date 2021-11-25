function solve(input){
    let index = 0;
    let n = Number(input[index]);
    let printLine = ""

    for(let i = 1111; i <= 9999; i++){
        let symbol = i.toString()
        let isSpecial = false;
        let counter = 0;

        for(let j = 0; j < symbol.length;j++){
            let currentNum = Number(symbol.charAt(j));
            if(n % currentNum === 0){
                counter++;
                if(counter === 4){
                    isSpecial = true;
                    printLine += symbol + " "
                    break;
                }
            }
        }
    }
    console.log(printLine); 
}
solve([16])