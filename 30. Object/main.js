// Object trong javascript

var myInfo = {
    'full-name': 'Son Dang',
    age: 18, 
    address: 'Ha Noi, VN'
};

// Thêm 1 cặp key - value
myInfo.email = 'sondn@fullstack.edu.vn';
myInfo['my-email'] = 'sondn@fullstack.edu.vn';

// Lấy value
console.log(myInfo['full-name']); // Son Dang
console.log(myInfo.age); // 18

// lấy ra value từ biến cho trước
var myKey = 'address';
console.log(myInfo[myKey]); // Ha Noi, VN

// Định nghĩa key mới từ biến cho trước
var emailKey = 'email';

var myInfo = {
    name: 'Son Dang',
    age: 18, 
    address: 'Ha Noi, VN',
    [emailKey]: 'sondn@fullstack.edu.vn'
};

console.log(myInfo.email); // sondn@fullstack.edu.vn

// Xóa 1 cặp key - value
delete myInfo.age;


// Value là 1 funtion
var myInfo = {
    name: 'Son Dang',
    age: 18, 
    address: 'Ha Noi, VN',
    [emailKey]: 'sondn@fullstack.edu.vn',
    getName: function() {
        return this.name;
    }
};
console.log(myInfo.getName()); // Son Dang

/**
 * Cách gọi tên key:
 * Function --> Phương thức / Method
 * Other --> Thuộc tính / Property
 */