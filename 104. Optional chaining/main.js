
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
// 11. Tagged template literal --> OK
// 12. Modules: Import / Export --> OK
// 13. Optional chaining (?.)


// Ví dụ 1: Sử dụng Optional chaining (?.) với Object
const obj = {
    name: 'Alice',
    cat: {
        name: 'Diana',
        cat2: {
            name: 'Diana 2',
            cat3: {
                name: 'Diana 3'
            }
        }
    },

    arr: [
        {
            id: 1,
            name: 'JavaScript',
        },
        {
            id: 2,
            name: 'PHP',
        }
    ],

    getName(value) { // Enhanced object liternals 
        console.log(value)
    }
};

if(
    // obj.cat &&
    // obj.cat.cat2 &&
    // obj.cat.cat2.cat3
    obj?.cat?.cat2?.cat3 // Optional chaining (?.)
) {
    console.log(obj.cat.cat2.cat3.name);
}

// Syntx (Cú pháp)
// Object []
obj['cat']?.['cat2']?.['cat3'];

// Array
obj.arr?.[0];

// Function
obj.func?.(args);
// Ví dụ: function
obj.getName?.(123)


