# Exam-Preparation
Problems for exercise from my training in Softuni Fundamentals module - Final exam

## **Problem 1 - The Imitation Game**

*During World War 2, you are a mathematician who has joined the
cryptography team to decipher the enemy's enigma code. Your job is to
create a program to crack the codes.*

On the first line of the input, you will receive the **encrypted
message**. After that, until the **"Decode"** command is given, **you
will be receiving strings** with **instructions** for different
**operations** that need to be performed upon the **concealed message**
to **interpret** **it** and reveal its true content. There are several
types of instructions, split by **'|'**

  - **"Move {number of letters}"**:
    
      - **Moves** the **first n letters** to the **back** of the string

  - **"Insert {index} {value}"**:
    
      - **Inserts** the given value **before the given index** in the
        string

  - **"ChangeAll {substring} {replacement}"**:
    
      - **Changes** **all occurrences** of the given substring with the
        replacement text

### Input / Constraints

  - On the first line, you will receive a string with a message.

  - On the following lines, you will be receiving commands, split by
    **'|' .**

### Output

  - After the **"Decode"** command is received, print this message:  
    "**The decrypted message is: {message}**"

### JS Examples

<table>
<tbody>
<tr class="odd">
<td><strong>Input</strong></td>
<td><strong>Output</strong></td>
</tr>
<tr class="even">
<td><p>[</p>
<p>'zzHe',</p>
<p>'ChangeAll|z|l',</p>
<p>'Insert|2|o',</p>
<p>'Move|3',</p>
<p>'Decode',</p>
<p>]</p></td>
<td>The decrypted message is: Hello</td>
</tr>
<tr class="odd">
<td><strong>Comments</strong></td>
<td></td>
</tr>
<tr class="even">
<td><p><strong>ChangeAll|z|l</strong></p>
<p>zzHe → llHe (We replace all occurrences of 'z' with 'l')</p>
<p><strong>Insert|2|o</strong></p>
<p>llHe → lloHe (We add an 'o' before the character on index 2)</p>
<p>Move|3</p>
<p>lloHe → Hello (We take the first three characters and move them to the end of the string)</p>
<p>Finally, after receiving the <strong>"Decode"</strong> command, we print the resulting message.</p></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>Input</strong></td>
<td><strong>Output</strong></td>
</tr>
<tr class="even">
<td><p>[</p>
<p>'owyouh',</p>
<p>'Move|2',</p>
<p>'Move|3',</p>
<p>'Insert|3|are',</p>
<p>'Insert|9|?'</p>
<p>'Decode',</p>
<p>]</p></td>
<td>The decrypted message is: howareyou?</td>
</tr>
</tbody>
</table>

## **Problem 2 - Ad Astra**

*You are an astronaut who just embarked on a mission across the solar
system. Since you will be in space for a long time, you have packed a
lot of food with you. Create a program, which helps you identify how
much food you have left and gives you information about its expiration
date.*

On the first line of the input, you will be given a **text string**. You
must extract the information about the food **and calculate the total
calories.**

First, you must **extract the food info**. It will always follow the
same pattern rules:

  - It will be surrounded by **"|"** or **"\#"** (only one of the two)
    in the following pattern:  
    **\#{item name}\#{expiration date}\#{calories}\#** or  
    **|{item name}|{expiration date}|{calories}|**

  - The item name will contain **only lowercase and uppercase letters
    and whitespace**

  - The expiration date will always follow the pattern:
    **"{day}/{month}/{year}", where the day, month, and year will be
    exactly two digits long**

  - **The calories will be an integer between 0-10000**

Calculate **the total calories of all food items** and then determine
**how many days you can last with the food you have**. Keep in mind that
**you need 2000kcal a day**.

### Input / Constraints

  - **You will receive a single string**

### Output

  - First, print **the number of days** you will be able to last with
    the food you have:

**"You have food to last you for: {days} days\!"**

  - **The output for each food item should look like this:  
    "Item: {item name}, Best before: {expiration date}, Nutrition:
    {calories}"**

### JS Examples

<table>
<tbody>
<tr class="odd">
<td><strong>Input</strong></td>
<td></td>
</tr>
<tr class="even">
<td><p>[</p>
<p>'#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'</p>
<p>]</p></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>Output</strong></td>
<td><strong>Comments</strong></td>
</tr>
<tr class="even">
<td><p>You have food to last you for: 2 days!</p>
<p>Item: Bread, Best before: 19/03/21, Nutrition: 4000</p>
<p>Item: Apples, Best before: 08/10/20, Nutrition: 200</p>
<p>Item: Carrots, Best before: 06/08/20, Nutrition: 500</p></td>
<td><p>We have a total of three matches – bread, apples, and carrots.</p>
<p>The sum of their calories is 4700. Since you need 2000kcal a day, we divide 4700/2000, which means this food will last you for 2 days.</p>
<p>We print each item</p></td>
</tr>
<tr class="odd">
<td><strong>Input</strong></td>
<td></td>
</tr>
<tr class="even">
<td>[ '$$#@@%^&amp;#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ]</td>
<td></td>
</tr>
<tr class="odd">
<td><strong>Output</strong></td>
<td><strong>Comments</strong></td>
</tr>
<tr class="even">
<td><p>You have food to last you for: 9 days!</p>
<p>Item: Fish, Best before: 24/12/20, Nutrition: 8500</p>
<p>Item: Ice Cream, Best before: 03/10/21, Nutrition: 9000</p>
<p>Item: Milk, Best before: 05/09/20, Nutrition: 2000</p></td>
<td>We have three matches. The total calories are 8500 + 9000 + 2000 = 19500, which means you have food for a total of 9 days.</td>
</tr>
<tr class="odd">
<td><strong>JavaScript Input</strong></td>
<td></td>
</tr>
<tr class="even">
<td>['Hello|#Invalid food#19/03/20#450|$5*(@' ]</td>
<td></td>
</tr>
<tr class="odd">
<td><strong>Output</strong></td>
<td><strong>Comments</strong></td>
</tr>
<tr class="even">
<td>You have food to last you for: 0 days!</td>
<td>We have no matches, which means we have no food.<br />
The colored text is not a match since it doesn't have a # at the end.</td>
</tr>
</tbody>
</table>

## **Problem 3 - The Pianist**

*You are a pianist, and you like to keep a list of your favorite piano
pieces. Create a program to help you organize it and add, change, remove
pieces from it\!*

On the first line of the standard input, you will receive an integer
**n** – the **number of pieces** you will initially have. On the next
**n** lines, the **pieces themselves** will follow with their
**composer** and **key**, separated by **"|"** in the following format:
**"{piece}|{composer}|{key}"**.

Then, you will be receiving different **commands**, each on a new line,
separated by **"|"**, until the **"Stop"** command is given:

  - **"Add|{piece}|{composer}|{key}"**:
    
      - You need to **add the given piece** with the information about
        it to the other pieces and print:

> "**{piece} by {composer} in {key} added to the collection\!"**

  - If the piece **is already in the collection**, print:

> "**{piece} is already in the collection\!**"

  - **"Remove|{piece}"**:
    
      - If the piece is in the collection, **remove it** and print:

> **"Successfully removed {piece}\!"**

  - Otherwise, print:

> **"Invalid operation\! {piece} does not exist in the collection."**

  - **"ChangeKey|{piece}|{new key}"**:
    
      - If the piece is in the collection, **change its key with the
        given one** and print:

> **"Changed the key of {piece} to {new key}\!"**

  - Otherwise, print:

> **"Invalid operation\! {piece} does not exist in the collection."**

Upon receiving the **"Stop"** command, you need to print all pieces in
your collection in the following format:  
"**{Piece} -\> Composer: {composer}, Key: {key}**"

### Input/Constraints

  - You will receive **a single integer** at first – **the initial
    number of pieces in the collection**

  - For each piece, you will receive a single line of text with
    information about it.

  - Then you will receive multiple commands in the way described above
    until the command **"Stop"**.

### Output

  - All the output messages with the appropriate formats are described
    in the problem description.

### JS Examples

<table>
<tbody>
<tr class="odd">
<td><strong>Input</strong></td>
<td><strong>Output</strong></td>
</tr>
<tr class="even">
<td><p>[</p>
<p>'3',</p>
<p>'Fur Elise|Beethoven|A Minor',</p>
<p>'Moonlight Sonata|Beethoven|C# Minor',</p>
<p>'Clair de Lune|Debussy|C# Minor',</p>
<p>'Add|Sonata No.2|Chopin|B Minor',</p>
<p>'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',</p>
<p>'Add|Fur Elise|Beethoven|C# Minor',</p>
<p>'Remove|Clair de Lune',</p>
<p>'ChangeKey|Moonlight Sonata|C# Major',</p>
<p>'Stop'</p>
<p>]</p></td>
<td><p>Sonata No.2 by Chopin in B Minor added to the collection!</p>
<p>Hungarian Rhapsody No.2 by Liszt in C# Minor added to the collection!</p>
<p>Fur Elise is already in the collection!</p>
<p>Successfully removed Clair de Lune!</p>
<p>Changed the key of Moonlight Sonata to C# Major!</p>
<p>Fur Elise -&gt; Composer: Beethoven, Key: A Minor</p>
<p>Moonlight Sonata -&gt; Composer: Beethoven, Key: C# Major</p>
<p>Sonata No.2 -&gt; Composer: Chopin, Key: B Minor</p>
<p>Hungarian Rhapsody No.2 -&gt; Composer: Liszt, Key: C# Minor</p></td>
</tr>
<tr class="odd">
<td><strong>Comments</strong></td>
<td></td>
</tr>
<tr class="even">
<td>After we receive the initial pieces with their info, we start receiving commands. The first two commands are to add a piece to the collection, and since the pieces are not already added, we manage to add them. The third add command, however, <strong>attempts to add a piece, which is already in the collection</strong>, so we print a special message and don't add the piece. After that, we receive the remove command, and since the piece is in the collection, we remove it successfully.<br />
<br />
Finally, the last command says to change the key of a piece. Since the key is present in the collection, we modify its key.<br />
<br />
We receive the Stop command, print the information about the pieces, and the program ends.</td>
<td></td>
</tr>
<tr class="odd">
<td><strong>Input</strong></td>
<td><strong>Output</strong></td>
</tr>
<tr class="even">
<td><p>[</p>
<p>'4',</p>
<p>'Eine kleine Nachtmusik|Mozart|G Major',</p>
<p>'La Campanella|Liszt|G# Minor',</p>
<p>'The Marriage of Figaro|Mozart|G Major',</p>
<p>'Hungarian Dance No.5|Brahms|G Minor',</p>
<p>'Add|Spring|Vivaldi|E Major',</p>
<p>'Remove|The Marriage of Figaro',</p>
<p>'Remove|Turkish March',</p>
<p>'ChangeKey|Spring|C Major',</p>
<p>'Add|Nocturne|Chopin|C# Minor',</p>
<p>'Stop'</p>
<p>]</p></td>
<td><p>Spring by Vivaldi in E Major added to the collection!</p>
<p>Successfully removed The Marriage of Figaro!</p>
<p>Invalid operation! Turkish March does not exist in the collection.</p>
<p>Changed the key of Spring to C Major!</p>
<p>Nocturne by Chopin in C# Minor added to the collection!</p>
<p>Eine kleine Nachtmusik -&gt; Composer: Mozart, Key: G Major</p>
<p>La Campanella -&gt; Composer: Liszt, Key: G# Minor</p>
<p>Hungarian Dance No.5 -&gt; Composer: Brahms, Key: G Minor</p>
<p>Spring -&gt; Composer: Vivaldi, Key: C Major</p>
<p>Nocturne -&gt; Composer: Chopin, Key: C# Minor</p></td>
</tr>
</tbody>
</table>

## **Problem 4 - World Tour**

*You are a world traveler, and your next goal is to make a world tour.
To do that, you have to plan out everything first. To start with, you
would like to plan out all of your stops where you will have a break.*

On the **first line,** you will be given a string containing all of your
**stops**. Until you receive the command **"Travel"**, you will be given
some commands to **manipulate** that initial string. The **commands can
be**:

  - **"Add Stop:{index}:{string}"**:
    
      - **Insert** the given **string** at that **index** only if the
        index **is valid**

  - **"Remove Stop:{start\_index}:{end\_index}"**:
    
      - **Remove** the elements of the string from the **starting
        index** to the **end index** (**inclusive**) if **both** indices
        are **valid**

  - **"Switch:{old\_string}:{new\_string}"**:
    
      - If the **old string** is in the initial string, **replace** it
        with the **new one** (all **occurrences**)

***<span class="underline">Note: After each command, print the current
state of the string</span>***

After the **"Travel"** command, print the following: **"Ready for world
tour\! Planned stops: {string}"**

### Input / Constraints

  - **JavaScript: you will receive a list of strings**

  - **An index is valid if it is between the first and the last element
    index (inclusive) in the sequence.**

### Output

  - Print the proper output messages in the proper cases as described in
    the problem description

### JS Examples

<table>
<tbody>
<tr class="odd">
<td><strong>Input</strong></td>
<td><strong>Output</strong></td>
</tr>
<tr class="even">
<td><p>(["Hawai::Cyprys-Greece",</p>
<p>"Add Stop:7:Rome",</p>
<p>"Remove Stop:11:16",</p>
<p>"Switch:Hawai:Bulgaria",</p>
<p>"Travel"])</p></td>
<td><p>Hawai::RomeCyprys-Greece</p>
<p>Hawai::Rome-Greece</p>
<p>Bulgaria::Rome-Greece</p>
<p>Ready for world tour! Planned stops: Bulgaria::Rome-Greece</p></td>
</tr>
</tbody>
</table>

## **Problem 5 - Destination Mapper**

*Now that you have planned out your tour, you are ready to go\! Your
next task is to mark all the points on the map that you are going to
visit.*

You will be given a **string** representing some **places** on the map.
You have to **filter** only the **valid ones**. A valid location is:

  - Surrounded by **"="** or **"/"** on **both sides** (the **first**
    and the **last** symbols must **match**)

  - After the **first "="** or **"/"** there should be **only letters**
    (the **first** must be **upper-case,** other letters could be upper
    or lower-case)

  - The **letters** must be **at least 3**

**Example**: In the string
**"=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i="** only the
**first two** locations are valid.

After you have **matched** all the **valid locations**, you have to
**calculate travel points**. They are calculated by **summing** the
**lengths** of all the **valid destinations** that you have found on the
map.

In the end, on the **first line,** print: **"Destinations: {destinations
joined by ', '}"**.

On the **second line,** print **"Travel Points: {travel\_points}"**.

### Input / Constraints

  - **You will receive a string representing the locations on the map**

  - **JavaScript: you will receive a single parameter: string**

### Output

  - Print the **messages described above**

### JS Examples

<table>
<tbody>
<tr class="odd">
<td><strong>Input</strong></td>
<td><strong>Output</strong></td>
</tr>
<tr class="even">
<td>("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")</td>
<td><p>Destinations: Hawai, Cyprus</p>
<p>Travel Points: 11</p></td>
</tr>
<tr class="odd">
<td>("ThisIs some InvalidInput")</td>
<td><p>Destinations:</p>
<p>Travel Points: 0</p></td>
</tr>
</tbody>
</table>

## **Problem 6 - Plant Discovery**

*You have now returned from your world tour. On your way, you have
discovered some new plants, and you want to gather some information
about them and create an exhibition to see which plant is highest
rated.*

On the **first line,** you will receive a number **n**. On the next **n
lines**, you will be given some information about the plants that you
have discovered in the format: **"{plant}\<-\>{rarity}"**. **Store**
that **information** because you will need it later. If you receive a
plant **more than once**, **update** its rarity.

After that, until you receive the **command** **"Exhibition"**, you will
be given some of these **commands**:

  - **"Rate: {plant} - {rating}"** – **add** the given **rating** to the
    plant (**store all ratings**)

  - **"Update: {plant} - {new\_rarity}"** – **update** the **rarity** of
    the plant with the **new one**

  - **"Reset: {plant}"** – **remove all** the **ratings** of the given
    plant

**<span class="underline">Note: If any given plant name is invalid,
print "error"</span>**

After the command **"Exhibition"**, print the information that you have
about the plants in the following format:

**"Plants for the exhibition:  
\- {plant\_name1}; Rarity: {rarity}; Rating: {average\_rating}**

**- {plant\_name2}; Rarity: {rarity}; Rating: {average\_rating}  
…**

**- {plant\_nameN}; Rarity: {rarity}; Rating: {average\_rating}"**

The **average rating** should be formatted to the **second decimal
place.**

### Input / Constraints

  - **You will receive the input as described above**

  - **JavaScript: you will receive a list of strings**

### Output

  - Print the **information** about all plants as **described above**

### JS Examples

<table>
<tbody>
<tr class="odd">
<td><strong>Input</strong></td>
<td><strong>Output</strong></td>
</tr>
<tr class="even">
<td><p>(["3",</p>
<p>"Arnoldii&lt;-&gt;4",</p>
<p>"Woodii&lt;-&gt;7",</p>
<p>"Welwitschia&lt;-&gt;2",</p>
<p>"Rate: Woodii - 10",</p>
<p>"Rate: Welwitschia - 7",</p>
<p>"Rate: Arnoldii - 3",</p>
<p>"Rate: Woodii - 5",</p>
<p>"Update: Woodii - 5",</p>
<p>"Reset: Arnoldii",</p>
<p>"Exhibition"])</p></td>
<td><p>Plants for the exhibition:</p>
<p>- Arnoldii; Rarity: 4; Rating: 0.00</p>
<p>- Woodii; Rarity: 5; Rating: 7.50</p>
<p>- Welwitschia; Rarity: 2; Rating: 7.00</p></td>
</tr>
<tr class="odd">
<td><p>(["2",</p>
<p>"Candelabra&lt;-&gt;10"</p>
<p>"Oahu&lt;-&gt;10",</p>
<p>"Rate: Oahu - 7",</p>
<p>"Rate: Candelabra - 6",</p>
<p>"Exhibition"])</p></td>
<td><p>Plants for the exhibition:</p>
<p>- Candelabra; Rarity: 10; Rating: 6.00</p>
<p>- Oahu; Rarity: 10; Rating: 7.00</p></td>
</tr>
</tbody>
</table>

## **Problem 7 - Secret Chat**

*You have plenty of free time, so you decide to write a program that
conceals and reveals your received messages. Go ahead and type it in\!*

On the first line of the input, you will receive the **concealed
message**. After that, until the **"Reveal"** command is given, **you
will receive strings with instructions for different operations that
need to be performed upon the concealed message** to **interpret**
**it** and reveal its actual content. There are several types of
instructions, split by **":|:"**

  - **"InsertSpace:|:{index}"**:
    
      - Inserts a single **space** **at the given index**. The given
        index will always be valid.

  - **"Reverse:|:{substring}"**:
    
      - If the message contains the given **substring**, **cut it out**,
        **reverse** it and **add** it at the **end** of the message.
    
      - If not, print **"error"**.
    
      - This operation should replace only the first occurrence of the
        given **substring** **if there are two or more occurrences**.

  - **"ChangeAll:|:{substring}:|:{replacement}"**:
    
      - Changes **all occurrences** of the given **substring** with the
        **replacement text**.

### Input / Constraints

  - On the first line, you will receive a string with a message.

  - On the following lines, you will be receiving commands, split by
    **":|:"**.

### Output

  - After each set of instructions, print the resulting string.

  - After the **"Reveal"** command is received, print this message:  
    "**You have a new text message: {message}**"

### JS Examples

<table>
<tbody>
<tr class="odd">
<td><strong>Input</strong></td>
<td><strong>Output</strong></td>
</tr>
<tr class="even">
<td><p>[</p>
<p>'heVVodar!gniV',</p>
<p>'ChangeAll:|:V:|:l',</p>
<p>'Reverse:|:!gnil',</p>
<p>'InsertSpace:|:5',</p>
<p>'Reveal'</p>
<p>]</p></td>
<td><p>hellodar!gnil</p>
<p>hellodarling!</p>
<p>hello darling!</p>
<p>You have a new text message: hello darling!</p></td>
</tr>
<tr class="odd">
<td><strong>Comments</strong></td>
<td></td>
</tr>
<tr class="even">
<td><p><strong>ChangeAll:|:V:|:l<br />
</strong>heVVodar!gniV -&gt; hellodar!gnil (We replace all occurrences of "V" with "l")</p>
<p><strong>Reverse:|:!gnil</strong></p>
<p>hellodar!gnil -&gt; !gnil -&gt; ling! -&gt; hellodarling! (We reverse !gnil to ling! And put it in the end of the string)</p>
<p><strong>InsertSpace:|:5</strong></p>
<p>hellodarling! -&gt; hello.darling! (We insert a space at index 5)</p>
<p>Finally, after receiving the <strong>"Reveal"</strong> command, we print the resulting message.</p></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>Input</strong></td>
<td><strong>Output</strong></td>
</tr>
<tr class="even">
<td><p>[</p>
<p>'Hiware?uiy',</p>
<p>'ChangeAll:|:i:|:o',</p>
<p>'Reverse:|:?uoy',</p>
<p>'Reverse:|:jd',</p>
<p>'InsertSpace:|:3',</p>
<p>'InsertSpace:|:7',</p>
<p>'Reveal'</p>
<p>]</p></td>
<td><p>Howare?uoy</p>
<p>Howareyou?</p>
<p>error</p>
<p>How areyou?</p>
<p>How are you?</p>
<p>You have a new text message: How are you?</p></td>
</tr>
</tbody>
</table>

## **Problem 8 - Mirror words**

*The SoftUni Spelling Bee competition is here. But it\`s not like any
other Spelling Bee competition out there. It\`s different and a lot more
fun\! You, of course, are a participant, and you are eager to show the
competition that you are the best, so go ahead, learn the rules and
win\!*

On the first line of the input, you will be given a **text string**. To
win the competition, you have to find all hidden **word pairs**, read
them, and mark the ones that are **mirror** **images** of each other.

First of all, you have to **extract the hidden word pairs**. Hidden word
pairs are:

  - Surrounded by **"@"** or **"\#"** (only one of the two) in the
    following pattern **\#wordOne\#\#wordTwo\#** or
    **@wordOne@@wordTwo@**

  - At least **3 characters long each** (**without the surrounding
    symbols**)

  - Made up of **letters** **only**

If the second word, **spelled backward,** is the **same** **as the first
word** **and vice versa** (**casing matters**\!), they are a **match,**
and you have to store them somewhere. **Examples** of mirror words:

**\#Part\#\#traP\# @leveL@@Level@ \#sAw\#\#wAs\#**

  - If you don\`t find any valid pairs, print: **"No word pairs
    found\!"**

  - If you find valid pairs print their count: **"{valid pairs count}
    word pairs found\!"**

  - If there are no mirror words, print: **"No mirror words\!"**

  - If there are mirror words print:

> "The mirror words are:
> 
> {wordOne} \<=\> {wordtwo}, {wordOne} \<=\> {wordtwo}, … {wordOne}
> \<=\> {wordtwo}"

### Input / Constraints

  - **You will recive a string.**

### Output

  - Print the proper output messages in the proper cases as described in
    the problem description.

  - If there are pairs of mirror words, print them in the end, each pair
    separated by **", "**.

  - Each pair of mirror word must be printed with **" \<=\> "** between
    the words.

### JS Examples

<table>
<tbody>
<tr class="odd">
<td><strong>Input</strong></td>
<td></td>
</tr>
<tr class="even">
<td><p>[</p>
<p>'@mix#tix3dj#poOl##loOp#wl@@bong&amp;song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'</p>
<p>]</p></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>Output</strong></td>
<td><strong>Comments</strong></td>
</tr>
<tr class="even">
<td><p>5 word pairs found!</p>
<p>The mirror words are:</p>
<p>Part &lt;=&gt; traP, leveL &lt;=&gt; Level, sAw &lt;=&gt; wAs</p></td>
<td><p>There are 5 green and yellow pairs that meet all requirements and thus are valid.</p>
<p>#poOl##loOp# is valid and looks very much like a mirror words pair, but it isn`t because the casings don`t match.</p>
<p>#car#rac# "rac" spelled backward is "car", but this is not a valid pair because there is only one "#" between the words.</p>
<p>@pack@@ckap@ is also valid, but "ckap" backward is "pakc" which is not the same as "pack", so they are not mirror words.</p></td>
</tr>
<tr class="odd">
<td><strong>Input</strong></td>
<td></td>
</tr>
<tr class="even">
<td>[ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ]</td>
<td></td>
</tr>
<tr class="odd">
<td><strong>Output</strong></td>
<td><strong>Comments</strong></td>
</tr>
<tr class="even">
<td><p>2 word pairs found!</p>
<p>No mirror words!</p></td>
<td><p>"xxxXxx" backward is not the same as "xxxXxx"</p>
<p>@aba@@ababa@ is a valid pair, but the word lengths are different - these are definitely not mirror words</p></td>
</tr>
<tr class="odd">
<td><strong>Input</strong></td>
<td></td>
</tr>
<tr class="even">
<td>[ '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#' ]</td>
<td></td>
</tr>
<tr class="odd">
<td><strong>Output</strong></td>
<td><strong>Comments</strong></td>
</tr>
<tr class="even">
<td><p>No word pairs found!</p>
<p>No mirror words!</p></td>
<td></td>
</tr>
</tbody>
</table>

## **Problem 9 - Need for Speed III**

*You have just bought the latest and greatest computer game – Need for
Seed III. Pick your favorite cars and drive them all you want\! We know
that you can't wait to start playing.*

On the first line of the standard input, you will receive an integer
**n** – the **number of cars** that you can obtain. On the next **n**
lines, the **cars themselves** will follow with their **mileage** and
**fuel** **available**, separated by **"|"** in the following format:

**"{car}|{mileage}|{fuel}"**

Then, you will be receiving different **commands**, each on a new line,
separated by **" : "**, until the **"Stop"** command is given:

  - **"Drive : {car} : {distance} : {fuel}"**:
    
      - You need to **drive the given distance,** and you will **need
        the given** fuel to do that. If the car **doesn't have enough
        fuel,** print: "**Not enough fuel to make that ride**"
    
      - If the car has the required fuel available in the tank,
        **increase its mileage** with **the given distance**, **decrease
        its fuel with the given fuel,** and **print**:  
        "**{car} driven for {distance} kilometers. {fuel} liters of fuel
        consumed.**"
    
      - You like driving new cars only, so if a car's mileage reaches
        **100 000** km, remove it from the collection(s) and print:
        "**Time to sell the {car}\!**"

  - **"Refuel : {car} : {fuel}"**:
    
      - **Refill** the tank of your car.
    
      - Each tank can hold a **maximum of 75 liters of fuel**, so if the
        given amount of fuel is more than you can fit in the tank, take
        only what is required to fill it up.
    
      - Print a message in the following format: **"{car} refueled with
        {fuel} liters"**

  - **"Revert : {car} : {kilometers}"**:
    
      - Decrease the **mileage** of the given **car with the given
        kilometers** and print the kilometers you have decreased it with
        in the following format:  
        **"{car} mileage decreased by {amount reverted} kilometers"**
    
      - If the mileage becomes **less** **than** **10 000km** **after**
        it is decreased, **just set it to 10 000km** and  
        **DO NOT print anything.**

Upon receiving the **"Stop"** command, you need to print all cars in
your possession in the following format:  
"**{car} -\> Mileage: {mileage} kms, Fuel in the tank: {fuel} lt.**"

### Input/Constraints

  - The **mileage** and **fuel** of the cars will be valid, 32-bit
    integers, and will never be negative.

  - The **fuel** and **distance** amounts **in the commands will never
    be negative**.

  - The **car** **names** in the **commands** will always be **valid
    cars in your possession**.

### Output

  - All the output messages with the appropriate formats are described
    in the problem description.

### JS Examples

<table>
<tbody>
<tr class="odd">
<td><strong>Input</strong></td>
<td><strong>Output</strong></td>
</tr>
<tr class="even">
<td><p>[</p>
<p>'3',</p>
<p>'Audi A6|38000|62',</p>
<p>'Mercedes CLS|11000|35',</p>
<p>'Volkswagen Passat CC|45678|5',</p>
<p>'Drive : Audi A6 : 543 : 47',</p>
<p>'Drive : Mercedes CLS : 94 : 11',</p>
<p>'Drive : Volkswagen Passat CC : 69 : 8',</p>
<p>'Refuel : Audi A6 : 50',</p>
<p>'Revert : Mercedes CLS : 500',</p>
<p>'Revert : Audi A6 : 30000',</p>
<p>'Stop'</p>
<p>]</p></td>
<td><p>Audi A6 driven for 543 kilometers. 47 liters of fuel consumed.</p>
<p>Mercedes CLS driven for 94 kilometers. 11 liters of fuel consumed.</p>
<p>Not enough fuel to make that ride</p>
<p>Audi A6 refueled with 50 liters</p>
<p>Mercedes CLS mileage decreased by 500 kilometers</p>
<p>Audi A6 -&gt; Mileage: 10000 kms, Fuel in the tank: 65 lt.</p>
<p>Mercedes CLS -&gt; Mileage: 10594 kms, Fuel in the tank: 24 lt.</p>
<p>Volkswagen Passat CC -&gt; Mileage: 45678 kms, Fuel in the tank: 5 lt.</p></td>
</tr>
<tr class="odd">
<td><strong>Comments</strong></td>
<td></td>
</tr>
<tr class="even">
<td><p>After we receive the cars with their mileage and fuel, we start driving them. When we get to "<strong>Drive : Volkswagen Passat CC : 69 : 8</strong>" command, our program calculates that there is not enough fuel,0 and we print the appropriate message. Then we refuel the Audi A6 with 50 l of fuel and Revert the Mercedes with 500 kilometers.</p>
<p>When we receive the "Revert : Audi A6 : 30000", we set its mileage to <strong>10000</strong> km, because if the current mileage of the Audi is <strong>38543</strong> kms and if we subtract <strong>30000</strong> from it, we receive <strong>8543</strong> kms, which is less than 10000 kms.</p>
<p>After all the commands, we print our current collection of cars with their current mileage and current fuel.</p></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>Input</strong></td>
<td><strong>Output</strong></td>
</tr>
<tr class="even">
<td><p>[</p>
<p>'4',</p>
<p>'Lamborghini Veneno|11111|74',</p>
<p>'Bugatti Veyron|12345|67',</p>
<p>'Koenigsegg CCXR|67890|12',</p>
<p>'Aston Martin Valkryie|99900|50',</p>
<p>'Drive : Koenigsegg CCXR : 382 : 82',</p>
<p>'Drive : Aston Martin Valkryie : 99 : 23',</p>
<p>'Drive : Aston Martin Valkryie : 2 : 1',</p>
<p>'Refuel : Lamborghini Veneno : 40',</p>
<p>'Revert : Bugatti Veyron : 2000',</p>
<p>'Stop'</p>
<p>]</p></td>
<td><p>Not enough fuel to make that ride</p>
<p>Aston Martin Valkryie driven for 99 kilometers. 23 liters of fuel consumed.</p>
<p>Aston Martin Valkryie driven for 2 kilometers. 1 liters of fuel consumed.</p>
<p>Time to sell the Aston Martin Valkryie!</p>
<p>Lamborghini Veneno refueled with 1 liters</p>
<p>Bugatti Veyron mileage decreased by 2000 kilometers</p>
<p>Lamborghini Veneno -&gt; Mileage: 11111 kms, Fuel in the tank: 75 lt.</p>
<p>Bugatti Veyron -&gt; Mileage: 10345 kms, Fuel in the tank: 67 lt.</p>
<p>Koenigsegg CCXR -&gt; Mileage: 67890 kms, Fuel in the tank: 12 lt.</p></td>
</tr>
</tbody>
</table>

## **Problem 10 - Password Reset**

*Yet again, you have forgotten your password. Naturally, it's not the
first time this has happened. Actually, you got so tired of it that you
decided to help yourself with an intelligent solution.*

Write a password reset program that performs a series of commands upon a
predefined string. First, you will receive a string, and afterward,
until the command "**Done**" is given, you will be receiving strings
with commands split by a single space. The commands will be the
following:

  - **"TakeOdd"**
    
      - Takes only the characters at **odd** **indices** and
        **concatenates** them to obtain the **new raw password** and
        then **prints** it.

  - **"Cut {index} {length}"**
    
      - Gets the substring with the **given length** starting from the
        **given index** from the password and removes its **first
        occurrence**, then **prints** the password on the console.
    
      - The given index and the length will **always** be **valid**.

  - **"Substitute {substring} {substitute}"**
    
      - If the raw password contains the given substring, replaces all
        of its occurrences with the substitute text given and prints the
        result.
    
      - If it doesn't, prints **"Nothing to replace\!"**.

### Input

  - You will be receiving strings until the "**Done**" command is given.

### Output

  - After the **"Done"** command is received, print:
    
      - **"Your password is: {password}"**

### Constraints

  - The indexes from the "**Cut {index} {length}**" command will always
    be valid.

### JS Examples

<table>
<tbody>
<tr class="odd">
<td><strong>Input</strong></td>
<td><strong>Output</strong></td>
</tr>
<tr class="even">
<td><p>(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",</p>
<p>"TakeOdd",</p>
<p>"Cut 15 3",</p>
<p>"Substitute :: -",</p>
<p>"Substitute | ^",</p>
<p>"Done"])</p></td>
<td><p>icecream::hot::summer</p>
<p>icecream::hot::mer</p>
<p>icecream-hot-mer</p>
<p>Nothing to replace!</p>
<p>Your password is: icecream-hot-mer</p></td>
</tr>
<tr class="odd">
<td><strong>Comments</strong></td>
<td></td>
</tr>
<tr class="even">
<td><p><strong>TakeOdd -&gt;</strong> We only take the chars at odd indices 1, 3, 5 etc.</p>
<p>Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr -&gt; icecream::hot::summer</p>
<p><strong>Cut 15 3 -&gt;</strong> We cut a substring starting at index 15 with length 3, then remove it from the raw password:</p>
<p>icecream::hot::summer -&gt; sum</p>
<p><strong>Substitute :: - -&gt;</strong> We replace <strong>"</strong>::<strong>"</strong> with <strong>"</strong>-<strong>"</strong>:</p>
<p>icecream::hot::summer -&gt; icream-hot-summer</p>
<p><strong>Substitute</strong> | ^ <strong>-&gt; "</strong>|<strong>"</strong> is not found anywhere in the raw password, so we print <strong>"Nothing to replace!"</strong></p>
<p>Finally, after receiving the <strong>"Done"</strong> command, we print the resulting password in the proper format.</p></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>Input</strong></td>
<td><strong>Output</strong></td>
</tr>
<tr class="even">
<td><p>([<strong>"</strong>up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy<strong>",</strong></p>
<p><strong>"</strong>TakeOdd<strong>",</strong></p>
<p><strong>"</strong>Cut 18 2<strong>",</strong></p>
<p><strong>"</strong>Substitute ! ***<strong>",</strong></p>
<p><strong>"</strong>Substitute ? .!.<strong>",</strong></p>
<p><strong>"</strong>Done<strong>"])</strong></p></td>
<td><p>programming!is!funny</p>
<p>programming!is!fun</p>
<p>programming***is***fun</p>
<p>Nothing to replace!</p>
<p>Your password is: programming***is***fun</p></td>
</tr>
</tbody>
</table>

## **Problem 11 - Fancy Barcodes**

Your first task is to determine if the given sequence of characters is a
**valid** barcode or **not**.

**Each line must not contain anything else but a valid barcode**. A
barcode is **valid** when:

  - It is surrounded by a **"@"** followed by one or more **"\#"**

  - It is **at least 6 characters long** (without the surrounding
    **"@"** or **"\#"**)

  - **It starts** with a **capital letter**

  - It contains **only letters** (lower and upper case) **and digits**

  - **It ends** with a **capital letter**

Examples of valid barcodes: **@\#\#\#Che46sE@\#\#, @\#FreshFisH@\#**,
**@\#\#\#Brea0D@\#\#\#**, **@\#\#Che46sE@\#\#**

Examples of invalid barcodes: **\#\#InvaliDiteM\#\#**,
**@InvalidIteM@**, **@\#Invalid\_IteM@\#**

Next, you have to determine the **product group** of the item from the
**barcode**. The product group is obtained by **concatenating** **all
the digits** found in the barcode. If there are **no digits** present in
the barcode, the **default** product group is **"00".**

Examples:

**@\#FreshFisH@\#** -\> product group: 00

**@\#\#\#Brea0D@\#\#\#** -\> product group: 0

**@\#\#Che4s6E@\#\#** -\> product group: 46

### Input

On the first line, you will be given an integer **n** – the count of
barcodes that you will be receiving next.

On the following **n** lines, you will receive different strings.

### Output

For each barcode that you process, you need to print a message.

If the barcode is invalid:

  - **"**Invalid barcode**"**

If the barcode is valid:

  - **"**Product group: {product group}**"**

### JS Examples

<table>
<tbody>
<tr class="odd">
<td><strong>Input</strong></td>
<td><strong>Output</strong></td>
</tr>
<tr class="even">
<td><p>(["3",</p>
<p>"@#FreshFisH@#",</p>
<p>"@###Brea0D@###",</p>
<p>"@##Che4s6E@##"])</p></td>
<td><p>Product group: 00</p>
<p>Product group: 0</p>
<p>Product group: 46</p></td>
</tr>
<tr class="odd">
<td><strong>Input</strong></td>
<td><strong>Output</strong></td>
</tr>
<tr class="even">
<td><p>(["6",</p>
<p>"@###Val1d1teM@###",</p>
<p>"@#ValidIteM@#",</p>
<p>"##InvaliDiteM##",</p>
<p>"@InvalidIteM@",</p>
<p>"@#Invalid_IteM@#",</p>
<p>"@#ValiditeM@#"])</p></td>
<td><p>Product group: 11</p>
<p>Product group: 00</p>
<p>Invalid barcode</p>
<p>Invalid barcode</p>
<p>Invalid barcode</p>
<p>Product group: 00</p></td>
</tr>
</tbody>
</table>

## **Problem 12 - Heroes of Code and Logic VII**

*You got your hands on the most recent update on the best MMORPG of all
time – Heroes of Code and Logic. You want to play it all day long\! So
cancel all other arrangements and create your party\!*

On the first line of the standard input, you will receive an integer
**n** – the number of heroes that you can choose for your party. On the
next **n** lines, the heroes themselves will follow with their **hit
points** and **mana points** separated by a single space in the
following format:

**"{hero name} {HP} {MP}"**

  - **HP** stands for hit points and **MP** for mana points

  - a hero can have a **maximum** of **100 HP** and **200 MP**

After you have successfully picked your heroes, you can start playing
the game. You will be receiving different commands, each on a new line,
separated by **" – "**, until the **"End"** command is given.

There are several actions that the heroes can perform:

**"CastSpell – {hero name} – {MP needed} – {spell name}**"

  - If the hero has the required MP, he casts the spell, thus reducing
    his MP. Print this message:
    
      - **"**{hero name} has successfully cast {spell name} and now has
        {mana points left} MP\!**"**

  - If the hero is unable to cast the spell print:
    
      - "**{hero name} does not have enough MP to cast {spell name}\!**"

**"TakeDamage – {hero name} – {damage} – {attacker}"**

  - Reduce the hero HP by the given damage amount. If the hero is still
    alive (his HP is greater than 0) print:
    
      - **"{hero name} was hit for {damage} HP by {attacker} and now has
        {current HP} HP left\!"**

  - If the hero has died, remove him from your party and print:
    
      - **"{hero name} has been killed by {attacker}\!"**

**"Recharge – {hero name} – {amount}"**

  - The hero increases his MP. If it brings the MP of the hero above the
    **maximum value** (**200)**, MP is increased to **200**. (the MP
    can't go over the maximum value).

  - Print the following message:
    
      - **"{hero name} recharged for {amount recovered} MP\!"**

**"Heal – {hero name} – {amount}"**

  - The hero increases his HP. If a command is given that would bring
    the HP of the hero above the **maximum value (100), HP is increased
    to 100 (the HP can't go over the maximum value).**

  - Print the following message:
    
      - **"{hero name} healed for {amount recovered} HP\!"**

### Input

  - On the first line of the standard input, you will receive an integer
    **n**

  - On the following **n** lines, the heroes themselves will follow with
    their **hit points** and **mana points** separated by a space in the
    following format

  - You will be receiving different **commands**, each on a new line,
    separated by **" – "**, until the **"End"** command is given

### Output

  - Print all members of your party who are **still alive**, in the
    following format (their HP/MP need to be indented 2 spaces):

**"**{hero name}

HP: {current HP}

MP: {current MP}**"**

### Constraints

  - The starting HP/MP of the heroes will be valid, 32-bit integers will
    never be negative or exceed the respective limits.

  - The HP/MP amounts in the commands will never be negative.

  - The hero names in the commands will always be valid members of your
    party. No need to check that explicitly.

### JS Examples

<table>
<tbody>
<tr class="odd">
<td><strong>Input</strong></td>
<td><strong>Output</strong></td>
</tr>
<tr class="even">
<td><p>2</p>
<p>Solmyr 85 120</p>
<p>Kyrre 99 50</p>
<p>Heal - Solmyr - 10</p>
<p>Recharge - Solmyr - 50</p>
<p>TakeDamage - Kyrre - 66 - Orc</p>
<p>CastSpell - Kyrre - 15 - ViewEarth</p>
<p>End</p></td>
<td><p>Solmyr healed for 10 HP!</p>
<p>Solmyr recharged for 50 MP!</p>
<p>Kyrre was hit for 66 HP by Orc and now has 33 HP left!</p>
<p>Kyrre has successfully cast ViewEarth and now has 35 MP!</p>
<p>Solmyr</p>
<p>HP: 95</p>
<p>MP: 170</p>
<p>Kyrre</p>
<p>HP: 33</p>
<p>MP: 35</p></td>
</tr>
<tr class="odd">
<td><strong>Input</strong></td>
<td><strong>Output</strong></td>
</tr>
<tr class="even">
<td><p>4</p>
<p>Adela 90 150</p>
<p>SirMullich 70 40</p>
<p>Ivor 1 111</p>
<p>Tyris 94 61</p>
<p>Heal - SirMullich - 50</p>
<p>Recharge - Adela - 100</p>
<p>CastSpell - Tyris - 1000 - Fireball</p>
<p>TakeDamage - Tyris - 99 - Fireball</p>
<p>TakeDamage - Ivor - 3 - Mosquito</p>
<p>End</p></td>
<td><p>SirMullich healed for 30 HP!</p>
<p>Adela recharged for 50 MP!</p>
<p>Tyris does not have enough MP to cast Fireball!</p>
<p>Tyris has been killed by Fireball!</p>
<p>Ivor has been killed by Mosquito!</p>
<p>Adela</p>
<p>HP: 90</p>
<p>MP: 200</p>
<p>SirMullich</p>
<p>HP: 100</p>
<p>MP: 40</p></td>
</tr>
<tr class="odd">
<td><strong>Comments</strong></td>
<td></td>
</tr>
<tr class="even">
<td><p>Heal – SirMullich healed for 30 HP due to the HP max limit.</p>
<p>Recharge – Adela recharged for 50 MP due to the MP max limit.</p>
<p>CastSpell – Tyris does not have enough MP to cast the spell.</p>
<p>TakeDamage – Tyris's HP is reduced by 99, thus becoming -5, which means that he is dead.</p>
<p>TakeDamage – Ivor's HP is now -2, so he is dead too.</p>
<p>After the "End" command, we print the remaining living heroes.</p></td>
<td></td>
</tr>
</tbody>
</table>
