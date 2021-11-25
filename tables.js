function solve (input) {
    let countTable = Number(input.shift());
    let lengthTable = Number(input.shift());   
    let widthTable = Number(input.shift());

    let areaP = countTable * (lengthTable + 0.60) * (widthTable + 0.60);
    let areaK = countTable * (lengthTable/2) * (lengthTable/2);

    let priceUsd = (areaP * 7) + (areaK * 9);
    let priceBgn = priceUsd * 1.85;

    console.log(`${priceUsd.toFixed(2)} USD`);
    console.log(`${priceBgn.toFixed(2)} BGN`);

}
solve([
    5,
    1,
    0.5
])
0