// 1. Event listener --> OK
// 2. JSON  --> OK
// 3. Promise
//      - Sync --> OK
//      - Async --> OK
//      - Nỗi đau
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


// 1. Khởi tạo new Promise
// 2. Executor

var promise = new Promise(
    // Executor
    function(resolve, reject) {
        // Logic
        // Thành công: resolve()
        // Thất bại: reject()
    }
); 

promise
    .then(function() {
        
    })
    .catch(function() {
        
    })
    .finally(function() {
        
    });


// 1. Promise sinh ra để xử lý các thao tác bất đồng bộ.
// 2. Trước khi có promise chúng ta thường sử dụng callback và callback
//    có thể xảy ra 1 vấn đề đó là callback hell.
// 3. Promise được sinh ra từ phiên bản es6 và chúng ta có thể dùng nó
//    để khác phục tình trạng callback hell.
// 4. Để tạo ra 1 promise chúng ta sử dụng từ khóa new Promise và trong 
//    constructor của nó chúng ta sẽ truyền vào 1 executor function, 
//    trong executor function chúng ta sẽ nhận được 2 tham số là resolve và reject.
// 5. resolve được gọi khi thành công, reject được gọi khi thất bại
// 6. Sau khi đối tượng promise được tạo ra chúng ta có thể sử dụng qua các 
//    phương thức .then() .catch()
// 7. then và catch đều nhận các callback function và then sẽ được thực thi
//    khi promise được resolve, và sẽ lọt vào catch khi reject 