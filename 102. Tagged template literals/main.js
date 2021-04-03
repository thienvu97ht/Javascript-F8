
// 1. Let, const --> OK
// 2. Template Literals --> OK
// 3. Multi-line String --> OK
// 4. Arrow function --> OK
// 5. Classes --> OK
// 6. Enhanced object liternals --> OK
// 7. Default paramter values --> OK
// 8. Destructuring --> OK
// 9. Rest paramters (...) --> OK
// 10. Spread (...) --> OK
// 11. Tagged template literal
// 12. Modules

function highlight([first,...strings], ...values) {
    return values.reduce((acc, curr) => 
        [...acc, `<span>${curr}</span>`, strings.shift()], [first]).join('');
}

var brand = 'F8';
var course = 'Javascript';

const html = highlight`Học lập trình ${course} tại ${brand}!`;

console.log(html);

