let pets = ["dog", "cat", "hamster", "cat"];

console.log(pets);
console.log(pets.length);
console.log(pets[1]);















// let loggedIn = false

// const login(){
//     const username = getElementById("usernameInput")
//     const password = getElementById("passwordInput")

//     if(username === DBusername && password === DBpassword){
//         loogedIn = true;}
// }

// let num = 22;
// let num2 = "22";

// = "Gefa/skrifa value" 
// == "Hálfur samanburður"
// === "Absolute samanburður"

//// Við notum .includes() og .indexOf til að hjálpa okkur að leita inni í array

console.log(pets.includes("cat"));
console.log(pets.indexOf("cat"));

let nums = [1,2,3,4,5,6];

//// notum () fyrir function
//// notum [] fyrir Array eða komast í value innan í Array eða Object
//// [] = ARRAY
//// {} = Object

console.log(nums);
//// Slice sker út value í lista frá index1 að index2
let index1 = 2;
let index2 = 5;

//// notum splice til að taka úr/CUT og getum svo skilið eftir eih variables í staðinn
//// splice array.splice(start, deleteCount, item1, item2...)
// let sliced = nums.slice(index1, index2);
// console.log(sliced);

let spliced = nums.splice(1,3,100,99);
console.log(spliced);
console.log(nums);


let letters = ["c","b","a","g","z"];
console.log(letters);
//// array.sort() Sortar eftir stafrófsröð
let sortedArray = letters.sort();
console.log(letters);
console.log(sortedArray)
//// array.reverse() Reversar array
// letters.reverse();
// console.log(letters);


//// map, filter, reduce = þetta helsta
//// map mappar yfir hvert item í array og runnar eih skipun fyrir hvert item
//// filter fer yfir hvert item í array og ef hann uppfyllir settar kröfur þá skilar hann því
//// reduce byrjar með eih grunn og bætir við hverju itemi ofann á hann
let numbers = [1,2,3,4,5];

let doubled = numbers.map((n) => n * 2);

let even = numbers.filter((number) => number % 2 === 0 );

let sum = numbers.reduce((sum, number)=> sum + number);
console.log(sum)
console.log(even);


//console.log(doubled);














