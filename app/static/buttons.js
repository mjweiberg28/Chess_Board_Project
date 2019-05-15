/**
 * Author: Micah Weiberg
 * Version: 05-15-19
 * JavaScript file to create the clickable buttons for the chessboard
 */

/**
 * JQuery using AJAX and JS to change the color of the chessboard upon
 * clicking the buttons. Each button click sends a POST request to
 * views/__init__.py to change the colors of the 8x8 chessboard grid
 */
$(document).ready(function() {
    // When "Switch Tile Colors" button is clicked, send POST to View with clicked = true
    $("#black-button").click(function() {
        let input_data = {'clicked': true}
         $.post('/buttonClick', input_data, function(output_data) {
             document.getElementById('board').innerHTML = output_data;
         });
    });
    // When "Return to Original" button is clicked, send POST to View with clicked = false
    $("#white-button").click(function() {
        let input_data = {'clicked': false}
        $.post('/buttonClick', input_data, function(output_data) {
            document.getElementById('board').innerHTML = output_data;
         });
    });
});