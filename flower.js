function solve (arg1,arg2,arg3){

    let flower = arg1;
    let count = Number(arg2);
    let budget = Number(arg3);

    let result = 0;

    switch (flower){
        case "Roses" :
            result = count * 5;

        if (count > 80){
            result = result * 0.90;
        }
        break;
        case "Dahlias" :
            result = count * 3.8;

            if (count > 90){
                result = result * 0.85;
            }
            break;
        case "Tulips" :
            result = count * 2.8;

            if (count > 80){
                result = result * 0.85;
            }
            break;
        case "Narcissus" :
            result = count * 3;

            if (120 > count){
                result = result * 1.15;
            }
            break;
        case "Gladiolus" :
            result = count * 2.5;

            if (80 > count){
                result = result * 1.2;
            }
            break;
    }
    let price = (Math.abs(budget - result )).toFixed(2);

    if (budget >= result){
        console.log(`Hey, you have a great garden with ${count} ${flower} and ${price} leva left.`)
    }else{
        console.log(`Not enough money, you need ${price} leva more.`)
    }
}

solve (
   'Gladiolus',
   '64',
   '160'
)