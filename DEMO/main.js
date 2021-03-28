var users = [
    {
        id: 1,
        name: 'Vu'
    },
    {
        id: 2,
        name: 'Phong'
    },
    {
        id: 3,
        name: 'Tuấn'
    }
]

var userIds = [1, 2]

var result = users.filter(function(user) {
    // Lặp qua userIds, chỉ trả về giá trị true
    return userIds.includes(user.id)
});

console.log(result);