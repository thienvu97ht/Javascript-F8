// forEach

// 1. Object prototype
// 2. For in
// 3. hasOwnProperty

Array.prototype.forEach2 = function (callback) {
    for(var index in this) {
        if(this.hasOwnProperty(index)) {
            callback(this[index], index, this)
        }
    }
}

var courses = [
    'Javascript',
    'PHP',
    'Ruby'
];

courses.forEach2(function(course, index, arrayOrigin) {
    console.log(course); // Javascript, PHP, Ruby
});