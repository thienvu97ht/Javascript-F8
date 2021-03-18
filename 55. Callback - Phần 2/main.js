// Callback - Phần 2

// 1. Là hàm
// 2. Truyền qua đối số
// 3. Được gọi lại (trong hàm nhận đối số)


Array.prototype.map2 = function(callback) {
    var arrayLength = this.length;
    var output = [];

    for(i = 0; i < arrayLength; i++){
        var result = callback(this[i], i);
        output.push(result);
    };

    return output;
};

var courses = [
    'Javascript',
    'PHP',
    'Ruby'
];

var htmls = courses.map2(function(course) {
    return `<h2>${course}</h2>`;
});

console.log(htmls.join('')); 

/** 
 * Cách phương thúc map() hoat động:
 * 
 * Lặp qua tất cả phần tử của array và mỗi lần lặp qua
 *  sẽ gọi lại phương thức được truyền vào qua đối số.
*/

// var htmls = courses.map2(function(course) {
//     return `<h2>${course}</h2>`;
// });

// console.log(htmls.join(''));

