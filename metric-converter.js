function solve(arg1,arg2,arg3){
    let num = Number(arg1);
    let inData = arg2;
    let outData = arg3;
    let result = 0;

    if (inData === "mm" && outData === "cm") {
        result = num / 10
    } 
    if (inData === "mm" && outData === "m") {
        result = num / 1000
    } 
    if (inData === "cm" && outData === "mm"){
        result = num *10
    }
    if (inData === "cm" && outData === "m"){
        result = num /100
    }
    if (inData === "m" && outData === "mm"){
        result = num * 1000
    }
    if (inData === "m" && outData === "cm"){
        result = num * 100
    }

    
    console.log(result.toFixed(3));
    
}
solve(12,"mm","m")