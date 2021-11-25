function solve(input){
    let puppyFood = Number(input[0]);
    let food = puppyFood *1000;
    let index = 1;
    let command = input[index];
    index++

    while (command !== "Adopted"){
        let portionFood = Number(command);

        food -= portionFood;

        command = input[index]
        index++
    }
    if (food >= 0){
        console.log(`Food is enough! Leftovers: ${food} grams.`);

    }else{
        console.log(`Food is not enough. You need ${Math.abs(food)} grams more.`)
    }
}
solve([
    '2',   '999',
    '456', '999',
    '999', '123',
    '456', 'Adopted'
  ])