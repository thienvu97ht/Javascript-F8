
// ClassList property

// add
// contains
// remove
// toggle

var boxElement = document.querySelector('.box');

// Thêm class vào element
boxElement.classList.add('red', 'blue');

// Kiểm tra 1 class có tồn tại trong element
console.log(boxElement.classList.contains('red'));

// Xóa class trong element
boxElement.classList.remove('red');

// Kiểm tra element có class hay không?
// nếu có thì gỡ bỏ, không có thì thêm vào
setInterval(() => {
    boxElement.classList.toggle('red');
}, 500);