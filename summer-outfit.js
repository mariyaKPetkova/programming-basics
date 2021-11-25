function solve (arg1,arg2){
    let degrees = Number(arg1);
    let partOfTheDay = arg2;

    let outFit = "";
    let shoes = "";

    switch (partOfTheDay) {
        case "Morning" : 
            if (degrees >= 10 && degrees <= 18) {
                outFit = "Sweatshirt";
                shoes = "Sneakers";
            }else if (degrees > 18 && degrees <= 24){
                outFit = "Shirt";
                shoes = "Moccasins";
            }else if (degrees > 24){
                outFit = "T-Shirt";
                shoes = "Sandals";
            }
        break;
        case "Afternoon" :
            if (degrees >= 10 && degrees <= 18) {
                outFit = "Shirt";
                shoes = "Moccasins";
            }else if (degrees > 18 && degrees <= 24){
                outFit = "T-Shirt";
                shoes = "Sandals";
            }else if (degrees > 24){
                outFit = "Swim Suit";
                shoes = "Barefoot";
            }
        break;
        case "Evening" :
                outFit = "Shirt";
                shoes = "Moccasins";
        break;
        }
        
console.log(`It's ${degrees} degrees, get your ${outFit} and ${shoes}.`)
    }
solve([
    22,
    "Afternoon"
])