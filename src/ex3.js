<html>
  <head>
    <title>Jumping Square</title>
  </head>
  <body>
    <canvas id="gameCanvas" width="400" height="400"></canvas>
    <script>
      // Get the canvas and 2d context
      const canvas = document.getElementById('gameCanvas');
      const ctx = canvas.getContext('2d');

      // Define the square properties
      const square = {
        x: 50, // Initial X position
        y: canvas.height - 50, // Initial Y position
        width: 30,
        height: 30,
        jumpHeight: 100,
        jumping: false,
        jumpStartY: 0,
        jumpSpeed: 5,
      };

      // Handle user input
      window.addEventListener('keydown', (e) => {
        if (e.code === 'Space' && !square.jumping) {
          square.jumping = true;
          square.jumpStartY = square.y;
        }
      });

      // Update and draw the square
      function update() {
        if (square.jumping) {
          square.y -= square.jumpSpeed;
          if (square.y <= square.jumpStartY - square.jumpHeight) {
            square.jumping = false;
          }
        } else {
          square.y += square.jumpSpeed;
          if (square.y > canvas.height - square.height) {
            square.y = canvas.height - square.height;
          }
        }
      }

      function draw() {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw the square
        ctx.fillStyle = 'blue';
        ctx.fillRect(square.x, square.y, square.width, square.height);

        // Request the next frame
        requestAnimationFrame(gameLoop);
      }

      function gameLoop() {
        update();
        draw();
      }

      // Start the game loop
      gameLoop();
    </script>
  </body>
</html>