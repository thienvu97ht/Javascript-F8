// reduce

var courses = [
    {
        id: 1, 
        name: 'Javascript',
        coin: 100
    },
    {
        id: 2, 
        name: 'HTML, CSS',
        coin: 200
    },
    {
        id: 3, 
        name: 'Ruby',
        coin: 220
    },
    {
        id: 4, 
        name: 'PHP',
        coin: 200
    },
    {
        id: 5, 
        name: 'ReactJS',
        coin: 400
    }
]

function coinHandler(accumulator, currentValue, currentIndex, originArray) {
    return accumulator + currentValue.coin
}

var totalCoin = courses.reduce(coinHandler, 0);

console.log(totalCoin); // 1120

/**
 * accumulator: Biến tích trữ
 * currentValue: Giá trị hiện tại
 * currentIndex: Chỉ mục hiện tại
 * originArray: Array gốc
 */


// Bài 1:
var numbers = [1, 2];

function sum(numbers) {
    var total = numbers.reduce(function(a, b) {
        return a + b
    }, 0)
    return total;
}

console.log(sum(numbers)) // 3

// Bài 2:
var inputs = [1, 2, function() {}, NaN];

function sumNumbers(inputs) {
    return inputs.reduce(function(total, currentValue) {
        if(typeof currentValue === 'number' && isNaN(currentValue) === false)
        {
            return total + currentValue;
        } else
            return total + 0;
    }, 0);
}

console.log(sumNumbers(inputs)) // 3

// Bài 3:
var inputs = [1, 2, 3, 4];

Array.prototype.reduce2 = function(myCallback, initialValue) {
    if (initialValue == undefined) {
        initialValue = 0;
    }
    var total = initialValue;
    for (var item of this) {
        total = myCallback(total, item);
    }
    return total;
}
