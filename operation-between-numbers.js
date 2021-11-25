function solve(arg1, arg2, arg3) {
    let n1 = Number(arg1);
    let n2 = Number(arg2);
    let op = arg3;

    let sum = 0;
    let evenOdd = "";

    switch(op){
        case "+":
            sum = n1 + n2;
            if(sum % 2 === 0){
                evenOdd = "even";
            }else{
                evenOdd = "odd";
            }
            console.log(`${n1} ${op} ${n2} = ${sum} - ${evenOdd}`);
        break;
        case "-":
            sum = n1 - n2;
            if(sum % 2 === 0){
                evenOdd = "even";
            }else{
                evenOdd = "odd";
            }
            console.log(`${n1} ${op} ${n2} = ${sum} - ${evenOdd}`);
        break;
        case "*":
            sum = n1 * n2;
            if(sum % 2 === 0){
                evenOdd = "even";
            }else{
                evenOdd = "odd";
            }
            console.log(`${n1} ${op} ${n2} = ${sum} - ${evenOdd}`);
        break;
        case "/":
            if(n2 === 0){
                console.log(`Cannot divide ${n1} by zero`);
                break;
            }
            sum = n1 / n2;
            console.log(`${n1} ${op} ${n2} = ${sum.toFixed(2)}`);
        break;
        case "%":
            if(n2 === 0){
                console.log(`Cannot divide ${n1} by zero`);
                break;
            }
            sum = n1 % n2;
            console.log(`${n1} ${op} ${n2} = ${sum}`);
        break;
    }
    
}
solve(123,12,"/")