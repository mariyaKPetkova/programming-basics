function solve(arg1,arg2,arg3,arg4){
    let term = arg1;
    let type = arg2;
    let internet = arg3;
    let month = Number(arg4);
    let sum = 0;

    switch(type){
        case "Small" :
            switch(term){
                case "one" :
                    if(internet === "yes"){
                        sum = month * (9.98 + 5.50);
                    }else{
                    sum = month * 9.98;
                    }
                break;
                case "two" :
                    if(internet === "yes"){
                        sum = month * (8.58 + 5.50);
                    }else{
                    sum = month * 8.58;
                }
                break;
            }
        break;
        case "Middle" :
            switch(term){
                case "one" :
                    if(internet === "yes"){
                        sum = month * (18.99 + 4.35);
                    }else{
                    sum = month * 18.99;
                    }
                break;
                case "two" :
                    if(internet === "yes"){
                        sum = month * (17.09 + 4.35);
                    }else{
                    sum = month * 17.09;
                }
                break;
            }
        break;
        case "Large" :
            switch(term){
                case "one" :
                    if(internet === "yes"){
                        sum = month * (25.98 + 4.35);
                    }else{
                    sum = month * 25.98;
                    }
                break;
                case "two" :
                    if(internet === "yes"){
                        sum = month * (23.59 + 4.35);
                    }else{
                    sum = month * 23.59;
                }
                break;
            }
        break;
        case "ExtraLarge" :
            switch(term){
                case "one" :
                    if(internet === "yes"){
                        sum = month * (35.99 + 3.85);
                    }else{
                    sum = month * 35.99;
                    }
                break;
                case "two" :
                    if(internet === "yes"){
                        sum = month * (31.79 + 3.85);
                    }else{
                    sum = month * 31.79;
                }
                break;
            }
        break;
    }
    
    if(term === "two"){
        sum -= (sum * 3.75) / 100;
    }
    console.log(`${sum.toFixed(2)} lv.`)
}
solve("two","Small","yes",20)