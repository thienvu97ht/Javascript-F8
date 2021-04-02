
// 1. Let, const --> OK
// 2. Template Literals --> OK
// 3. Multi-line String --> OK
// 4. Arrow function --> OK
// 5. Classes --> OK
// 6. Enhanced object liternals --> OK
// 7. Default paramter values
// 8. Destructuring
// 9. Rest paramters
// 10. Spread
// 11. Tagged template literal
// 12. Modules


// ES5
function logger(log) {
    if (typeof log === 'undefined') {
        log = 'Giá trị mặc định';
    };
    console.log(log);
}


// ES6
function logger(log = 'Giá trị mặc định') {
    console.log(log);
}

logger() // Giá trị mặc định