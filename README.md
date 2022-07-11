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

