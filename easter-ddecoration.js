function easterDecoration (input) {
    let index = 0;
    let clients = +input[index++];
    let totalProduct = 0;
    let totalSum = 0;
    
    for (let i = 1; i <= clients; i++) {
        let inputData = input[index++];
        let countProduct = 0;
        let priceClient = 0;

        while (inputData !== 'Finish') {
            let product = inputData;
            countProduct++;
            switch (product) {
                case 'basket':
                    priceClient += 1.5;
                    break;
                case 'wreath':
                    priceClient += 3.8
                    break;
                case 'chocolate bunny':
                    priceClient += 7;
                    break;
            }
            
            inputData = input[index++];
        }
        if(countProduct % 2 ===0){
            priceClient *= 0.8;
        }
    console.log(`You purchased ${countProduct} items for ${priceClient.toFixed(2)} leva.`);
    totalProduct += countProduct;
    totalSum += priceClient;
    }
    console.log(`Average bill per client is: ${(totalSum/clients).toFixed(2)} leva.`);
}
easterDecoration([2,
    'basket',
    'wreath',
    'chocolate bunny',
    'Finish',
    'wreath',
    'chocolate bunny',
    'Finish'])