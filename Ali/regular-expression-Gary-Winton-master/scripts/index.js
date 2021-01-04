/* Creating RegEX in JS */
/**
- Regular Expression are Objects.
- There are two create a RegEx Objects:
    1- let regexOne = new RegExp('Hello'); constructors syntax
    2- let regexTwo = /World/; literal syntax

- Once you have a regex object, you can then use it with one of 
  the methods on RegEXp constructors or the string object wrapper.

 */

let txt = "Programming with Hello World" 

let regexOne = new RegExp('hello')
let regexTwo = /World/

//.test() is a method to check you syntax truthly or falsely 
console.log(regexOne.test(txt))
console.log(regexTwo.test(txt))

/*But .test() is not the only testing method for Regex, there are  several methods. What we did with testing above was a pattern matching*/

regexOne = /Hello/
regexTwo = /World/

/* Using .exec() will return for us an array. We can see the first entry it only has one entry one element in the array and 
it is the actual text that matched the pattern. Now since we are using a simple pattern right now which is just literal text 
then the actual text that matches is the same as that pattern. So exact returns an array of all matches from the string which we pass in.
But notice that it also provides some initial additional information, we have a property of index.
*/
console.log(regexOne.exec(txt))
console.log(regexTwo.exec(txt))

/* This is the index of where that match occurred. So if we were to take a look at that string and begin counting with zero the 
beginning of the match would be 17 for regexONe and 23 for regexTwo. 
So we have two methods test and exec. Now we also have methods that are available as a part of a string. */


txt = 'Here I am going to add a different text for this example. Notice that I can changeS the txt because I declare it with let'

/*When you declare a variable with string value in javascript, it will create a string object wrapper which provides some methods
 we can use to work with that string. Some of those methods allow us to use regular expressions. */

 regexOne = /example/
 regexTwo = /Notice/

 console.log(txt.match(regexOne))
 console.log(txt.match(regexTwo))

 /*So at the begging  with regular expression object we use dot syntax to access those methods. Now you have the regular expression 
 object we passed in the string, on the string method we pass in the regular expression. from the both outputs you can see .match() on string
 and the .exec() on the regex object are the same. Let's take a look at .search()*/

 console.log(txt.search(regexOne))
 console.log(txt.search(regexTwo))

 /*Basically what search does here is give us the index, here we can use .search() if we are doing some sort of statement where we need the 
 index of the match then searches an easier way to get it than trying to pull from the array of is produced with the match method. 
 So if we just want the index then we'd use search. */

 /*The next two methods are the most common ones with regular expressions. The first one is .replace(), the purpose of replace is to allow
  us to replace some text whatever text matches the pattern that we pass in with the regular expression replace that text with some with 
  some other text, replace takes two parameters the first one is regular expression and the second one is a text one to replace it with. */

 let  newRegexOne = txt.replace(regexOne, 'This regex One saying hi')
 let newRegexTwo = txt.replace(regexTwo, 'This regex two saying hi')
  console.log(newRegexOne)
  console.log(newRegexTwo)

  console.log(txt)

  /* You can see the outputs of both newRegexOne and newRegexTwo with new strings. Now something that's important to be aware of here if 
  console log txt, notice that the string is still the same. So replace didn't make it change to the new string because it's immutable. 
  However it did return the new string and that's what we're displaying with our newRegexOne and newRegex. */

 /*The second method is .split(), split basically is a method that allows you to turn a string into an array and the way it does that is you 
  specify what character or characters you want to perform the split on. So which character characters act is the delimiter for determining 
  the elements of the array. */

  console.log(txt.split(regexOne))
  console.log(txt.split(regexTwo))


/*
A frequent use of split is taking a string and splitting it on spaces so that you can work with each individual word.
This is usually used when you are doing some testing and that requires the user to input a phrase that needs to verify
that phrase.
*/

regexOne = /\s/ 
console.log(txt.split(regexOne))
/* the way we indicate a space in a regular expression is with a slash \s, so now when we run the split it is going to create 
an array of all of the words in our string.*/

/* Regular Expressions Flags

The Regex flags are sometimes called modifiers as well, these flags affect the way a pattern is matched. So first off if we want 
to specify a flag for a regular expression pattern we do it after the forward slash. If we're using the constructor method it comes 
as a second string inside the parentheses. So either after the last forward slash in defining the pattern or is a second string in the 
parentheses, that's how we specify these flags.

/pattern/flags or new RegEXp("pattern", "flags");
*/

/* the first flag we will talk about is global [g]. The global flag tells the pattern to match globally meaning it will find every match
for that pattern within the string. If you don't use Global it only finds the first match and then it stops, so global is frequently used. 

the second flag is is case insensitivity [i]. The [i] flag tells it to do a case insensitive match meaning case no longer matters,
it will match both upper case and lower case of the pattern. Now if you use both these flags together then you would have a gi or a ig either way.

The third flag is a multi-line match [m]and we'll deal with the multi-line match when we look at beginning and ending characters.
*/

regexOne = /s\s/ // Here we find an 's' followed by a space in our txt.
regexTwo = /Notice/

console.log(txt.match(regexOne)) 

regexOne = /s\s/g // Here we find an 's' globally in txt.
regexTwo = /Notice/

console.log(txt.match(regexOne))

regexOne = /s\s/gi // Here we are the i flag for case insensitive.
regexTwo = /Notice/

console.log(txt.match(regexOne))

/*Now let us see how does work with exec */

regexOne = /s\s/gi // Here we are the i flag for case insensitive.
regexTwo = /Notice/

console.log(regexOne.exec(txt))
console.log(regexOne.exec(txt))
/*With .exec() we get a single entry log*/