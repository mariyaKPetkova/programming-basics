function solve (arg1){
    let text = arg1;

    let count = 0;

    for(let i = 0;i < text.length; i++){
        let symbol = text[i];
        if(symbol === " "){
            count++;
        }
    }
    count++;
    if(count > 10){
        console.log(`The message is too long to be send! Has ${count} words.`);
    }
    if(count <= 10){
        console.log(`The message was send successfully!`);
    }
}
solve("This text has exactly eleven words. One more as it's allowed")