$(document).ready(function() {
    var gameWidth = $('.game').width();
    var gameHeight = $('.game').height();
    var ballWidth = $('.ball').width();
    var ballHeight = $('.ball').height();
    var paddleHeight = $('.paddle').height();
    var paddleSpeed = 5;
    var ballSpeed = 5;
    var ballDirection = 1;
    var ballAngle = Math.random() * 2 - 1;
    var ballX = gameWidth / 2;
    var ballY = gameHeight / 2;
    var leftPaddleY = gameHeight / 2;
    var rightPaddleY = gameHeight / 2;
    var leftScore = 0;
    var rightScore = 0;
    
    function update() {
      // Update ball position
      ballX += ballSpeed * ballDirection;
      ballY += ballSpeed * ballAngle;
      
      // Check for collision with top/bottom walls
      if (ballY - ballHeight / 2 <= 0 || ballY + ballHeight / 2 >= gameHeight) {
        ballAngle = -ballAngle;
      }
      
      // Check for collision with left paddle
      if (ballX - ballWidth / 2 <= $('.paddle-left').width() &&
          ballY >= leftPaddleY - paddleHeight / 2 &&
          ballY <= leftPaddleY + paddleHeight / 2) {
        ballDirection = 1;
        ballAngle = (ballY - leftPaddleY) / (paddleHeight / 2);
      }
      
      // Check for collision with right paddle
      if (ballX + ballWidth / 2 >= gameWidth - $('.paddle-right').width() &&
          ballY >= rightPaddleY - paddleHeight / 2 &&
          ballY <= rightPaddleY + paddleHeight / 2) {
        ballDirection = -1;
        ballAngle = (ballY - rightPaddleY) / (paddleHeight / 2);
      }
      
    //   // Check for score
    //   if (ballX - ballWidth / 2 <= 0) {
    //     rightScore++;
    //     $('.)
    //   }
    }})