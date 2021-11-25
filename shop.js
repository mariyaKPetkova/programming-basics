function solve (arg1,arg2,arg3){
    let product = arg1;
    let town = arg2;
    let quantity = Number(arg3);

    let totalPrice = 0.0;

    switch (town) {
        case "Plovdiv" :
            switch (product){
                case "coffee" : totalPrice = quantity * 0.4; break;
                case "water" : totalPrice = quantity * 0.7; break;
                case "beer" : totalPrice = quantity * 1.15; break;
                case "sweets" : totalPrice = quantity * 1.3; break;
                case "peanuts" : totalPrice = quantity * 1.5; break;
            }break;
        case "Varna":
            switch (product){
                case "coffee" : totalPrice = quantity * 0.45; break;
                case "water" : totalPrice = quantity * 0.7; break;
                case "beer" : totalPrice = quantity * 1.10; break;
                case "sweets" : totalPrice = quantity * 1.35; break;
                case "peanuts" : totalPrice = quantity * 1.55; break;
            }break;
        case "Sofia": 
            switch (product){
                case "coffee" : totalPrice = quantity * 0.50; break;
                case "water" : totalPrice = quantity * 0.8; break;
                case "beer" : totalPrice = quantity * 1.20; break;
                case "sweets" : totalPrice = quantity * 1.45; break;
                case "peanuts" : totalPrice = quantity * 1.60; break;
            }break;
    }
    console.log(totalPrice)
}
solve(
    "sweets",
    "Sofia",
    2.23
    )
