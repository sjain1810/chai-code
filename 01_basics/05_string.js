// const name = "Sahil"
// const repoCount = 50

// // console.log(name + repoCount + " Value");

// // console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// const gameName = new String("Sahil")

// // console.log(gameName[0]);
// // console.log(gameName.__proto__);

// // console.log(gameName.toUpperCase());
// // console.log(gameName.length);

// // console.log(gameName.charAt(2));
// // console.log(gameName.indexOf('i'));

// const newName  = gameName.substring(0,4);
// console.log(newName);

// const anotherName = gameName.slice(-4,4);
// console.log(anotherName);

// const oneName = "   sahil-jain   "
// const newOne = oneName.trim();
// console.log(newOne);

// const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-'));
// console.log(url.includes('hitesh'));
// console.log(oneName.split('-'));

// ********************************************

// Methods

//1) charAt()

const str1 = "Sahil"
// console.log(str1.charAt(2));
// console.log(str1[2]);

// str1[2] = 'e'
// console.log(str1); // Hence, we can see bracket notation doesn't work for reassigning or deleting values

// const a = "a";
// const b = "b";
// if(a < b){
//     console.log(`${a} is less than ${b}`) // this holds true so we can see strings are comparable
// }else{
//     console.log("a is greater than b")
// }

// const areEqualInUpperCase = (str1, str2) =>
//   str1.toUpperCase() === str2.toUpperCase();
// const areEqualInLowerCase = (str1, str2) =>
//   str1.toLowerCase() === str2.toLowerCase();

// console.log(areEqualInUpperCase("ß", "ss")); // true; should be false
// console.log(areEqualInLowerCase("ı", "I"));; // false; should be true

// const s1 = "2 + 2"
// const s2 = new String("2+2")
// console.log(eval(s1));
// console.log(eval(s2));
// console.log(eval(s2.valueOf()));

// const one  = Symbol('123')
// const two = String(one);
// console.log(typeof(two));

// 2) iterator()

// const str2 = "Sahil Jain"
// const iterator = str2[Symbol.iterator]();
// let theChar = iterator.next();

// while(!theChar.done && theChar.value != ' '){ //"Output" :- S a h i l
//   console.log(theChar.value);
//   theChar = iterator.next();
// } 

// for(const v of str2){
//   console.log(v);
// }

// console.log(iterator.next().value);
// console.log(iterator.next().value);

// 3) anchor() 
// const str = "Hello"
// document.body.innerHTML = str.anchor("hi")

// 4) at()/charAt()
// console.log(str1.at(1));
// console.log(str1.at(-1));

function str(arr){
  return arr.at(-1)
}

const str2 = "HelloabAB"
// console.log(str(str2));

// console.log(str2.slice(-2,-1));

// 5) charCodeAt()
// console.log(str2.charCodeAt(7));

// 6) concat()
// console.log(str1.concat(' ', str2));
// console.log(str1.concat(', ', str2));

// const greetList = ["Hello", " ", "Venkat", "!"];
// console.log("".concat(...greetList))

// console.log("".concat({})); //object Object
// console.log("".concat([])); //""
// console.log("".concat(null)); //"null"
// console.log("".concat(true)); //"true"
// console.log("".concat(1,2)); //"12"

// 7) endsWith()
const str4 = 'Cats are the best!';
// console.log(str4.endsWith('best!'));
// console.log(str4.endsWith('best', 17)); // part of string to be searched and endIndex of that string
// console.log(str4.endsWith('the', 17)); // false, as ending index is not correct

// 8) includes()
// console.log(str4.includes('Cats')); // true

// 9) indexOf

const str5 = "Sahil Jain Sahil"
// console.log(str5.indexOf('Sahil'));
// console.log(str5.indexOf('Sahil',1));

"hello world".indexOf(""); // returns 0
"hello world".indexOf("", 0); // returns 0
"hello world".indexOf("", 3); // returns 3
"hello world".indexOf("", 8); // returns 8
// in case we want value for a char that is out of bounds in above case it returns last index value
// and in case if that char is not present it returns -1

//also used to count occurences of an element
let count = 0;
let pos = str5.indexOf("a")
while(pos !== -1){
  count++
  pos = str5.indexOf("a", pos + 1)
}
// console.log(count);

// 9) isWellInformed()
const str6 = [
  "a",
  "b",

  "c",
  "d",

  "f"
]
for(const str of str6){
  // console.log(str.isWellFormed());
}

// It is also used to avoid errors in encodeURI i.e. encodeURI throws error if string is not well-formed

const illFormed = "https://example.com/search?q=\uD800";

// try {
//   encodeURI(illFormed);
// } catch (e) {
//   console.log(e); // URIError: URI malformed
// }

// if (illFormed.isWellFormed()) {
//   console.log(encodeURI(illFormed));
// } else {
//   console.warn("Ill-formed strings encountered."); // Ill-formed strings encountered.
// }

// 10) lastIndexOf()
const paragraph = "I think Ruth's dog is cuter than your dog!";

const searchTerm = 'dog';

// console.log(
//   `Index of the last ${searchTerm} is ${paragraph.lastIndexOf(searchTerm)}`,
// );

// 10) slice()
// const str = 'The quick brown fox jumps over the lazy dog.';

// console.log(str.slice(31));
// Expected output: "the lazy dog."

// console.log(str.slice(4, 19));
// // Expected output: "quick brown fox"

// console.log(str.slice(-4));
// Expected output: "dog."

// console.log(str.slice(-9, -5));
// Expected output: "lazy"

// 11) substr()
const str7 = 'abab';

// console.log(str.substr(1, 2));
// Expected output: "oz"

// console.log(str.substr(2));
// Expected output: "zilla"
console.log(str7.substr(0,2));
// If start >= str.length, an empty string is returned.
// If start < 0, the index starts counting from the end of the string. More formally, in this case the substring starts at max(start + str.length, 0).
// If start is omitted or undefined, it's treated as 0.
// If length is omitted or undefined, or if start + length >= str.length, substr() extracts characters to the end of the string.
// If length < 0, an empty string is returned.
// For both start and length, NaN is treated as 0.
console.log(str7,substr(-1,-2));// returns nothing as doesn't accept negative values so we use slicing