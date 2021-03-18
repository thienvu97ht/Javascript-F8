var courses = [
    {name: 'HTML, CSS'},
    {name: 'Javascript'},
    {name: 'Ruby'},
];

Array.prototype.map3 = function(param) {
    var arrayLength = this.length;
    var ouput = []
    for(var i = 0; i < arrayLength; i++) {
        var result = param(this[i]);
        ouput.push(result);
    }
    return ouput;
}

function myCallback(value) {
    return value.name
}

var course = courses.map3(myCallback);

console.log(course); // ['HTML, CSS', 'Javascript', 'Ruby']
