function solve (arg1,arg2,arg3){
    let fruit = arg1;
    let size = arg2;
    let count = Number(arg3);

    let price = 0;

    switch(fruit){
        case "Watermelon":
            if(size === "small"){
                price = count * 56 * 2
            }else{
                price = count * 28.70 * 5
            }break;

        case "Mango":
            if(size === "small"){
                price = count * 36.66 * 2
            }else{
                price = count * 19.60 * 5
            }break;

        case "Pineapple":
            if(size === "small"){
                price = count * 42.10 * 2
            }else{
                price = count * 24.80 * 5
            }break;

        case "Raspberry":
            if(size === "small"){
                price = count * 20 * 2
            }else{
                price = count * 15.20 * 5
            }break;


    }
    if (price >= 400 && price <= 1000){
        price = price * 0.85
    }
    if (price > 1000){
        price = price * 0.50
    }
    console.log(`${price.toFixed(2)} lv.`)
}
solve('Raspberry','small','50')
