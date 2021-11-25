function solve(input){
    let num = Number(input[0]);

    let counter = 1;
    let printLine = "";
    let isBigger = false;
    

    for(let row = 1; row <= num; row++){

        for(let col = 1; col <= row; col++){
            
            if (counter > num){
                isBigger = true;
                break;
            }

            printLine += counter + " ";
            counter ++;
        }

        console.log(printLine);

        printLine = "";

        if (isBigger){
            break;
        }
    }  
}
solve([
    '10'
])

function solve1(n) {

    for (let i = 1; i <= n; i++) {
        let line = "";

        for (let j = 1; j <= i; j++){
            line += i + " ";
        }
        console.log(line);
    }
}
solve(5)