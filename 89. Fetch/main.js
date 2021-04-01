// 1. Event listener --> OK
// 2. JSON  --> OK
// 3. Promise
//      - Sync --> OK
//      - Async --> OK
//      - Nỗi đau --> OK
//      - Lý thuyết, cách hoạt động --> OK
//      - Thực hành, ví dụ --> OK
// 4. Fetch
// 5. DOM location
// 6. Local storage
// 7. Session storage
// 8. Coding convention
// 9. Best Practices
// 10. Mistakes
// 11. Preformance

// 1. Front-end: Xây dựng giao diện người dùng
// 2. Back-end: Xây dựng logic xử lý + Cơ sở dữ liệu

// API (URL) -> Application progaraming interface
// API là cổng giao tiếp giữa các phần mềm

// Backend -> API -> Fetch -> JSON/XML
// -> JSON.parse -> Javascript types
// -> Render ra giao diện với HTML

var postApi = 'https://jsonplaceholder.typicode.com/posts';

fetch(postApi)
    .then(function(response) {
        return response.json();
    })
    .then(function(post) {
        var htmls = post.map(function(post) {
            return `<li>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </li>`
        });
        
        var html = htmls.join('');
        document.getElementById('post-block').innerHTML = html;
    })
    .catch(function(err) {
        alert(err)
    })