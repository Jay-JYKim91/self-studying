//Regular expressions are used in programming languages to match parts of strings. You create patterns to help you do that matching.
//If you want to find the word "the" in the string "The dog chased the cat", you could use the following regular expression:/the/. Notice that quote marks are not required within the regular expressions.
//JS has multiple ways to. se regexes. One way to test a reges is using the .test() method. The .test() method takes the regex, applies it to a string (which is placed inside the parenthesis), and returns true or flase if your pattern finds somegthing or not.
let myString = "Hello, world!";
let myRegex = /Hello/;
let result = myRegex.test(myString);
//So far, you have only been checking if a pattern exists or not within a string. You can also extract the actual matches you found with the .match() method.
//To usd the .match() method, apply the method on a string and pass in the regex inside the parentheses.
"Hello, World!".match(/Hello/); //returns ["Hello"]
//Note that the .match syntax is the opposite of the .test method you have been using thus far:
'string'.match(/regex/);
/regex/.test('string'); //returns true or false
//To search or extract a pattern more than once, you can use the g flag.
let testStr = "Repeat, Repeat, Repeat"
let repeatRegex = /Repeat/g;
testStr.match(repeatRegex); //returns ["Repeat", "Repeat", "Repeat"]
//Sometimes you won't(or don't need to) know the exact characters in your patterns. Thinking of all words that match, say, a misspelling would take a long time. Luckily, you can save time using the wildcard character: .
//The wildcard character . will match any one character. The wildcard is also called dot and period. You can use the wildcard character just like any other character in the regex. For example, it you wanted to match "hug", "huh", "hut", and "hum", you cna use the regex /hu./ to match all four words.
//You can search form a literal pattern with some flexibility with character classes. Character classes allow you to define a group of characters you wish to match by placing then inside square([ and ]) brackets.
//For example, you want to match 'bag', 'big', 'bug' but not 'bog'. You can create the regex /b[aiu]g/ to do this. The [aiu] is the character class that will only match the characters 'a', 'i', or 'u'.
let quoteSample = "Beware of bugs in the above code. I have only proved it correct, not tried it."
let vowelRegex = /aeiou/gi;
let result = quoteSample.match(vowelRegex);
//To match lowercase letters a through e you would usd [a-e].
let bgRegex = /[a-e]at/;
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
jennyStr.match(myRegex);
//To create a negated character set, you place a caret character(^) after the opening bracket and before the characters you do now want to match.
//For example, /[^aeiou]/gi matches all characters that are not a vowel. Note that characters like ., !, [, @, / and white space are not matched - the negated vowel character set only excludes the vowel characters.
//Sometimes, you need to match a character (or group of characters) that appears one or more times in a row. This means it occurs at least once, and may be repeated.
//You can use the + character to check if that is tha case. Remember, the character or pattern has to be present consecutively. that is, the character has to repeat one after the other.
//For example, /a+/g would find one match in 'abc' and return ['a']. Because of the +, it would also find a single match in 'aabc' and return ['aa'].
//If it were instead of checking the string 'abab', it would find two matches and return ['a', 'a'] because the a characters are not in a row - there is a b between them. Finally, since there is no 'a' in the string 'bcd', it wouldn't find a match.
//Any letter in a regex expression that is followed by a * does not have to occur in the string tested whereas any letter in a regex expression followed by a + must occur in a string at least once, as shown below,
let phrase = 'ba humbug';
let regexPlus = /bah+/;
let regexStar = /bah*/;
regexPlus.test(phrase); //returns false;
regexStar.test(phrase); //returns true;
//Both allow for any number of occurrences of the same letter in a row, for example,
let phrase = "woooooow loot at that!";
let regexPlus = /wo+w/;
let regexStar = /wo*w/;
regexPlus.test(phrase); //returns true;
regexStar.test(phrase); //returns true;
//There is also an option that matches characters that occur zero or more times. The character to do this is tha asterisk or start: *.
let soccerWord = "goooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); //returns ["gooooooooo"];
gPhrase.match(goRegex); //returns ["g"]
oPhrase.match(goRegex); //returns null

//In regular expressions, a greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match. The alternative is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern. You can apply the regex /t[a-z]*i/ to the string 'titanic'. This regex is basically a pattern that starts with t, ends with i, and has some letters in between. Regular expressions are by default greedy, so the match would return ['titani']. It finds that the largest sub-string possible to fit the pattern.
//However, you can use the ? character to change it to lazy matching. 'titanic' matched against the adjusted regex of /t[a-z]*?i/ returns ['ti'].
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/;
let result = text.match(myRegex); //returns ["h1"]
//In earlier challenge, you used the caret character(^) inside a character set to create a negated character set in the form [^thingsThatWillNotBeMatched]. Outside of a character set, the caret is used to search for patterns at the beginning of strings.
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString); //return true
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst); //return false
//The closest character class in JS to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_].This character class matches upper and lowercase letters plus numbers. Note, this character class also includes the underscore character(_).
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
//You can search for the opposite of the \w with \W. Note, the opposite pattern uses a capital letter. This shortcut is the same as [^A-Za-z0-9_].
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*|^[a-z]\d\d+&/i;
let userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)&/i;
//You can search for whitespace using \s, which is a lowercase s. This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters. You can think of it as similar to the character class [ \r\t\f\n\v].
let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex); //returns [" ", ' ']
//You can specify the lower and upper number of patterns with quantity specifiers. Quantity specifiers are used with curly brackets({ and }). You put two numbers between the curly brackets - for the lower and upper number of patterns.
//For example, to match only the letter a appearting between 3 and 5 times in the string 'ah', your regex would be /a{3,5}h/.
let A4 = "aaaah";
let A2 = 'aah';
let multipleA = /a{3,5}h/;
multipleA.test(A4); //Returns true;
multipleA.test(A2); //Returns false;
//To only specify the lower number of patterns, keep the first number followed by a comma.
//For example, to match only the string 'hah' with the letter a appearing at least 3 time,s your regex would be /ha{3,}h/.
//To specify a certain number of patterns, just have that one number between the curly brackets.
//For example, to match only the word "hah" with the letter a 3 times, your regex would be /ha{3}h/.
//Sometimes the patterns you want to search for may have parts of it that may or may not exist. However, it may be important to check for them nonetheless.
//You can specify the possible existence of an element with a question mark, ?. This checks for zero or one the preceding element. You can think of this symbol as saying the previous element is optional.
//For example, there are slightly differences in American and British English and you can use the question mark to match both spellings.
let american = 'color';
let british = 'colour';
let rainbowRegex = /colou?r/;
rainbowRegex.test(american) //returns true
rainbowRegex.test(american) //returns true
//Lookaheads are patterns that tell JavaScript to look-ahead in your string to check for patterns further along. This can be useful when you want to search for multiple patterns over the same thing.
//There are two kinds of lookaheads: positive lookahead and negative lookahead.
//A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it. A positive lookahead is used as (?=...) where the ... is the required part that is not matched.
//On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there. A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there. The rest of the pattern is returned if the negative lookahead part if not present.
let quit = "qu";
let noquit = 'qt';
let quRegex = /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex); //returns ['q'];
noquit.match(qRegex); //returns ['q'];

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password); //returns true;

let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr); //returns true;
//You can search for repeat substrings using capture groups. Parentheses, ( and ), are used to find repeat substrings. You put the regex of the pattern that will repeat in between the parentheses. To specify where that repeat string will appeaar, you use a backlash(\) and then a number. This number starts at 1 and increases with each additional capture group you use. An example would be \1 to match the first group.
let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
repeatRegex.test(repeatStr); //returns true
repeatStr.match(repeatRegex); //returns ['regex regex', 'regex'];

let wrongText = "The sky is silver";
let silverRegex = /silver/;
worngText.replace(silverRegex, 'blue');

let hello = "  Hello, World!  ";
let wsRegex = /^\s+|\s+$/g;
let retuls = hello.replace(wsRegex, "");
