
function Validator(options) {
    // Lấy element của form cần valadate
    var formElement = document.querySelector(options.form);
    if(formElement) {
        options.rules.forEach(function (rule) {
            var inputElement = formElement.querySelector(rule.selector);
            if(inputElement) {
                // Xử lý trường hợp blur ra khỏi input
                inputElement.onblur = function () {
                    var errorElement = inputElement.parentElement.querySelector('.form-message');

                    // Xác định giá trị người dùng nhập vào và truyền đối số vào hàm test
                    // và gán giá trị trả về cho biến errorMessage
                    var errorMessage = rule.test(inputElement.value)

                    if(errorMessage) {
                        errorElement.innerText = errorMessage;
                        inputElement.parentElement.classList.add('invalid');
                    } else {
                        errorElement.innerText = '';
                        inputElement.parentElement.classList.remove('invalid');
                    }
                }

                // Xử lý khi người dùng nhập vào input
                inputElement.oninput = function() {
                    var errorElement = inputElement.parentElement.querySelector('.form-message');
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid');
                }
            }
        });
    }
}

Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function(value) {
            return value.trim() ? undefined : message || 'Vui lòng nhập trường này';
        }
    }
}

Validator.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function(value) {
            var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            return regex.test(value) ? undefined : 'Vui lòng nhập đúng email'
        }
    }
}

Validator.minLength = function (selector, minLength) {
    return {
        selector: selector,
        test: function(value) {
            return value.trim().length >= minLength ? undefined : 'Vui lòng nhập vào ít nhất 6 ký tự';
        }
    }
}

Validator.isConfirmed = function (selector) {
    return {
        selector: selector,
        test: function(value) {
        }
    }
}
