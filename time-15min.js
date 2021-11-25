function solve(arg1,arg2){
    let hour = Number(arg1);
    let min = Number(arg2);

    min = min + 15;

    if (min > 59){
        hour += 1;
        min = min % 60;
    }
    
    if(hour > 23){
        hour = 0;
    }
    if (min < 10){
        console.log(`${hour}:0${min}`);
    }else{
        console.log(`${hour}:${min}`);
    }
    
    
}
    solve(12,49)