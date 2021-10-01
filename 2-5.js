/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns a + b 
 */
function my_sum(a, b) {
    return a + b;
}

/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns a - b
 */
function my_dif(a, b) {
    return a - b;
}

/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns a * b
 */
function my_mul(a, b) {
    return a * b;
}

/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns a / b
 */
function my_div(a, b) {
    return a / b;
}
/**
 * 
 * @param {number} arg1 
 * @param {number} arg2 
 * @param {"my_sum/my_dif/my_mul/my_div"} operation
 */
function mathOperation(arg1, arg2, operation) {
    let res;
    switch (operation) {
        case 'my_sum':
            return my_sum(arg1, arg2);
        case 'my_dif':
            return my_dif(arg1, arg2);
        case 'my_mul':
            return my_mul(arg1, arg2);
        case 'my_div':
            return my_div(arg1, arg2);
        default:
            alert('Неверное имя операции!');
            return null;
    }

}

let a = +prompt("Введите первое число:", 0);
let b = +prompt("Введите второе число:", 0);
let operation = prompt("Введите операцию (my_sum/my_dif/my_mul/my_div)");
let result = mathOperation(a, b, operation);
alert("Результат операции " + operation + " для значений аргументов" + a + ", " + b + " равен " + result);