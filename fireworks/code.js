let emitter=document.getElementById('emitter');
emitter.yPos=98;
let intCo = setInterval(function(){(emitter.yPos<10?clearInterval(intCo):emitter.yPos--);emitter.style.top(a+'vh');
},10);
/*
function myMove() {
    var elem = document.getElementById("myAnimation");
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++;
        elem.style.top = pos + 'px';
        elem.style.left = pos + 'px';
      }
    }
  }*/