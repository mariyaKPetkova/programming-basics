function solve (input){
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);

    let printLine = "";

    for(let num = startNum; num <= endNum; num++){
        numAsStr = num + "";    //
        let evenNum = 0;
        let oddNum = 0;

        for(let index = 0; index < numAsStr.length; index++){

            let digit = Number(numAsStr[index]);    //

            if (index % 2 === 0){
                evenNum += digit;
            }else{
                oddNum += digit;
            }
        }
        if (evenNum === oddNum){
            printLine += numAsStr + " ";

        }

    }
    console.log(printLine);
}
solve([
    '100000',
    '100050'
])