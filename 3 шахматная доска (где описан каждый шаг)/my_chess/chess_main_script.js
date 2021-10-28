'use strict';

let figures = {
    11: '&#9814', 12: '&#9816', 13: '&#9815', 14: '&#9812', 15: '&#9813', 16: '&#9815', 17: '&#9816', 18: '&#9814',
    21: '&#9817', 22: '&#9817', 23: '&#9817', 24: '&#9817', 25: '&#9817', 26: '&#9817', 27: '&#9817', 28: '&#9817',
    71: '&#9823', 72: '&#9823', 73: '&#9823', 74: '&#9823', 75: '&#9823', 76: '&#9823', 77: '&#9823', 78: '&#9823',
    81: '&#9820', 82: '&#9822', 83: '&#9821', 84: '&#9818', 85: '&#9819', 86: '&#9821', 87: '&#9822', 88: '&#9820',
};
let cell;
let desk = ``;
let figure = '';
for (let i = 1; i <= 8; i++) {
    let line = ``;
    for (let j = 1; j <= 8; j++) {
        figure = (figures['' + i + j] !== undefined) ? figures['' + i + j] : "";
        cell = `<td class='cell cell_${(i + j) % 2}'>${figure}</td>`;
        line += `${cell}`;
    }
    desk += `<tr>${line}</tr>`;
}
let descStructure = `<table>${desk}</table >`;

document.body.insertAdjacentHTML('afterbegin', descStructure);