// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// console.log(undefined > 0);
// console.log(undefined == 0);
// console.log(undefined >= 0);

/* Reason is that an equality check == and comparisions > < >= <= work differently
Comparisions convert null to a number, treating it as 0.
That's why (3) null >= 0 is true and (1) null > 0 is false */

// ===
console.log("2" === 2); // === checks value as well as data type i.e. it strictly compares