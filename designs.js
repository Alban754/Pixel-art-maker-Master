// From ideas gotten from the course material,stackoverflow and knowledge,
// The following code is established using jQuery
$(function() {
    // Select color input
    // Definition of varaiables using jQuery selector
    const submitButton = $('#sizePicker');
    const color = $('#colorPicker');
    const canvas = $('#pixelCanvas');
  
    // The featurw drag-to-draw is added to faciliate fast drawing
    let drag = null;
  
    // When size is submitted by the user, call makeGrid()
    // When the submit button is clicked, makeGrid is called
    // event.preventDefault helps to stop the default action of the submitbutton
    submitButton.submit(function(event) {
      event.preventDefault();
      makeGrid();
    });
    /**
      * @description Creates an empty grid
      */
    function makeGrid() {
      const heightValue = $('#inputHeight').val();
      const widthValue = $('#inputWidth').val();
  
      // If there are already colored squares in the grid,
      // clicking the Submit button clears them out
      canvas.children().remove();
  
      // Select size input
      // A nested for loop is created to help make rows and
      // columns for the grid to be created
      for (i = 0; i < heightValue; i++) {
        const heightV = $('<tr></tr>');
        canvas.append(heightV);
        for (j = 0; j < widthValue; j++) {
          const widthV = $('<td></td>');
          heightV.append(widthV);
        }
      }
  
      // Event listeners are properly added to the grid squares
      // Choosing a color from the color selector and clicking on a grid
      // square causes that grid square (and only that square) to change color
      canvas.on('click', 'td', function() {
        $(this).css('background-color', color.val());
      });
  
      // To be able to remove colour or change it back to white,
      // mouse double click will help do that
      canvas.on('dblclick', 'td', function() {
        $(this).css('background-color', 'rgba(0, 0, 0, 0)');
      });
  
      // To facilitate easy drawing, a drag to draw feature is added
      // Putting the mousedown and dragging helps color many squares at a time
      canvas.on('mousedown', 'td', function() {
        drag = true;
      });
  
      // When mouse is being moved, it colors the grid on click-and-drag
      canvas.on('mousemove', 'td', function(event) {
        event.preventDefault();
        if (drag) {
          $(this).css('background-color', color.val());
        }
      });
  
      // Stop coloring when the mouse is up
      // This is to prevent continous coloring of cells
      canvas.on('mouseup', function() {
        drag = null;
      });
    }
  });
