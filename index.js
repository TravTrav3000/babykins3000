// Still working on getting this to work via <script> in the head, as opposed to injecting at the end of the 
//<body>

          // Function to change text color
          function changeColor(element, color) {
            element.style.color = color;
          }
        
          // Select all elements with the .link class (the entire button)
          const buttons = document.querySelectorAll('.link');
        
          // Attach event listeners to each button
          buttons.forEach(button => {
            button.addEventListener('mouseover', function() {
              // Change the color of the icons and text to black
              const iconsAndText = this.querySelectorAll('i, .button-text');
              iconsAndText.forEach(item => changeColor(item, '#000000'));
            });
        
            button.addEventListener('mouseout', function() {
              // Change the color of the icons back to white
              const iconsAndText = this.querySelectorAll('i');
              iconsAndText.forEach(item => changeColor(item, '#FFFFFF'));
            });

            button.addEventListener('mouseout', function() {
              // Change the color of the text back to #FF96D5
              const iconsAndText = this.querySelectorAll('.button-text');
              iconsAndText.forEach(item => changeColor(item, '#FF96D5'));
            });
          });
       