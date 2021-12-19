function init_main2(){
  $('#main2').on("click",function(){
    var dur = random(7,12);
    add_santa(dur);
    setTimeout(function(){
      remove_santa();
    },dur*1000);
  });
}

function loop_main2(){
  if(isloop[2]){
    setTimeout(function(){
      twinkle_star();
      delete_star(20,50);
      loop_main2();
    },random(50,300));
  }
}

function remove_santa(){
  console.log("delete santa");
  $('.santa').first().remove();
}

function add_santa(dur){
  console.log("santa");
  var x = event.pageX;
  var y = event.pageY;
  console.log("santa");
  var size = random(20,35)/100;
  var dir_type = ["normal","reverse"];
  var dir = dir_type[random(0,1)];
  $('#main2').append('<div class="santa" style="top: '+y+'px;left:'+x+'px;"></div>');
  $('.santa').last().css({
    "background-image": 'url("images/santa_'+dir+'.png")',
    "width": (window.innerWidth*size)+"px",
    "height":(window.innerWidth*size*234/626)+"px",
    "animation-name":"move"+random(1,3),
    "animation-duration": dur+"s",
    "animation-direction": dir
  });
}


var color = ['skyblue','blue','yellow','purple'];

function twinkle_star(){
  console.log("tw");
  size = random(0,20)/100;
  ran_col = random(0,3);
  x = random(0,window.innerWidth);
  y = random(0,window.innerHeight);
  $('#main2').append('<span class="star" style="top: '+y+'px;left:'+x+'px;"></span>');
  $('.star').last().css({"width": (340*size)+"px","height":(400*size)+"px"});
  $('.star').last().addClass('shadow_'+color[ran_col]);
}

function delete_star(min_cnt,max_cnt){
  if(random(min_cnt,max_cnt)<$('.star').length){
    console.log("drop");
    var eqeq=random(0,$('.star').length-1);
    $('.star').eq(eqeq).css({"width":"scale(0)"});
    setTimeout(function(){
      $('.star').eq(eqeq).remove();
    },45);
  }
}
