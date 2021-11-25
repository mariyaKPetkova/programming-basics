function solve(input){
    let index = 0;
    let wantedBook = input[index];
    index++;
    let nextBook = input[index];
    index++;
    let counter = 0

    while (nextBook !== wantedBook){
        if (nextBook === 'No More Books'){
            break;
        }
        counter++
        
        nextBook = input[index];
        index++
    }
        if (nextBook === wantedBook){
            console.log(`You checked ${counter} books and found it.`)
        }else{
            console.log(`The book you search is not here!`);
            console.log(`You checked ${counter} books.`);
        }

}
solve(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])

