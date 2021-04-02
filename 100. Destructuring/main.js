
// 1. Let, const --> OK
// 2. Template Literals --> OK
// 3. Multi-line String --> OK
// 4. Arrow function --> OK
// 5. Classes --> OK
// 6. Enhanced object liternals--> OK
// 7. Default paramter values--> OK
// 8. Destructuring
// 9. Rest paramters
// 10. Spread
// 11. Tagged template literal
// 12. Modules

var array = ['JavaScript', 'PHP', 'Ruby'];

// Ví dụ 1: Array
// ES5
var a = array[0];
var b = array[1];
var c = array[2];

// ES6: Destructuring
var [a, b, c] = array;


console.log(a, b, c); // JavaScript PHP Ruby

// Ví dụ 2:
var [a] = array;

console.log(a); // JavaScript

// Lấy ra những phần tử trừ phần tử đã lấy ra
// Toán tử Rest
var [a, ...rest] = array;

console.log(rest); // ['PHP', 'Ruby']

// Ví dụ 3: Object
var course = {
    name: 'JavaScript',
    price: 1000,
    image: 'image-address'
};

var { name, price } = course;

console.log( name, price); // JavaScript 1000

// Ví dụ 4: Toán tử rest với object
var { name, ...rest } = course;

console.log(rest) // { price: 1000, image: 'image-address'}

// Ví dụ 5:
var course = {
    name: 'JavaScript',
    price: 1000,
    image: 'image-address',
    children: {
        name: 'ReactJS'
    }
};

var { name: parentName , children: { name : childrenName } } = course;

console.log(parentName); // Javascript
console.log(childrenName); // ReactJS

// Ví dụ 6:
var course = {
    name: 'JavaScript',
    price: 1000,
    image: 'image-address',
    description: 'description value'
};

var { name, description = 'default description' } = course;
console.log(name);

// Nếu description chưa được định nghĩa
console.log(description); // default description

// Nếu description đã được đinh nghĩa
console.log(description); // description value

// Sử dụng rest để định nghĩa tham số
function logger(...params) { //rest
    console.log(params)
}

console.log(1, 2, 3, 4, 5, 6, 7, 8);
