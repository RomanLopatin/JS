'use strict';

let figures = {
    11: '&#9814', 12: '&#9816', 13: '&#9815', 14: '&#9812', 15: '&#9813', 16: '&#9815', 17: '&#9816', 18: '&#9814', 19: '1',
    21: '&#9817', 22: '&#9817', 23: '&#9817', 24: '&#9817', 25: '&#9817', 26: '&#9817', 27: '&#9817', 28: '&#9817', 29: '2',
    39: '3', 49: '4', 59: '5', 69: '6',
    71: '&#9823', 72: '&#9823', 73: '&#9823', 74: '&#9823', 75: '&#9823', 76: '&#9823', 77: '&#9823', 78: '&#9823', 79: '7',
    81: '&#9820', 82: '&#9822', 83: '&#9821', 84: '&#9818', 85: '&#9819', 86: '&#9821', 87: '&#9822', 88: '&#9820', 89: '8',
    91: 'H', 92: 'G', 93: 'F', 94: 'E', 95: 'D', 96: 'C', 97: 'B', 98: 'A'
};
let cell;
let desk = ``;
let figure = '';
for (let i = 1; i <= 9; i++) {
    let line = ``;
    for (let j = 1; j <= 9; j++) {
        let cell_ind = (i == 9 || j == 9) ? 'sign' : (i + j) % 2;
        figure = (figures['' + i + j] !== undefined) ? figures['' + i + j] : "";
        cell = `<td class='cell cell_${cell_ind}'>${figure}</td>`;
        line += `${cell}`;
    }
    desk += `<tr class>${line}</tr>`;
}
let descStructure = `<table class = 'table'>${desk}</table >`;

document.body.insertAdjacentHTML('afterbegin', descStructure);