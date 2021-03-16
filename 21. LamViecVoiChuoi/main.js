// Làm việc với chuỗi

// Length
var myString = 'Hoc JS tai F8!';
console.log(myString.length); //14

// Find index
var myString = 'Hoc JS tai JS JS F8!';
console.log(myString.indexOf('JS')); //4
console.log(myString.indexOf('JS', 6)); //11
console.log(myString.lastIndexOf('JS')); //14

console.log(myString.search('JS')); //4

/**
 * search: khác với indexOf không hỗ trợ tham số thứ 2
 * search: hỗ trợ tìm kiếm theo biểu thức chính quy
 */

// Cut string
var myString = 'Hoc JS tai F8!';
console.log(myString.slice(4, 6)); //JS
console.log(myString.slice(4)); // JS tai F8!
console.log(myString.slice(-3, -1)); //F8

// Replace
var myString = 'Hoc JS tai JS F8!';
console.log(myString.replace('JS', 'Javascript')); // Hoc Javascript tai JS F8!
console.log(myString.replace(/JS/g, 'Javascript')); // Hoc Javascript tai Javascript F8!

// toUpperCase, toLowerCase
var myString = 'Hoc JS tai F8!';
console.log(myString.toUpperCase()); // HOC JS TAI F8!
console.log(myString.toLowerCase()); // hoc js tai f8!

// Trim
var myString = '     Hoc JS tai F8!     ';
console.log(myString.trim()); // Hoc JS tai F8!

// Split
var languages = 'Javascript, PHP, Ruby';
var myString = 'JAVA';
console.log(languages.split(', ')); // ['Javascript, PHP, Ruby']
console.log(myString.split('')); // ['J', 'A', 'V', 'A']

// Get a character by index
var myString2 = 'Son Dang';
console.log(myString2.charAt(1));  //o
console.log(typeof myString2.charAt(10)); // string

console.log(myString2[4]); //D