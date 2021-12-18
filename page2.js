function init_main2(){

}

function loop_main2(){
  if(isloop[2]){
    setTimeout(function(){
      twinkle_star();
      loop_main2();
    },random(50,300));
  }
}

function twinkle_star(){
  console.log("tw");
  x = random(0,window.innerWidth);
  y = random(0,window.innerHeight);
  $('#main2').append('<span class="ball" style="top: '+y+'px;left:'+x+'px;background-color: #fff;transform: scale(1)"></span>');
  $('.ball').last().css({"width": "100px","height":"100px"});
}
