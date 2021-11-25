function solve(input){
    let index = 1;
    let wantedBook = input[0];
    let nextBook = input[index];
    

    let counter = 0;

    while (nextBook !== 'No More Books'){
        if (nextBook === wantedBook){
            break;
        }

        counter++;

        nextBook = input[index];
        index++;
    }
        

        if (nextBook === wantedBook){
            console.log(`You checked ${counter} and found it.`)
        }else{
            console.log(`The book you search ist not here!`);
            console.log(`You checked ${counter} books.`);
        }

}
solve([
    'Troy',
    'ji',
    'hi',
    'Troy',
    'No More Books'
])