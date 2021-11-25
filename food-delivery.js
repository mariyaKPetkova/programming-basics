function solve(arg1,arg2,arg3){
    let chicken = Number(arg1);
    let fisch = Number(arg2);
    let vegan = Number(arg3);

    let sum = 0;

    sum = (chicken * 10.35) + (fisch * 12.40) + (vegan * 8.15);
    sum *= 1.20;
    sum += 2.50;

    console.log(`Total: ${sum.toFixed(2)}`)
}
solve(2,4,3)