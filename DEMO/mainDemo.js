
var courseApi = 'http://localhost:3000/courses';

function start() {
    getCourses(renderCourses);
    handleCreateForm();
    document.querySelector('#update').style.display = 'none';
}

start();

// Functions

// Lấy danh sách khóa học từ API
function getCourses(callback) {
    fetch(courseApi)
        .then(function(response){
            return response.json()
        })
        .then(callback);
}

// Hàm tạo mới dữ liệu vào database
function createCourse(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data)
    };
    fetch(courseApi, options)
        .then(function(response) {
            return response.json()
        })
        .then(callback)
}

// Hàm sửa dữ liệu
function updateCourse(data, id) {
    var options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data) 
    };
    fetch(courseApi + '/' + id, options)
        .then(function(response) {
            return response.json()
        })
        .then(function() {
            getCourses(renderCourses);
        })
}

// Hàm xóa dữ liệu trong database
function handleDeleteCourse(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
          },
    };
    fetch(courseApi + '/' + id, options)
        .then(function(response) {
            return response.json()
        })
        .then(function() {
            var courseItem = document.querySelector('.course-item-' + id);
            if (courseItem) {
                courseItem.remove();
            }
        });
}

// Hàm render ra trình duyệt
function renderCourses(courses) {
    var listCoursesBlock = document.querySelector('#list-courses');
    var htmls = courses.map(function(course) {
        return `
            <li class="course-item-${course.id}">
                <h4>${course.name}</h4>
                <p>${course.description}</p>
                <button onclick="handleDeleteCourse(${course.id})">Xóa</button>
                <button onclick="handleUpdateCourse(${course.id})">Sửa</button>
            </li>
        `
    });
    listCoursesBlock.innerHTML = htmls.join('');
}


// Hàm xử lý lấy dữ liệu trong form
function handleCreateForm() {
    var createBtn = document.querySelector('#create');

    createBtn.onclick = function() {
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;

        var formData = {
            name: name,
            description: description
        }

        createCourse(formData, function() {
            getCourses(renderCourses);
        });

        document.querySelector('input[name="name"]').value = '';
        document.querySelector('input[name="description"]').value = '';

    };
}

// Hàm lấy value khóa học cũ
function getInfoCoures(id) {
    var itemCourse = document.querySelector('.course-item-' + id);
    var nameContent = itemCourse.querySelector('h4').innerHTML;
    var descriptionContent = itemCourse.querySelector('p').innerHTML;


    document.querySelector('input[name="name"]').value = nameContent;
    document.querySelector('input[name="description"]').value = descriptionContent;
}

//
function handleUpdateCourse(id) {
    getInfoCoures(id);
    
    var createBtn = document.querySelector('#create');
    var btnUpdate = document.querySelector('#update');

    createBtn.style.display = 'none';
    btnUpdate.style.display = 'block';

    btnUpdate.onclick = function() {
        var newName = document.querySelector('input[name="name"]').value;
        var newDescription = document.querySelector('input[name="description"]').value;

        var formData = {
            name: newName,
            description: newDescription
        }

        createBtn.style.display = 'block';
        btnUpdate.style.display = 'none';
        
        if (formData) {
            updateCourse(formData, id);
        }
        

        document.querySelector('input[name="name"]').value = '';
        document.querySelector('input[name="description"]').value = '';
    }

}