function solve(input){
    let wantedBook = input[0];
    let nextBook = [1];

    let counter = 0
    
    while(nextBook !== 'No More Books'){
        if (nextBook === wantedBook){
            break;
        }

        counter ++;
        
        nextBook = input[counter + 1] //
    }
    
    if (nextBook === wantedBook){
        console.log(`You checked ${counter} and found it.`)
    }else{
        console.log(`The book you search ist not here!`);
        console.log(`You checked ${counter} books`);
    }
}
solve([
    'Troy',
    'ji',
    'hi',
    'Tro',
    'No More Books'
])