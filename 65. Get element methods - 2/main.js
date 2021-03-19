// HTML DOM

// 1. Element: ID, class, tag, CSS selector, HTML collection

// 2. Attribute
// 3. Text

var listItemNodes = document.querySelectorAll('.box-1 li');


// Công việc 1: Sử dụng với `boxNode`
// ...
var boxNode = document.querySelector('.box-1');

// Công việc 2: Sử dụng tới các li element
// là con của `.box-1`
console.log(boxNode.querySelectorAll('li'));
console.log(boxNode.querySelector('p'));

