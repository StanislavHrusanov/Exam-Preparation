function plantDiscovery(input) {

    let n = Number(input.shift());
    let plants = {};

    for (let i = 0; i < n; i++) {
        let [plant, rarity] = input.shift().split('<->');

        plants[plant] = {
            rarity
        }
    }

    let command = input.shift();

    while (command != 'Exhibition') {
        command = command.split(': ');
        let operation = command.shift();

        if (operation == 'Rate') {
            let [plant, rating] = command[0].split(' - ');
            rating = Number(rating);

            if (plants.hasOwnProperty(plant)) {
                if (!plants[plant].hasOwnProperty('ratings')) {
                    plants[plant].ratings = [];
                }
                plants[plant].ratings.push(rating);

            } else {
                console.log('error');
            }

        } else if (operation == 'Update') {
            let [plant, newRarity] = command[0].split(' - ');

            if (plants.hasOwnProperty(plant)) {
                plants[plant].rarity = newRarity;
            } else {
                console.log('error');
            }

        } else if (operation == 'Reset') {
            let plant = command[0];

            if (plants.hasOwnProperty(plant)) {

                if (plants[plant].hasOwnProperty('ratings')) {
                    delete plants[plant]['ratings'];
                }

            } else {
                console.log('error');
            }
        }
        command = input.shift();
    }

    console.log(`Plants for the exhibition:`);
    for (let plant in plants) {
        let avgRating;
        if (plants[plant].hasOwnProperty('ratings')) {
            avgRating = getAvgRating(plants[plant].ratings);
        } else {
            avgRating = 0;
        }
        console.log(`- ${plant}; Rarity: ${plants[plant].rarity}; Rating: ${avgRating.toFixed(2)}`);
    }

    function getAvgRating(arr) {

        let sum = 0;
        for (let num of arr) {
            sum += num;
        }
        return sum / arr.length;

    }
}
plantDiscovery(["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"]);