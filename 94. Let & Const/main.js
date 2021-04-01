
// 1. Let, const
// 2. Template Literals
// 3. Multi-line String
// 4. Arrow function
// 5. Classes
// 6. Default paramter values
// 7. Destructuring
// 8. Rest paramters
// 9. Spread
// 10. Enhanced object liternals
// 11. Tagged template literal
// 12. Modules

// 1. Var / Let, Const: Scope, Hoisting
// 2. Const / Var, Let : Assignment

// Code block: if else, loop, {}, ...

// Giống nhau:
// 1. Đều có thể sử dụng để định nghĩa biến

// Khác nhau: Var / Let, Const
// 1. Phạm vi truy cập: 
//    - Var : Có thể truy cập từ ngoài scope
//    - Let, Const : Chỉ có thể truy cập trong scope
//
// 2. Hoisting: Chỉ có var được hỗ trợ hoisting

// Khác nhau: Const / Var, Let
// Const không cho phép gán lại giá trị khác của biến
// Var và Let gán lại được

// Code thuần: Var
// Babel: Const, Let
// Khi định nghĩa biến và không gán lại biến đó: Const
// Khi cần gán lại giá trị cho biến: Let

// Ví dụ 1:
const a = {
    name: 'Javascript'
};

a.name = 'PHP';

console.log(a.name) // PHP

// Ví dụ 2:
let isSuccess = false;

if(true) {
    isSuccess = false;
}