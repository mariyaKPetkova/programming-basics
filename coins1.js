function solve (input){
    let index = 0
    let counter = 0

    let money = Number(input[index]);
    let sum = money*100;

    while(sum > 0){
        
    if(sum >= 200){
        sum -= 200;
        counter++;
        
    }else if (sum >= 100){
        sum -= 100;
        counter++;

    }else if(sum >= 50){
        sum -= 50;
        counter++;

    }else if(sum >= 20){
        sum -= 20
        counter++;

    }else if(sum >= 10){
        sum -= 10
        counter++;

    }else if(sum >= 5){
        sum -= 5
        counter++;

    }else if(sum >= 2){
        sum -= 2
        counter++;

    }else{
        sum -= 1;
        counter++;
    
    }

    sum = Math.round(sum)
}
    console.log(counter)
}
solve([2.73])