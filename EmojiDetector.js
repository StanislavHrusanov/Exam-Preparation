function emojiDetector(arr) {
    let text = arr.shift();
    let coolThresholdPattern = /\d+/g;
    let emojiPattern = /(:{2}|\*{2})([A-Z][a-z]{2,})\1/g;

    let coolThreshold = text.match(coolThresholdPattern).join('').split('').map(Number).reduce((a, b) => a * b);
    let emojies = text.match(emojiPattern);
    let coolEmojies = [];

    for (let emoji of emojies) {
        let sum = 0;
        for (let i = 2; i < emoji.length - 2; i++) {
            sum += emoji[i].charCodeAt();
        }
        if (sum >= coolThreshold) {
            coolEmojies.push(emoji);
        }
    }

    console.log(`Cool threshold: ${coolThreshold}`);
    console.log(`${emojies.length} emojis found in the text. The cool ones are:`);
    console.log(coolEmojies.join('\n'));

}
emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])