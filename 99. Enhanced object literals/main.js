
// 1. Let, const --> OK
// 2. Template Literals --> OK
// 3. Multi-line String --> OK
// 4. Arrow function --> OK
// 5. Classes --> OK
// 6. Enhanced object liternals
// 7. Default paramter values
// 8. Destructuring
// 9. Rest paramters
// 10. Spread
// 11. Tagged template literal
// 12. Modules


// 1. Định nghĩa key: value cho object
// 2. Định nghĩa medthod cho object
// 3. Định nghĩa key cho object dưới dạng biến

// Ví dụ 1:
var name = 'Javascript';
var price = 1000;

// ES5
var course = {
    name: name,
    price: price,
    getName: function () {
        return name;
    }
}

// ES6
var course = {
    name,
    price,
    getName() {
        return name;
    }
}


console.log(course);

// Ví dụ 2:

var fieldName = 'name';
var fieldPrice = 'price';

// Đinh nghĩa key cho object dưới dạng biến
const course = {
    [fieldName]: 'Javascript',
    [fieldPrice]: 1000
};

