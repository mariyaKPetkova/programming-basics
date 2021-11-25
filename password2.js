function solve (input){
    let index = 0;
    let username = input[index];
    index++;
    let pass = input[index];
    index++;

    let passTry = "";
    index++

    while (pass === passTry){
        pass = input[index];
        index++
    }
    console.log(`Welcome, ${username}!`)
}
solve([
    'Pesho',
    '1234',
    'pass',
    '1234'
])