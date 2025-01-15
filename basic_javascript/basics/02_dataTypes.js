// JavaScript Data Types Examples

// 1. String
let name = "John Doe";
console.log("String:", name); // Output: String: John Doe

// 2. Number
let age = 25;
let temperature = -5.7;
console.log("Number:", age, temperature); // Output: Number: 25 -5.7

// 3. Boolean
let isStudent = true;
let isLoggedIn = false;
console.log("Boolean:", isStudent, isLoggedIn); // Output: Boolean: true false

// 4. Undefined
let address;
console.log("Undefined:", address); // Output: Undefined: undefined

// 5. Null
let job = null;
console.log("Null:", job); // Output: Null: null

// 6. Object
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};
console.log("Object:", person); 
// Output: Object: { firstName: 'John', lastName: 'Doe', age: 30 }

// 7. Array (a special type of object)
let colors = ["red", "green", "blue"];
console.log("Array:", colors); // Output: Array: [ 'red', 'green', 'blue' ]

// 8. Symbol (Unique and immutable value)
let uniqueID = Symbol("id");
console.log("Symbol:", uniqueID); // Output: Symbol: Symbol(id)

// 9. BigInt (For very large integers)
let bigNumber = BigInt("9007199254740991");
console.log("BigInt:", bigNumber); // Output: BigInt: 9007199254740991n

// Example of `typeof` operator to check data types
console.log("Data types:");
console.log("Type of name:", typeof name);        // string
console.log("Type of age:", typeof age);          // number
console.log("Type of isStudent:", typeof isStudent); // boolean
console.log("Type of address:", typeof address);    // undefined
console.log("Type of job:", typeof job);          // object (null is an object due to a JavaScript quirk)
console.log("Type of person:", typeof person);    // object
console.log("Type of colors:", typeof colors);    // object
console.log("Type of uniqueID:", typeof uniqueID); // symbol
console.log("Type of bigNumber:", typeof bigNumber); // bigint
