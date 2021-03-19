
// 1. Elemnet
// 2. Attribute
// 3. Text

// innerText, textContent

var headingElement = document.querySelector('.heading');

// Lấy ra text node - Geter
console.log(headingElement.innerText);
console.log(headingElement.textContent);

// Sửa đổi nội dung - Seter
headingElement.innerText = 'New heading';
headingElement.textContent = 'New heading';

// innerText: giống như những gì bạn nhìn thấy
// textContent: chính là những gì thực sự nằm trong text node