function footballSouvenirs(arg1, arg2, arg3) {
    let team = arg1;
    let souvenir = arg2;
    let countSouvenirs = Number(arg3);

    let price = 0;

    switch (team) {
        case 'Argentina':
            switch (souvenir) {
                case 'flags':
                    price = countSouvenirs * 3.25;
                    break;
                case 'caps':
                    price = countSouvenirs * 7.20;
                    break;
                case 'posters':
                    price = countSouvenirs * 5.10;
                    break;
                case 'stickers':
                    price = countSouvenirs * 1.25;
                    break;
            }
            break;
        case 'Brazil':
            switch (souvenir) {
                case 'flags':
                    price = countSouvenirs * 4.20;
                    break;
                case 'caps':
                    price = countSouvenirs * 8.50;
                    break;
                case 'posters':
                    price = countSouvenirs * 5.35;
                    break;
                case 'stickers':
                    price = countSouvenirs * 1.20;
                    break;
            }
            break;
        case 'Croatia':
            switch (souvenir) {
                case 'flags':
                    price = countSouvenirs * 2.75;
                    break;
                case 'caps':
                    price = countSouvenirs * 6.90;
                    break;
                case 'posters':
                    price = countSouvenirs * 4.95;
                    break;
                case 'stickers':
                    price = countSouvenirs * 1.10;
                    break;
            }
            break;
        case 'Denmark':
            switch (souvenir) {
                case 'flags':
                    price = countSouvenirs * 3.10;
                    break;
                case 'caps':
                    price = countSouvenirs * 6.50;
                    break;
                case 'posters':
                    price = countSouvenirs * 4.80;
                    break;
                case 'stickers':
                    price = countSouvenirs * 0.90;
                    break;
            }
            break;
    }

    if (team !== "Argentina" && team !== "Brazil" && team !== "Croatia" && team !== "Denmark") {
        console.log(`Invalid country!`);
    } else if (souvenir !== "flags" && souvenir !== "caps" && souvenir !== "posters" && souvenir !== "stickers") {
        console.log(`Invalid stock!`);
    } else {
        console.log(`Pepi bought ${countSouvenirs} ${souvenir} of ${team} for ${(price).toFixed(2)} lv.`);
    }
}
footballSouvenirs('Brazil', 'sticers', 5)