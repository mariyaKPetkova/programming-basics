function solve(arg1,arg2,arg3){
    let bitcoinCount = Number(arg1);
    let yuanCount = Number(arg2);
    let commission = Number(arg3);

    let bitcoinInLv = 0;
    let yuanInLv = 0
    let euroSum = 0
    let totalEuro = 0;

    bitcoinInLv = bitcoinCount * 1168;
    yuanInLv = (yuanCount * 0.15) * 1.76;

    euroSum = (bitcoinInLv + yuanInLv) / 1.95;
    totalEuro = euroSum - (euroSum * commission /100)

    console.log(`${totalEuro.toFixed(2)}`)

}
solve('1',
    '5',
    '5')