function solve (arg1,arg2,arg3){
    let days = Number (arg1);
    let room = arg2;
    let grade = arg3;

    let overnight = days - 1;
    let price = 0

    switch (room){
        case "room for one person":
            price = overnight * 18;
        break;
        case "apartment":
            if (overnight < 10){
                price = (overnight * 25) * 0.7;
            }else if (overnight >= 10 && overnight <= 15){
                price = (overnight * 25) * 0.65;
            }else if (overnight > 15){
                price = (overnight *25)/2;
            }
            break;
        case "president apartment" :
            price = overnight * 35;
            if (overnight < 10){
                price *= 0.9;
            }else if (overnight >= 10 && overnight <= 15){
                price *= 0.85;
            }else if (overnight > 15){
                price *= 0.8;
            }
            break;
            }
        switch (grade){
            case "positive":
                price = price * 1.25
                break;
            case "negative":
                price = price * 0.9
                break;
        }
              
    console.log(price.toFixed(2))
}
solve(2,'apartament', 'positive')