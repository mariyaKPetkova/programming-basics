function solve(arg1,arg2,arg3){
    let age = Number(arg1);
    let priceMachine = Number(arg2);
    let priceToy = Number(arg3);

    let countToys = 0;
    let savedMoney = 0;
    let counterEvenAge = 0;

    for(let i = 1;i <= age; i++){
        if(i % 2 !== 0){
            countToys++;
        }
        if(i % 2 === 0){
            counterEvenAge++;
            savedMoney += (counterEvenAge * 10) - 1;
        }
    }
    savedMoney += countToys * priceToy;
    if (savedMoney >= priceMachine){
        console.log(`Yes! ${(savedMoney - priceMachine).toFixed(2)}`);
    }else{
        console.log(`No! ${(priceMachine - savedMoney).toFixed(2)}`);
    }
}
solve(21,1570.98,3)