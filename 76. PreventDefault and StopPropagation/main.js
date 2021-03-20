
// DOM events

// 1. prevenDefault
// 2. stopPropagation


// Ví dụ 1: Ngăn không cho người dùng chuyển trang
var aElements = document.links;

for(var i = 0; i < aElements.length; ++i) {
    aElements[i].onclick = function(e) {
        
        if(!e.target.href.startsWith('https://f8.edu.vn')) {
            e.preventDefault();
        }
    }
}

// Ví dụ 2:
var ulElement = document.querySelector('ul');

ulElement.onmousedown = function(e) {
    e.preventDefault();
}

ulElement.onclick = function(e) {
    console.log(e.target);
}

// Ví dụ 3:
document.querySelector('div').onclick = function(e) {
    console.log('DIV');
}

document.querySelector('button').onclick = function(e) {
    e.stopPropagation();
    console.log('Click me!');
}