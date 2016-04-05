$(document).ready(function(){

  var mouseX, mouseY;
  var gameX = 100;
  var gameY = 100;

  $(document).mousemove(function(e){
    mouseX = e.clientX;
    mouseY = e.clientY;

  }).mouseover();



    $('#openings').bind('mouseenter', function () {
        this.bg = setInterval(function () {
              animBG();
          }, 25);

        this.hero = setInterval(function () {
        animImg();
          }, 10);
        }).bind('mouseleave', function () {
            this.bg && clearInterval(this.bg);
            this.hero && clearInterval(this.hero);
        });


      function animBG() {
        gameX -= 8;
        var position = gameX + 'px ' + gameY + '%';
        $('#openings').css('background-position', position);
       }

      function animImg() {
        $('#hero').css('top', function(){
          return mouseY;
        });
      }



});
