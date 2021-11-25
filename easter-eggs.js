function solve(input){
    let index = 0;
    let num = Number(input[0]);
    index++;
    index = 1;

    let countRed = 0;
    let countOrange = 0;
    let countBlue = 0;
    let countGreen = 0;

    let color = input[index];
    for( let i = 0; i <= num; i++){
        switch(color){
            case "red" : 
            countRed++;
            break;
            case "orange" : 
            countOrange++;
            break;
            case "blue" : 
            countBlue++;
            break;
            case "green" : 
            countGreen++;
            break;
        }
        
        index++;
        color = input[index];

    }
    let colorMax = "";
    let maxNum = Number.MIN_SAFE_INTEGER
    if (countRed > maxNum){
        maxNum = countRed;
        colorMax = "red";
    }
    if(countOrange > maxNum){
        maxNum = countOrange;
        colorMax = "orange";
    }
    if(countBlue > maxNum){
        maxNum = countBlue;
        colorMax = "blue";
    }
    if(countGreen > maxNum){
        maxNum = countGreen;
        colorMax = "green";
    }

    console.log(`Red eggs: ${countRed}`);
    console.log(`Orange eggs: ${countOrange}`);
    console.log(`Blue eggs: ${countBlue}`);
    console.log(`Green eggs: ${countGreen}`);
    console.log(`Max eggs: ${maxNum} -> ${colorMax}`);
}
solve([
    '7',    
    'orange',
    'blue',  
    'green',
    'green', 
    'blue',
    'red',   
    'green'
  ])