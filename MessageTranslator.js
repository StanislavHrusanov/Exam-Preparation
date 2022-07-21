function messageTranslator(arr) {
    let n = Number(arr.shift());
    let pattern = /!(?<command>[A-Z][a-z]{2,})!:\[(?<string>[A-Za-z]{8,})\]/;

    for (let i = 0; i < n; i++) {
        let message = arr.shift();

        if (message.match(pattern)) {
            let match = pattern.exec(message);
            let command = match.groups['command'];
            let string = match.groups['string'];
            let numbers = [];
            string = string.split('');
            string.forEach(char => numbers.push(char.charCodeAt()));
            console.log(`${command}: ${numbers.join(' ')}`);

        } else {
            console.log('The message is invalid');
        }
    }
}
messageTranslator(["3",
    "go:[outside]",
    "!drive!:YourCarToACarWash",
    "!Watch!:[LordofTheRings]"]);
