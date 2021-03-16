// 1. Là hàm
// 2. Được truyền qua đối số

function myFunction(param) {
    if (typeof param === 'function') {
        param('Học lập trình');
    }
}

function myCallback(value) {
    console.log('Value: ', value); // Value: Học lập trình
}

myFunction(myCallback);