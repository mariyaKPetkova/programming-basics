function solve(input) {
    let index = 0;
    let days = +input[index++];
    let food = +input[index++];
    let dog = 0;
    let cat = 0;
    let dogB = 0;
    let catB = 0


    for (let i = 1; i <= days; i++) {
        let dogFood = +input[index++];;
        let catFood = +input[index++];;
        dog += dogFood;
        cat += catFood;
        if (i % 3 === 0) {
            dogB += dogFood * 0.1;
            catB += catFood * 0.1;
        }

    }
    let eatenFood = dog + cat;
    console.log(`Total eaten biscuits: ${(dogB + catB).toFixed(0)}gr.`);
    console.log(`${((dog + cat) / food * 100).toFixed(2)}% of the food has been eaten.`);
    console.log(`${(dog / eatenFood * 100).toFixed(2)}% eaten from the dog.`);
    console.log(`${(cat / eatenFood * 100).toFixed(2)}% eaten from the cat.`);

}
solve([3,
    1000,
    300,
    20,
    100,
    30,
    110,
    40


])