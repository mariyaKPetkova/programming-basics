function solve(arg1,arg2){
    let town = arg1;
    let sale = Number(arg2);
    let result = 0;

    switch(town){
        case "Sofia":
            if (sale >= 0 && sale <= 500){
                result = sale * 0.05;
                console.log(result.toFixed(2));
            }else if(sale > 500 && sale <= 1000){
                result = sale * 0.07;
                console.log(result.toFixed(2));
            }else if(sale > 1000 && sale <= 10000){
                result = sale * 0.08;
                console.log(result.toFixed(2));
            }else if(sale > 10000){
                result = sale * 0.12;
                console.log(result.toFixed(2));
            }else{
                console.log(`error`);
            }
        break;

        case "Varna":
            if (sale >= 0 && sale <= 500){
                result = sale * 0.045;
                console.log(result.toFixed(2));
            }else if(sale > 500 && sale <= 1000){
                result = sale * 0.075;
                console.log(result.toFixed(2));
            }else if(sale > 1000 && sale <= 10000){
                result = sale * 0.10;
                console.log(result.toFixed(2));
            }else if(sale > 10000){
                result = sale * 0.13;
                console.log(result.toFixed(2));
            }else{
                console.log(`error`);
            }
        break;

        case "Plovdiv":
            if (sale >= 0 && sale <= 500){
                result = sale * 0.055;
                console.log(result.toFixed(2));
            }else if(sale > 500 && sale <= 1000){
                result = sale * 0.08;
                console.log(result.toFixed(2));
            }else if(sale > 1000 && sale <= 10000){
                result = sale * 0.12;
                console.log(result.toFixed(2));
            }else if(sale > 10000){
                result = sale * 0.145;
                console.log(result.toFixed(2));
            }else{
                console.log(`error`);
            }
        break;

        default:
            console.log(`error`);
            break;
    }
    
}
solve('Sofia',-30)