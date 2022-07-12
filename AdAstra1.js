function adAstra(input) {

    let text = input[0];
    let foodInfo = [];
    let pattern = /([\|\#])(?<item>[a-zA-Z\s]+)\1(?<date>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<calories>[0-9]{1,5})\1/g;
    let itemPattern = /(?<item>[a-zA-Z\s]+)/;
    let datePattern = /(?<date>[0-9]{2}\/[0-9]{2}\/[0-9]{2})/;
    let caloriesPattern = /([\|\#])(?<calories>[0-9]{1,5})\1/;
    let totalFoodCalories = 0;

    if (text.match(pattern)) {
        let matches = text.match(pattern);

        for (let match of matches) {
            let type = itemPattern.exec(match).groups['item'];
            let expirationDate = datePattern.exec(match).groups['date'];
            let calories = caloriesPattern.exec(match).groups['calories'];
            calories = Number(calories);

            totalFoodCalories += calories;

            foodInfo.push({
                type,
                expirationDate,
                calories
            });
        }
    }

    console.log(`You have food to last you for: ${Math.floor(totalFoodCalories / 2000)} days!`);

    for (let item of foodInfo) {
        console.log(`Item: ${item.type}, Best before: ${item.expirationDate}, Nutrition: ${item.calories}`);
    }
}
adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]
);