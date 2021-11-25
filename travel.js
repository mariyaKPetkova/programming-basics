function solve (arg1,arg2){
    let budget = Number (arg1);
    let sesson = arg2;

    let destination = "";
    let type = "";
    
    switch (sesson){
        case "winter" :
            if ( budget > 1000 ){
                destination = "Europe";
                type = "Hotel";
                budget = budget * 0.9;
            }else if ( budget <= 1000 && budget > 100 ){
                destination = "Balkans";
                type = "Hotel";
                budget = budget * 0.8;
            }else if ( budget <= 100 ){
                destination = "Bulgaria";
                type = "Hotel";
                budget = budget * 0.7;
            } 
            break;
        case "summer" :
            if ( budget > 1000 ){
                destination = "Europe";
                type = "Hotel";
                budget = budget * 0.9;
            }else if ( budget <= 1000 && budget > 100 ){
                destination = "Balkans";
                type = "Camp";
                budget = budget * 0.4;
            }else if ( budget <= 100 ){
                destination = "Bulgaria";
                type = "Camp";
                budget = budget * 0.3;
        
            }
            break;
    }
    
    console.log(`Somewhere in ${destination}`)
    console.log(`${type} - ${budget.toFixed(2)}`)
}
solve(
    678.53,
    "winter"
)