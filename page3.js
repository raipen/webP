function init_main3(){
}

function loop_main3(){
  $('#main0').append('<div class="contain1"><div class="contain"></div></div><div class="contain2"><div class="contain"></div></div><div class="contain3"></div>');
  "Merry".split("").forEach((e) => {
    draw_text1(e);
  });
  "Christmas!".split("").forEach((e) => {
    draw_text2(e);
  });
  $('.drawing>div').on("click",function(){
      redraw_text($(this));
  });
  $('.contain3').append("<span>This webpage was created to celebrate Christmas!<br>It was created by Ji-won Park(Student ID: 2021114335),<br>who's a freshman in Department of Computer Science<br>and Engineering(Global Software Convergence), Kyungpook National University.</span>");
}

function draw_text1(cha){
  var speed =(random(30,200)/100);
  var temp_html = '<div class="drawing"><div style="animation-duration:'+speed*2+'s"><span class="neon">'+cha+'</span></div></div>';
  $('.contain1>.contain').append(temp_html);
  $('.neon').last().css({"animation": "color ease-in-out "+speed+"s infinite alternate"});
}
function draw_text2(cha){
  var speed =(random(30,200)/100);
  var temp_html = '<div class="drawing"><div style="animation-duration:'+speed*2+'s"><span class="neon">'+cha+'</span></div></div>';
  $('.contain2>.contain').append(temp_html);
  $('.neon').last().css({"animation": "color ease-in-out "+speed+"s infinite alternate"});
}

function redraw_text(sel){
  console.log(sel.text());
  var speed =(random(30,200)/100);
  var cur = sel.after('<div style="animation-duration:'+speed*2+'s"><span class="neon" style="animation: color ease-in-out '+speed+'s infinite alternate;">'+sel.text()+'</span></div>');
  sel.remove();
  $('.drawing>div').on("click",function(){
      redraw_text($(this));
  });
}
