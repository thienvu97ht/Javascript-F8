
// 1. Let, const --> OK
// 2. Template Literals --> OK
// 3. Multi-line String --> OK
// 4. Arrow function --> OK
// 5. Classes
// 6. Default paramter values
// 7. Destructuring
// 8. Rest paramters
// 9. Spread
// 10. Enhanced object liternals
// 11. Tagged template literal
// 12. Modules

// Ví dụ:
// Function Constructor
function Course(name, price) {
    this.name = name;
    this.price = price;

    this.getName = function() { 
        return this.name;
    }

    const isSuccess = false;
}

// Class
class Course {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getName() { 
        return this.name; 
    }

    run() {
        var isSuccess = false;

        if (true) {
            isSuccess = true;
        }
    }

}

const phpCourse = new Course('PHP', 1000);
const jsCourse = new Course('Javascript', 1200);

console.log(phpCourse);
console.log(jsCourse);