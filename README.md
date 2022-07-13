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

