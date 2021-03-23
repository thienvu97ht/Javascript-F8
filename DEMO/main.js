
function Validator(options) {
    
    var selectoRules = {};

    // Lấy element của form cần valadate
    var formElement = document.querySelector(options.form);
    if(formElement) {
        options.rules.forEach(function (rule) {

            // Lưu lại các rule
            
            if (Array.isArray(selectoRules[rule.selector])) {
                selectoRules[rule.selector].push(rule.test)
            } else {
                selectoRules[rule.selector] = [rule.test];
            }

            var inputElement = formElement.querySelector(rule.selector);

            if(inputElement) {
                // Xử lý trường hợp blur ra khỏi input
                inputElement.onblur = function () {
                    var errorElement = inputElement.parentElement.querySelector('.form-message');

                    // Xác định giá trị người dùng nhập vào và truyền đối số vào hàm test
                    // và gán giá trị trả về cho biến errorMessage
                    var errorMessage;

                    // Lấy ra các rules của selector
                    var rules = selectoRules[rule.selector]

                    // Lặp qua từng rule & kiểm tra
                    // Nếu có lỗi thì dừng việc kiểm tra
                    for (var i = 0; i < rules.length; ++i) {
                        errorMessage = rules[i](inputElement.value);
                        if (errorMessage) break;
                    }

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
            return regex.test(value) ? undefined : message || 'Vui lòng nhập đúng email'
        }
    }
}

Validator.minLength = function (selector, minLength, message) {
    return {
        selector: selector,
        test: function(value) {
            return value.trim().length >= minLength ? undefined : message || 'Vui lòng nhập vào ít nhất 6 ký tự';
        }
    }
}

Validator.isConfirmed = function (selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function(value) {
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác';
        }
    }
}
