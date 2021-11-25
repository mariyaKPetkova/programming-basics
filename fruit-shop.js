function solve(arg1,arg2,arg3){
    let fruit = arg1;
    let day = arg2;
    let quantity = Number(arg3)
    let price = 0;

    switch(fruit){
        case "banana":
            if(day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday"){
                price = quantity * 2.50;
            }
            if(day === "Saturday" || day === "Sunday"){
                price = quantity * 2.70;
            }
            console.log(price.toFixed(2));
            break;

        case "apple":
            switch(day){
                case "Monday":
                case "Tuesday":
                case "Wednesday":
                case "Thursday":
                case "Friday":
                    price = quantity * 1.2;
                    console.log(price.toFixed(2));
                    break;
                case "Saturday":
                case "Sunday":
                    price = quantity * 1.25;
                    console.log(price.toFixed(2));
                    break;
                default:
                    console.log(`error`);
                    break;
            }
            break;
            

        case "orange":
            if(day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday"){
                price = quantity * 0.85;
                console.log(price.toFixed(2));
            }
            if(day === "Saturday" || day === "Sunday"){
                price = quantity * 0.90;
                console.log(price.toFixed(2));
            }
            break;

        case "grapefruit":
            if(day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday"){
                price = quantity * 1.45;
            }
            if(day === "Saturday" || day === "Sunday"){
                price = quantity * 1.60;
            }
            console.log(price.toFixed(2));
            break;

        case "kiwi":
            if(day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday"){
                price = quantity * 2.70;
            }
            if(day === "Saturday" || day === "Sunday"){
                price = quantity * 3.00;
            }
            console.log(price.toFixed(2));
            break;

        case "pineapple":
            if(day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday"){
                price = quantity * 5.50;
            }
            if(day === "Saturday" || day === "Sunday"){
                price = quantity * 5.60;
            }
            console.log(price.toFixed(2));
            break;

        case "grapes":
            if(day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday"){
                price = quantity * 3.85;
            }
            if(day === "Saturday" || day === "Sunday"){
                price = quantity * 4.20;
            }
            console.log(price.toFixed(2));
            break;
        
        default:
            console.log(`error`);
            break;
    }
}

solve('apple',
    'Saturday',
    2)