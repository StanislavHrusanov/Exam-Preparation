function mirrorWords(input) {
    let text = input[0];
    let pattern = /([\@\#])([a-zA-Z]{3,})\1\1([a-zA-Z]{3,})\1/g;
    let wordPairsCounter = 0;
    let mirrorWordsPairs = [];

    let match = pattern.exec(text);

    while (match != null) {
        wordPairsCounter++;
        let firstWord = match[2];
        let secondWord = match[3];

        let reversedSecondWord = secondWord.split('').reverse().join('');

        if (firstWord == reversedSecondWord) {
            mirrorWordsPairs.push(`${firstWord} <=> ${secondWord}`);
        }
        match = pattern.exec(text);
    }

    if (wordPairsCounter != 0) {
        console.log(`${wordPairsCounter} word pairs found!`);
    } else {
        console.log('No word pairs found!');
    }

    if (mirrorWordsPairs.length != 0) {
        console.log('The mirror words are:')
        console.log(mirrorWordsPairs.join(', '));
    } else {
        console.log('No mirror words!');
    }

}
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']);