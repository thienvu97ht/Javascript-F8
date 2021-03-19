
// 1. Elemnet
// 2. Attribute
// 3. Text

// innerHTML, outerHTML

var boxElement = document.querySelector('.box');

// Thêm 1 element node vào trong 1 element khác
boxElement.innerHTML = '<h1>Heading</h1>'

// Lấy ra nội dung htmls từ element
console.log(boxElement.innerHTML);

console.log(boxElement.outerHTML);