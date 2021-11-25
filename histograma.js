function solve (input){
    let index = 0;
    let numberCount = Number(input[index]);
    index++;
    
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 1; i <= numberCount; i++){

        let num = Number(input[index]);
        index++; 
        
        if (num < 200){
            p1 += 1
        }
        if(num >= 200 && num <= 399){
            p2 += 1
        }
        if(num >= 400 && num <= 599){
            p3 += 1
        }
        if(num >= 600 && num <= 799){
            p4 += 1
        }
        if(num >= 800){
            p5 +=1
        }
    }
    console.log(`${(p1/numberCount*100).toFixed(2)}%`);
    console.log(`${(p2/numberCount*100).toFixed(2)}%`);
    console.log(`${(p3/numberCount*100).toFixed(2)}%`);
    console.log(`${(p4/numberCount*100).toFixed(2)}%`);
    console.log(`${(p5/numberCount*100).toFixed(2)}%`);
}
solve(["3","1","2","999"])