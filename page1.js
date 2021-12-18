var isDrag = false;
var isDraged = false;

function init_main1(){
  $('#main1').on("mousedown",function(){
    isDrag = true;
    console.log("mousedown");
  });
  $('#main1').on("mousemove",function(){
    if(isDrag){
      console.log("mousemove");
      isDrag = false;
      isDraged = true;
      $('#main1').addClass("strong-swing");
    }
  });
  $('#main1').on("mouseup",function(e){
    console.log("mouseup");
    isDrag = false;
    if(isDraged){
      isDraged = false;
      setTimeout(function(){
        drop_item();
        $('#main1').removeClass("strong-swing");
      },1250);
    }
    else{
      $('.ball').last().css({"transform": "scale(1)"});
      $('.ball').last().addClass('swing');
      add_item();
      drop_item(2);
    }
  });
}

function loop_main1(){

}

function make_background(){
  for(var i=5;i>0;i--){
    console.log("sadf");
    $('#main1').append('<div class="tree_back" style="background-image:url(images/트리'+i+'.png); top:'+(25*(i==1?i-1:i-1.5))+'%"></div>');
  }
  $('.tree_back').last().css({"height":"25%"});
}

function add_item(){
  var colorstring = 'rgb('+random(220,255)+","+random(0,255)+","+random(0,30)+')';
  var ran = random(50,120);
  x = event.pageX-ran/2;
  y = event.pageY-ran/2;
  $('#main1').append('<span class="ball" style="top: '+y+'px;left:'+x+'px;background-color: '+colorstring+';transform: scale(0)"></span>');
  $('.ball').last().css({"width": ran,"height":ran});
  setTimeout(function(){$('.ball').last().css({"transform": "scale(1)"});},30);
  setTimeout(function(){$('.ball').last().addClass('swing');},500);
}

function drop_item(min_cnt=1){
  if(random(min_cnt,10)<$('.ball').length){
    console.log("drop");
    var eqeq=random(0,$('.ball').length-min_cnt);
    $('.ball').eq(eqeq).css({"transition":"1s ease-out","top": "calc(100% + 100px)"});
    setTimeout(function(){
      $('.ball').eq(eqeq).remove();
    },1000);
  }
}
