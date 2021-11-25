function solve (arg1,arg2,arg3,arg4,arg5){
    let flourPrice = Number(arg1);
    let neededKgFlour = Number(arg2);
    let sugerKg = Number(arg3);
    let eggsCount = Number(arg4);
    let yeastCount = Number(arg5);

    let priceFlour = flourPrice * neededKgFlour;
    let sugerPrice = sugerKg * (flourPrice * 0.75);
    let eggsPrice = eggsCount * (flourPrice * 1.10);
    let priceSugerKg = sugerPrice / sugerKg
    let yeastPrice = (priceSugerKg * 0.20) * yeastCount

    let price = priceFlour + sugerPrice + eggsPrice + yeastPrice;

    console.log(`${price.toFixed(2)}`)
}
solve(
    63.44,
    3.57,
    6.35,
    8,
    2
)