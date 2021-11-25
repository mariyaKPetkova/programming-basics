function solve(input){
    let index = 1;
    let username = input[0];
    let pass = input[index];
    let nextTry = input[index + 1]

    while (pass === nextTry){
        nextTry = input[index + 2]

    }
    console.log(`Welcome, ${username}!`)
}

solve([
    'Pesho',
    '1234',
    'pass',
    '1234'
])