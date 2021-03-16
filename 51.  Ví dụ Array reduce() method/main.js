// reduce

var courses = [
    {
        id: 1, 
        name: 'Javascript',
        coin: 100
    },
    {
        id: 2, 
        name: 'HTML, CSS',
        coin: 200
    },
    {
        id: 3, 
        name: 'Ruby',
        coin: 220
    },
    {
        id: 4, 
        name: 'PHP',
        coin: 200
    },
    {
        id: 5, 
        name: 'ReactJS',
        coin: 400
    }
]
// Ví dụ 1:
var totalCoin = courses.reduce(function(total, course) {
    return total + course.coin
}, 0);
console.log(totalCoin) // 1120


// Ví dụ 2:
var numbers = [100, 200, 220, 200, 480];

var totalCoin = numbers.reduce(function(total, number) {
    return total + number
})
console.log(totalCoin) // 1200


// Flat - "Làm phảng" mảng từ Depth array - "Mảng sâu"
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

var flatArray = depthArray.reduce(function(flatOutput, depthItem) {
    return flatOutput.concat(depthItem)
}, [])
console.log(flatArray) // [1, 2, 3, 4, 5, 6, 7, 8, 9];


// Lấy ra các khóa học và đưa vào 1 mảng mới
var topics = [
    {
        topic: 'Front-end',
        courses: [
            {
                id: 1,
                title: 'HTML, CSS'
            },
            {
                id: 2,
                title: 'Javascript'
            }
        ]
    },
    {
        topic: 'Back-end',
        courses: [
            {
                id: 1,
                title: 'PHP'
            },
            {
                id: 2,
                title: 'NodeJS'
            }
        ]
    }
];

var newCourses = topics.reduce(function(courses, topic) {
    return courses.concat(topic.courses)
}, [])

console.log(newCourses)
/**
 * [{ id: 1, title: 'HTML, CSS'},
 * {id: 2, title: 'Javascript'},
 * {id: 1, title: 'PHP'},
 * {id: 2, title: 'NodeJS'}]
 */

var htmls = newCourses.map(function(course) {
    return `
        <div>
            <h2>${course.title}</h2>
            <p>ID: ${course.id}</p>
        </div>
    `;
})

console.log(htmls.join(''))
/**
 *  <div>
        <h2>HTML, CSS</h2>
        <p>ID: 1</p>
    </div>

    <div>
        <h2>Javascript</h2>
        <p>ID: 2</p>
    </div>
    
    <div>
        <h2>PHP</h2>
        <p>ID: 1</p>
    </div>
    
    <div>
        <h2>NodeJS</h2>
        <p>ID: 2</p>
    </div>
 */