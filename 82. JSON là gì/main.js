// 1. Event listener --> OK
// 2. JSON
// 3. Fetch
// 4. DOM location
// 5. Local storage
// 6. Session storage
// 7. Coding convention
// 8. Best Practices
// 9. Mistakes
// 10. Preformance

// 1. Là một định dạng dữ liệu (chuỗi)
// 2. JavaScript Object Notation
// 3. JSON: Number, String, Boolean, Null, Array,
// Object

// Mã hóa / Giải mã
// Encode // decode
// Stringify: từ Javascript types -> JSON
// Parse: từ JSON -> Javascript types

var json = '["Javascript","PHP"]';
var json1 = '{"name": "Son Dang", "age": "18"}';

var a = '1';
var b = 'null';
var c = '"abc"';

console.log(JSON.parse(a)); // 1
console.log(JSON.parse(b)); // null
console.log(JSON.parse(c)); // abc
console.log(JSON.parse(json)); // ['Javascript', 'PHP']
console.log(JSON.parse(json1)); // {name: "Son Dang", age: "18"}

var object = JSON.parse(json1);

console.log(object); // {name: "Son Dang", age: "18"}