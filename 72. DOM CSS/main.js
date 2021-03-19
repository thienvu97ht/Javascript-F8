
// DOM style

var boxElement = document.querySelector('.box');

// Set CSS inline
boxElement.style.width = '100px';
boxElement.style.height = '200px';
boxElement.style.backgroundColor = 'red';


// Set CSS inline
Object.assign(boxElement.style, {
    width: '200px',
    height:  '100px',
    backgroundColor: 'green',
});

console.log(boxElement.style.width);