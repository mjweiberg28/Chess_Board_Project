/**
 * Author: Micah Weiberg
 * Version: 05-01-19
 * JavaScript file to create the clickable buttons for the chess board
 */

/**
 * JQuery using AJAX and JS to change the color of the chessboard upon
 * clicking the two buttons. Each button click changes the colors of the
 * 8x8 grid and sends a POST request to display a pop-up that a button
 * was successfully clicked
 */
$(document).ready(function() {
    $("#black-button").click(function() {
        input_data = {}
        $('.white').css('background-color', 'black');
        $('.black').css('background-color', 'white');
        $.post("/buttonClick", input_data, function(output_data){
            alert(output_data);
        });
    });
    $("#white-button").click(function() {
        input_data = {}
        $('.white').css('background-color', 'white');
        $('.black').css('background-color', 'black');
        $.post("/buttonClick", input_data, function(output_data){
           alert(output_data);
        });
    });
});