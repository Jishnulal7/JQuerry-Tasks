$(document).ready(function() {
    var colors = ['red', 'blue', 'yellow', 'lightgrey', 'darkorchid', 'black', 'orange', 'deeppink', 'green', 'purple', 'saddlebrown', 'lightseagreen', 'deepskyblue', 'firebrick', 'crimson'];
    var rowSize = 10;
    var rows = 0;
    var balls = [];
    
    $('#start').click(function() {
      var interval = setInterval(function() {
        var color = colors[Math.floor(Math.random() * colors.length)];
        var ball = $('<div class="ball ' + color + '"></div>');
        balls.push(ball);
        $('.basket').append(ball);
        if (balls.length % rowSize == 0) {
          rows++;
          $('.basket').css('height', (rows * 40) + 'px');
        }
        if (rows >= 5) {
          clearInterval(interval);
        }
      }, 1000);
    });
  });
  