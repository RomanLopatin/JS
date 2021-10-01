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

let a = +prompt("Введите первое число:", 0);
let b = +prompt("Введите первое число:", 0);
alert(a + " + " + b + " = " + my_sum(a, b));
alert(a + " - " + b + " = " + my_dif(a, b));
alert(a + " * " + b + " = " + my_mul(a, b));
alert(a + " / " + b + " = " + my_div(a, b));