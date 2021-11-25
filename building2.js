function solve (input){
    let f = Number(input[0]);
    let r = Number(input[1]);

    for(let i = f;i >= 1;i--){
        let printLine = "";
        let letter = "";

        if(i % 2 === 0){
            letter = "O"
        }
        if(i % 2 !== 0){
            letter = "A"
        }
        if (i === f){
            letter = "L"
        }
        for(let j = 0; j < r; j++){
            printLine += letter + i + "" + j + " "

        }
        console.log(printLine);
    }

}
solve([6,4])