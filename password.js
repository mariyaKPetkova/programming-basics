function solve(input){
    let username = input.shift();
    let password = input.shift();

    let passwordTry = input.shift();
    
    while(password === passwordTry){
        passwordTry = input.shift();
    }   
    console.log(`Wellcome, ${username}!`) 
}
solve(['Nakov',
    '1234',
    'Pass',
    '1243',
    '1234'
])
0