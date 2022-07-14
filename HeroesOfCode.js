function heroesOfCode(arr) {
    let countOfHeroes = Number(arr.shift());
    let heroesInfo = {};

    for (let i = 0; i < countOfHeroes; i++) {
        let [heroName, hp, mp] = arr.shift().split(' ');
        hp = Number(hp);
        mp = Number(mp);

        if (!heroesInfo.hasOwnProperty(heroName)) {
            heroesInfo[heroName] = {
                hp: 0,
                mp: 0
            }
        }
        heroesInfo[heroName].hp += hp;
        heroesInfo[heroName].mp += mp;
    }

    let command = arr.shift();

    while (command != 'End') {
        command = command.split(' - ');
        let action = command.shift();

        if (action == 'CastSpell') {
            let heroName = command.shift();
            let neededMP = Number(command.shift());
            let spellName = command.shift();

            if (heroesInfo[heroName].mp >= neededMP) {
                heroesInfo[heroName].mp -= neededMP;
                console.log(`${heroName} has successfully cast ${spellName} and now has ${heroesInfo[heroName].mp} MP!`);
            } else {
                console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
            }

        } else if (action == 'TakeDamage') {
            let heroName = command.shift();
            let damage = Number(command.shift());
            let attacker = command.shift();

            heroesInfo[heroName].hp -= damage;

            if (heroesInfo[heroName].hp > 0) {
                console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroesInfo[heroName].hp} HP left!`);
            } else {
                delete heroesInfo[heroName];
                console.log(`${heroName} has been killed by ${attacker}!`);
            }

        } else if (action == 'Recharge') {
            let heroName = command.shift();
            let amount = Number(command.shift());

            if (heroesInfo[heroName].mp + amount > 200) {
                amount = 200 - heroesInfo[heroName].mp;
            }
            heroesInfo[heroName].mp += amount;

            console.log(`${heroName} recharged for ${amount} MP!`);

        } else if (action == 'Heal') {
            let heroName = command.shift();
            let amount = Number(command.shift());

            if (heroesInfo[heroName].hp + amount > 100) {
                amount = 100 - heroesInfo[heroName].hp;
            }
            heroesInfo[heroName].hp += amount;
            console.log(`${heroName} healed for ${amount} HP!`);
        }
        command = arr.shift();
    }
    for (let hero in heroesInfo) {
        console.log(`${hero}\n  HP: ${heroesInfo[hero].hp}\n  MP: ${heroesInfo[hero].mp}`);
    }
}
heroesOfCode(['2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
])