// 1. Event listener --> OK
// 2. JSON  --> OK
// 3. Promise
//      - Sync --> OK
//      - Async --> OK
//      - Nỗi đau --> OK
//      - Lý thuyết, cách hoạt động --> OK
//      - Thực hành, ví dụ --> OK
//      - Ứng dụng thực tế của Promise? --> OK
// 4. Fetch
//      - JSON server: API Server
// 5. DOM location
// 6. Local storage
// 7. Session storage
// 8. Coding convention
// 9. Best Practices
// 10. Mistakes
// 11. Preformance

var courseApi = "http://localhost:3000/courses";

fetch(courseApi)
    .then(function(response) {
        return response.json()
    })
    .then(function(courses) {
        console.log(courses)
    })