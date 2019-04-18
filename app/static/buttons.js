/**
 * Author: Micah Weiberg
 * Version: 04-16-19
 * Description: JavaScript file to create the clickable buttons for the chess board
 */

/**
 * Function that changes the chess board cell color
 * @param element The HTML element that is being altered
 * @param color The color the cell is to be changed to
 */
function changeColor(element, color) {
    element.style.backgroundColor = color;
}

let clr = new changeColor(this, 'white');