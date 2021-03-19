
// DOM attributes

var headingElement = document.querySelector('h1');

// Thêm attribute vào element
headingElement.title ='Heading';
headingElement.setAttribute('class', 'heading');
headingElement.setAttribute('data', 'test data');

// Lấy attribute từ element
console.log(headingElement.getAttribute('title'));
console.log(headingElement.getAttribute('class'));
console.log(headingElement.getAttribute('data'));