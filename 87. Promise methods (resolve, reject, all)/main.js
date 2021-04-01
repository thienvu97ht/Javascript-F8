// 1. Event listener --> OK
// 2. JSON  --> OK
// 3. Promise
//      - Sync --> OK
//      - Async --> OK
//      - Nỗi đau --> OK
//      - Lý thuyết, cách hoạt động
//      - Thực hành, ví dụ
// 4. Fetch
// 5. DOM location
// 6. Local storage
// 7. Session storage
// 8. Coding convention
// 9. Best Practices
// 10. Mistakes
// 11. Preformance

function sleep(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
}

sleep(1000)
    .then(function() {
        console.log(1);
        return sleep(1000);
    })
    .then(function() {
        console.log(2);
        return new Promise(function(resolve, reject) {
            reject('Co loi');
        })
    })
    .then(function() {
        console.log(3);
        return sleep(1000);
    })
    .then(function() {
        console.log(4);
        return sleep(1000);
    })
    .catch(function(err) {
        console.log(err);
    })


// 1. Promise.resolve
// 2. Promise.reject
// 3. Promise.all

var promise = Promise.resolve('Succsess!');

promise
    .then(function (result) {
        console.log('result: ', result);
    })
    .catch(function (err) {
        console.log('err: ', err);
    })