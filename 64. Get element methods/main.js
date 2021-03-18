// HTML DOM

// 1. Element: ID, class, tag, CSS selector, HTML collection

// 2. Attribute
// 3. Text

// ID
var headingNode = document.getElementById('heading');

// Class
var headingNodes = document.getElementsByClassName('heading');

// Tag
var textNode = document.getElementsByTagName('p');

// CSS Selector (querySelector, querySelectorAll)
var headingNode = document.querySelector('#heading');
var heading2Node = document.querySelector('.box .heading2');
var heading2Nodes = document.querySelectorAll('.box .heading2');

// HTML collection
console.log(document.forms['form-1']);
console.log(document.forms['form-2']);
console.log(document.forms.testForm);

console.log(document.anchors);
console.log(document.images);