
// DOM events

// 1. Input / select
// 2. Key up / down

// Lấy ra value của thẻ input
var inputElement = document.querySelector('input[type="text"]');

// Chạy khi blur ra ngoài
inputElement.onchange = function(e) {
    console.log(e.target.value);
}

// Viết đến đâu lấy đến đó
inputElement.oninput = function(e) {
    console.log(e.target.value);
}

/* --------------------------------------------- */
// Kiểu tra checkbox thẻ input
var inputElement = document.querySelector('input[type="checkbox"]');

inputElement.onchange = function(e) {
    console.log(e.target.checked);
}


// Lấy ra value thẻ select
var inputElement = document.querySelector('select');

inputElement.onchange = function(e) {
    console.log(e.target.value);
}

// Lấy value nhập từ bàn phím
var inputElement = document.querySelector('input[type="text"]');

// Khi nhấn xuống sẽ được thực thi
inputElement.onkeydown = function(e) {
    console.log(e.target.value);
}

// Khi nhấc phím lên sẽ thực thi
inputElement.onkeyup = function(e) {
    console.log(e.target.value);
}

// Khi nhấn sẽ thực thi
document.onkeypress = function(e) {
    console.log(e.which)
    switch(e.which) {
        case 13:
            console.log('SEND CHAT');
            break;
    }
}