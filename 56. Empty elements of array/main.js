// forEach, find, filter, some, every, reduce

var courses = new Array(10);

courses.push('Javascript', 'PHP');

console.log(courses);

for (var index in courses) {
    console.log(courses[index]); // Javascript, PHP
}