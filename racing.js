function solve (arg1,arg2,arg3){
    let fuel = Number(arg1);
    let consumption = Number(arg2);
    let laps = Number(arg3);
    

    for (let lap = 1 ; lap <= laps ; lap++){
        if (fuel <= 0){
            console.log(`You are out of fuel in round ${laps}`);
            
        }break;
        
    }

}
solve("50", "4.3", "30")
0