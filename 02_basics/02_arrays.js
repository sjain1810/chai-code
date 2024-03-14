const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeroes = marvel_heros.concat(dc_heros)
// console.log(allHeroes);

const all_new_heroes = [...marvel_heros, ...dc_heros]
// console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

// console.log(Array.isArray("Sahil")); //false
// Array.isArray([1,2,3]) //true
// console.log(Array.isArray('[]')); // false
// console.log(Array.isArray(new Array(5))); // true
// Little known fact: Array.prototype itself is an array:
// Array.isArray(Array.prototype);
//returns false
// Array.isArray();
// Array.isArray({});
// Array.isArray(null);
// Array.isArray(undefined);
// ****************************
// console.log(Array.from("Sahil"));
// console.log(Array.from([1, 2, 3], (x) => x + x));
const set = new Set(["foo", "bar", "baz", "foo"]);
Array.from(set);
const map = new Map([
    [1, 2],
    [2, 4],
    [4, 8],
  ]);
  Array.from(map);
  // [[1, 2], [2, 4], [4, 8]]
  const mapper = new Map([
    ["1", "a"],
    ["2", "b"],
  ]);
// console.log(Array.from(mapper.values()));  
// console.log(Array.from(mapper.keys())); 
function f() {
    return Array.from(arguments);
  }
  
// console.log(f(1, 2, 3, 4));
  
  // [ 1, 2, 3 ]
  
// console.log(Array.from({name: "Sahil"})); //interesting as it doesn't convert object directly to array

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3));

console.log(Array.of());
// Expected output: Array []

// Diff between Array.of() and Array()
Array.of(7); // [7]
Array(7); // array of 7 empty slots

Array.of(1, 2, 3); // [1, 2, 3]
Array(1, 2, 3); // [1, 2, 3]

Array.of(undefined); // [undefined]
