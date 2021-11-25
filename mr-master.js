function solve (arg1,arg2) {
    let age = Number(arg1);
    let gender = arg2;

    switch(gender){
        case "m":
            if (age >= 16){
                    console.log(`Mr.`)
                }
            if (age < 16){
                    console.log(`Master`)
                }
        break;
        case "f":
            if (age >= 16){
                console.log(`Ms.`)
            }
        if (age < 16){
                console.log(`Miss`)
            }
        break;
    }

}
solve([
    12,
    "male"
])