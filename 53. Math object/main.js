// Math object

// Math.PI
console.log(Math.PI); // 3.14592...

// Math.round()
console.log(Math.round(1.3)); // 1
console.log(Math.round(1.8)); // 2
console.log(Math.round(1.5)); // 2

// Math.abs()
console.log(Math.abs(4)); //4
console.log(Math.abs(-4)); // 4

// Math celi()
console.log(Math.ceil(4.0000000001)); // 5
console.log(Math.ceil(5.1)); // 6

// Math floor()
console.log(Math.floor(4.99999999)); // 4
console.log(Math.floor(5.1)); // 5

// Math random()
console.log(Math.random());

// Ví dụ 1:
console.log(Math.floor(Math.random() * 10)); // Số ngẫu nhiên từ 0 - 9

// Ví dụ 2:
var ramdom = Math.floor(Math.random() * 5); // Số ngẫu nhiên từ 0 - 4

var bonus = [
    '10 coin',
    '20 coin',
    '30 coin',
    '40 coin',
    '50 coin'
];
console.log(bonus[ramdom]);

// Ví dụ 3:
var ramdom = Math.floor(Math.random() * 100); // Số ngẫu nhiên từ 0 - 99

if(ramdom < 5) {
    console.log('Cường hóa thành công!')
} else {
    console.log('Cường hóa thất bại!')
} 