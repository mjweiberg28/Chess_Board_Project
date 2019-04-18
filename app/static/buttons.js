/**
 * Author: Micah Weiberg
 * Version: 04-18-19
 * JavaScript file to create the clickable buttons for the chess board
 */

let b = document.getElementsByClassName('black');
let w = document.getElementsByClassName('white');

/**
 * Function that changes the chess board cell color
 * @param color The color the top-leftmost cell is to be changed to
 */
function buttonClick(color) {
    if (color === 'black') {
        for (let i = 0; i < b.length; i++) {
            b[i].style.backgroundColor = 'white';
            w[i].style.backgroundColor = 'black';
        }
    }
    else if (color === 'white') {
        for (let i = 0; i < w.length; i++) {
            b[i].style.backgroundColor = 'black';
            w[i].style.backgroundColor = 'white';
        }
    }
}