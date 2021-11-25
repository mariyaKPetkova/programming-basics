function solve(arg1,arg2){
    let hour = Number(arg1);
    let day = arg2

    if(day === 'Monday' || day ==='Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday' || day === 'Saturday'){
        if (hour >= 10 && hour <= 18){
            console.log(`open`);
        }else{
            console.log(`closed`);
        }
    }
    if(day === 'Sunday'){
        
        console.log(`closed`);
    }
    
}
solve(11,'Saturday')