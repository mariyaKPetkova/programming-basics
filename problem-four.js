function catFood(input) {
    let index = 0;
    let countCats = +input[index++];
    let smallCats = 0;
    let bigCats = 0;
    let largeCat = 0;
    let totalFood = 0;
    let priceFood = 0;
    for (let i = 1; i <= countCats; i++) {
        let food = +input[index++];
        totalFood += food;

        if (food >= 100 && food < 200) {
            smallCats++;
        }
        if (food >= 200 && food < 300) {
            bigCats++;
        }
        if (food >= 300 && food < 400) {
            largeCat++
        }

    }
    priceFood = (totalFood / 1000) * 12.45;

    console.log(`Group 1: ${smallCats} cats.`);
    console.log(`Group 2: ${bigCats} cats.`);
    console.log(`Group 3: ${largeCat} cats.`);
    console.log(`Price for food per day: ${(priceFood).toFixed(2)} lv.`);
}
catFood([6,
    102,
    236,
    123,
    399,
    342,
    222
])