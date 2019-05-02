/**
 * Author: Micah Weiberg
 * Version: 05-02-19
 * JavaScript file to create the clickable button for the chessboard
 */

/**
 * Variable that keeps track of whether the button has been clicked, changing the
 * orientation of the chessboard grid colors
 * @type {boolean}
 */
let clicked = true;

/**
 * JQuery using AJAX and JS to change the color of the chessboard upon
 * clicking the button. Each button click changes the colors of the
 * 8x8 grid and sends a POST request to display a pop-up that a button
 * was successfully clicked
 */
$(document).ready(function() {
    $("#button").click(function() {
        input_data = {}
        // If-else statements to change the .white and .black CSS classes between black and white
        $('.white').css('background-color', clicked ? 'black' : 'white');
        $('.black').css('background-color', clicked ? 'white' : 'black');
        clicked = !clicked;
        $.post("/buttonClick", input_data, function(output_data){
            alert(output_data);
        });
    });
});