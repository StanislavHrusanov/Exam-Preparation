function theImitationGame(input) {

    let encryptedMessage = input.shift();
    let command = input.shift();

    while (command != 'Decode') {
        command = command.split('|');
        let operation = command.shift();

        if (operation == 'Move') {
            let numberOfLetters = Number(command.shift());

            let substr = encryptedMessage.substring(0, numberOfLetters);
            encryptedMessage = encryptedMessage.substring(numberOfLetters);
            encryptedMessage += substr;

        } else if (operation == 'Insert') {
            let index = Number(command.shift());
            let value = command.shift();

            encryptedMessage = encryptedMessage.split('');
            encryptedMessage.splice(index, 0, value);
            encryptedMessage = encryptedMessage.join('');

        } else if (operation == 'ChangeAll') {
            let substring = command.shift();
            let replacement = command.shift();

            if (encryptedMessage.includes(substring)) {
                encryptedMessage = encryptedMessage.split(substring);
                encryptedMessage = encryptedMessage.join(replacement);
            }
        }

        command = input.shift();

    }
    console.log(`The decrypted message is: ${encryptedMessage}`);
}
theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',
]
);