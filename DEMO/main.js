var course = {
    name: 'Javascript',
    coin: 250
}

var student = {
    name: 'Vũ',
    age: 18
}

student.sayHello = function (value) {
    console.log(value)
}

// student.sayHello('Mèo méo meo');

function meo(value) {
    if(value.trim()){
        return undefined
    } else {
        return 'Vui lòng nhập trường này'
    }
}

console.log(meo(' '));
