
// 1. Let, const --> OK
// 2. Template Literals --> OK
// 3. Multi-line String --> OK
// 4. Arrow function
// 5. Classes
// 6. Default paramter values
// 7. Destructuring
// 8. Rest paramters
// 9. Spread
// 10. Enhanced object liternals
// 11. Tagged template literal
// 12. Modules


// Ví dụ 1:
// Expression Function
const logger = function(log) {
    console.log(log);
};

// Arrow function
const logger = (log) => {
    console.log(log);
};

// Ví dụ 2: return
const sum = (a, b) => {
    return a + b;
};

const sum = (a, b) => a + b;

// Ví dụ 3: return Object
const sum = (a, b) => {
    return {
        a: a,
        b: b
    };
};

const sum = (a, b) => ({ a: a, b: b});

// Ví dụ 4:
const course = {
    name: 'Javascript',
    getName: function() {
        return this.name; // this là context
    }
};

const course = {
    name: 'Javascript',
    getName: () => { // Lỗi
        return this.name; // this là context
    }
};


// Arrow function không có function, 
// nếu sử dụng arrow function trong trường hợp này sẽ lỗi


// Ví dụ 5:
const Course = function(name, price) {
    this.name = name;
    this.price = price;
};

const jsCourse = new Course('Javascript', 1000);

// Arrow funtion không thể sử dụng làm function constructor
const Course = (name, price) => { // Lỗi
    this.name = name;
    this.price = price;
};