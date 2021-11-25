function solve (input){
    let index = 0;
    let sum = Number(input[index]);
    index++;
    let counter = 0;

    while(sum !== 0){

        if (sum >= 2){
            sum -= 2;
            counter++;
        }
        if (sum >= 1){
            sum -= 1;
            counter++;
        }
        if (sum >= 0.5){
            sum -= 0.5;
            counter++;
        }
        
        if (sum >= 0.2){
            sum -= 0.2;
            counter++;
        }
        
        if (sum >= 0.1){
            sum -= 0.1;
            counter++;
        }
        
        if (sum >= 0.05){
            sum -= 0.05;
            counter++;    
        }
        
        if (sum >= 0.02){
            sum -= 0.02;
            counter++;
        }
        
        if (sum >= 0.01){
            sum -= 0.01;
            counter++;
        }
        

        sum = Number(sum.toFixed(2));
        index++;

    }
    console.log(counter);
    
}
solve(['0.59'])