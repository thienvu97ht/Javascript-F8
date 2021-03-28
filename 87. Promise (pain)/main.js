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


setTimeout(function() {
    console.log(1); // Việc 1
    setTimeout(function() {
        console.log(2); // Việc 2
        setTimeout(function() {
            console.log(3); // Việc 3
            setTimeout(function() {
                console.log(4); // Việc 4
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);