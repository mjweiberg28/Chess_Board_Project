/**
 * Author: Micah Weiberg
 * Version: 04-23-19
 * JavaScript file to create the clickable buttons for the chess board
 */

// Defines variable to the table headings with the "black" class for black tiles
let b = document.getElementsByClassName('black');
// Defines variable to the table headings with the "white" class for white tiles
let w = document.getElementsByClassName('white');

// This is in JavaScript format and currently incomplete
// Needs to be finished in JQuery format
// function loadDoc(url, callFunction) {
//     let xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         if (this.readyState === 4 && this.status === 200) {
//             callFunction(this);
//         }
//     };
//     xhttp.open("POST", url, true);
//     xhttp.send();
// }

/**
 * Function that changes the chess board cell color
 * @param color The color the top-leftmost cell is to be changed to
 */
function buttonClick(color) {
    /* When the 'Switch Tile Colors' button is pressed ("color = black" button),
        the tiles (table headings) that are under the "black" class are changed
         to white and the tiles under the "white" class are changed to black
     */
    if (color === 'black') {
        for (let i = 0; i < b.length; i++) {
            b[i].style.backgroundColor = 'white';
            w[i].style.backgroundColor = 'black';
        }
    }
    /* When the 'Return to Original Configuration button is pressed ("color = white" button),
        the tiles that are under the "white" class are changed to black and the
        tiles under the "black" class are changed to white
     */
    else if (color === 'white') {
        for (let i = 0; i < w.length; i++) {
            b[i].style.backgroundColor = 'black';
            w[i].style.backgroundColor = 'white';
        }
    }
}