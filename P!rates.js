function pirates(input) {
    let citiesInfo = {};
    let command = input.shift();

    while (command != 'Sail') {
        let [city, population, gold] = command.split('||');
        population = Number(population);
        gold = Number(gold);

        if (!citiesInfo.hasOwnProperty(city)) {
            citiesInfo[city] = {
                population: 0,
                gold: 0
            }
        }
        citiesInfo[city].population += population;
        citiesInfo[city].gold += gold;

        command = input.shift();
    }

    command = input.shift();

    while (command != 'End') {
        command = command.split('=>');
        let action = command.shift();

        if (action == 'Plunder') {
            let city = command.shift();
            let people = Number(command.shift());
            let gold = Number(command.shift());

            console.log(`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`);

            citiesInfo[city].population -= people;
            citiesInfo[city].gold -= gold;

            if (citiesInfo[city].population <= 0 || citiesInfo[city].gold <= 0) {
                delete citiesInfo[city];
                console.log(`${city} has been wiped off the map!`);
            }
        } else if (action == 'Prosper') {
            let city = command.shift();
            let gold = Number(command.shift());

            if (gold < 0) {
                console.log(`Gold added cannot be a negative number!`);
                command = input.shift();
                continue;
            } else {
                citiesInfo[city].gold += gold;
                console.log(`${gold} gold added to the city treasury. ${city} now has ${citiesInfo[city].gold} gold.`);
            }
        }
        command = input.shift();
    }
    let citiesLeft = Object.keys(citiesInfo);

    if (citiesLeft.length > 0) {
        console.log(`Ahoy, Captain! There are ${citiesLeft.length} wealthy settlements to go to:`);
        citiesLeft.forEach(city => console.log(`${city} -> Population: ${citiesInfo[city].population} citizens, Gold: ${citiesInfo[city].gold} kg`));
    } else {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }
}
pirates(["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"]);
