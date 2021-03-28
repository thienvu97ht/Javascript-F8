// 1. Event listener --> OK
// 2. JSON  --> OK
// 3. Promise
//      - Sync --> OK
//      - Async --> OK
//      - Nỗi đau --> OK
//      - Lý thuyết, cách hoạt động --> OK
//      - Thực hành, ví dụ
// 4. Fetch
// 5. DOM location
// 6. Local storage
// 7. Session storage
// 8. Coding convention
// 9. Best Practices
// 10. Mistakes
// 11. Preformance

var users = [
    {
        id: 1,
        name: 'Kien Dam',
    },
    {
        id: 2,
        name: 'Son Dang',
    },
    {
        id: 3,
        name: 'Hung Dam',
    },
    // ...
];

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Anh Son chua ra video :('
    },
    {
        id: 2,
        user_id: 2,
        content: 'Vua ra xong oi!'
    },
];

// 1. Lấy comments
// 2. Từ comments lấy ra user_id
// 3. Từ user_id lấy ra user tương ứng

// Fake API

function getComments() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(comments);
        }, 1000);
    });
}

function getUsersByIds(userIds) {
    return new Promise(function(resolve, reject) {
        var result = users.filter(function(user) {
            return userIds.includes(user.id);
        });
        setTimeout(function() {
            console.log(result)
            resolve(result);
        }, 1000);
    });
}

getComments()
    .then(function(comments) {
        var userIds = comments.map(function(comment) {
            return comment.user_id
        });

        return getUsersByIds(userIds)
            .then(function(users) {
                return {
                    users: users,
                    comments: comments,
                };
            });
    })
    .then(function(data) {
        
        var commentBlock = document.getElementById('comment-block');

        var html = '';
        data.comments.forEach(function(comment) {
            var user = data.users.find(function(user) {
                return comment.user_id === user.id;
            });

            html += `<li>${user.name}: ${comment.content}</li>`;
        });

        commentBlock.innerHTML = html;
    })