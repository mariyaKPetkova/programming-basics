function solve (arg1,arg2,arg3){
    let racketPrice = Number(arg1);
    let racketCount = Number(arg2);
    let shoeCount = Number(arg3);

    let shoePrice = racketPrice / 6;

    let suit = ((racketPrice * racketCount) + (shoePrice * shoeCount)) * 0.20;

    let totalPrice = (racketPrice * racketCount) + (shoePrice * shoeCount) + suit;
    console.log(`Price to be paid by Djokovic ${(totalPrice/8)}`);
    console.log(`Price to be paid by sponsors ${(totalPrice * 7/8)}`);
}
solve('850','4','2');