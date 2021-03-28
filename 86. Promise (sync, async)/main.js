// 1. Event listener --> OK
// 2. JSON  --> OK
// 3. Promise
//      - Sync
//      - Async
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


// Sync / Async

// Sync: Đồng bộ là viết trước chạy trước, viết sau chạy sau
// Ví dụ: 
console.log(1);
console.log(2);


// Async: Bất đồng bộ là viết trước nhưng lại in ra sau
// Ví dụ:
setTimeout(function() {
    console.log(1);
}, 1000)

console.log(2);


// Một ví dụ về Async:

// setTimeout, setInterval, fetch, XMLHttpRequest, file reading,
// request animation frame
