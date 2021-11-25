function solve (input) {
    let shape = input.shift();
    let area = 0;

    if(shape = `square`){
        let a = Number (input.shift());
         area = a * a;
    }else if(shape = `rectangle`){
        let a = Number(input.shift()); 
        let b = Number(input.shift());
        area = a * b;
    }else if(shape = `circle`){
        let r = Number(input.shift());
        area = Math.PI*Math.pow(r,2);
    }else{
        let a = Number(input.shift());
        let b = Number(input.shift());
        area = a * b / 2;
    }
        console.log(area.toFixed(3))
}

solve([
    `square`,
   5
])