var users = [
    {
        name: 'Vũ',
        age: 18
    },
    {
        name: 'Tuấn',
        age: 20
    }
]

// var listName = user.forEach(function(item, index) {
//     console.log(index, item)
// })

Array.prototype.forEach2 = function(param) {
    var arrayLength = this.length;

    for(var i = 0; i < arrayLength; i++) {
        param(this[i])
    }
    
}

function myCallback(item) {
    console.log(item)
}

users.forEach2(myCallback);
