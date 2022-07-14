function fancyBarcodes(arr) {
    let countOfBarcodes = Number(arr.shift());
    let pattern = /(@)#+[A-Z][A-Za-z\d]{4,}[A-Z]\1#+/;

    for (let i = 0; i < countOfBarcodes; i++) {
        let barcode = arr.shift();
        if (barcode.match(pattern)) {
            barcode = barcode.split('');
            let productGroup = barcode.filter(ch => ch.charCodeAt() >= 48 && ch.charCodeAt() <= 57);
            productGroup = productGroup.join('');

            if (productGroup.length == 0) {
                productGroup = '00';
            }

            console.log(`Product group: ${productGroup}`);

        } else {
            console.log('Invalid barcode');
        }
    }
}
fancyBarcodes(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"]);
