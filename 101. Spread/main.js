
// 1. Let, const --> OK
// 2. Template Literals --> OK
// 3. Multi-line String --> OK
// 4. Arrow function --> OK
// 5. Classes --> OK
// 6. Enhanced object liternals --> OK
// 7. Default paramter values --> OK
// 8. Destructuring --> OK
// 9. Rest paramters (...) --> OK
// 10. Spread (...)
// 11. Tagged template literal
// 12. Modules

// Destructuring kết hợp rest trong function
function logger({ name, price, ...rest }) {
    console.log(name); // JavaScript
    console.log(price); // 1000
    console.log(rest); // { description: 'Description content' }
}

logger({ 
    name: 'JavaScript',
    price: 1000,
    description: 'Description content'
});

// Lưu ý: Nếu rest nhận vào là 1 mảng thì sẽ nhận được 1 mảng
// Nếu rest nhận vào là 1 object thì sẽ nhận được 1 object

// Ví dụ 1: Nối Mảng
var array1 = ['JavaScript', 'PHP', 'Ruby'];

var array2 = ['ReactJS', 'Dart'];

var array3 = [];

// ES5
array3 = array1.concat(array2);

console.log(array3); // ['JavaScript', 'PHP', 'Ruby', 'ReactJS', 'Dart'];

// ES6: Spread (...)
array3 = [...array1, ...array2];
console.log(array3); // ['JavaScript', 'PHP', 'Ruby', 'ReactJS', 'Dart'];

// Ví dụ 2: Nối object
var object1 = {
    name: 'JavaScript'
};

var object2 = {
    price: 1000
}

var object3 = {
    ...object1,
    ...object2
}

console.log(object3); // {'JavaScript', price: 1000}

// Ví dụ 3: Dùng spread truyền tham số cho hàm
var array = ['JavaScript', 'PHP', 'Ruby'];

function logger(...rest) {
   for( var i =0; i < rest.length; i++) {
       console.log(rest[i])
   }
}

logger(...array); // JavaScript, PHP, Ruby\

/* 
    Rest paramters: lấy ra những phần còn lại.
    - Khi sử dụng với Destructuring hoặc khi định nghĩa tham số đó là Rest paramters

    Spread: 
    - Khi truyền đối số đó là Spread
*/