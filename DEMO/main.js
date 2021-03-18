var courses = [
    {name: 'HTML, CSS'},
    {name: 'Javascript'},
    {name: 'Ruby'},
    {name: 'PHP'},
    {name: 'NodeJS'},
];

// forEach() method
courses.forEach(function(course, index) {
    console.log(course);
    console.log(index);
})
/**
 * Cách forEach hoạt động
 * Duyệt qua từng phần tử của mảng và trả về phần tử đó
 */
var forEach2 = function(callback) {
    var arrayLength = this.length;

    for(var i = 0; i < arrayLength; i++) {
        var result = callback(this[i]);
        console.log(result);
    }
    return result;
}

courses.forEach2(function(course) {
    console.log(course)
    return course;
})

