// includes method

var title = 'Responsive web design'

console.log(title.includes('web')) // true
console.log(title.includes('web', 12)) //false
console.log(title.includes('dart')) // false

var courses = ['Javascript', 'PHP', 'Dart'];

console.log(courses.includes('Javascript')) // true
console.log(courses.includes('Javascript', 1)) // false
console.log(courses.includes('Ruby')) // false