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
    $('#main1').append('<div class="tree_back" style="background-image:url(images/트리'+i+'.png); top:'+(25*(i==1?i-1:i-1.5))+'%"></div>');
  }
  $('.tree_back').last().css({"height":"25%"});
}

function add_item(){
  var colorstring = 'rgb('+random(220,255)+","+random(0,255)+","+random(0,30)+')';
  var ran = random(50,120);
  x = event.pageX-ran/2;
  y = event.pageY-ran/2;
  var item_type = ["cane","snow","ball","ball","ball","ball","ball","ball"];
  var ran_type = random(0,item_type.length-1);
  var item_html = '<span class="deco '+item_type[ran_type]
  +'" style="top:'+y+'px;'
  +'left:'+x+'px;';
  if(ran_type>1){
    item_html+='background-color: '+colorstring+';';
    var ball_type = ["star","stripe","snow2","dot","none","none"];
    var ball_size = [[10,20],[10,30],[20,40],[5,10],[0,0]];
    var ran_ball = random(0,ball_type.length-1);
    if(ran_ball==1){
      color1 = 'rgb('+random(0,50)+','+random(150,250)+','+random(0,50)+')';
      color2 = colorstring;
      per = random(30,50);
      item_html+='background-image: linear-gradient(to right,'+color1+' '+per+'%, '+color2+' '+per+'%);';
      item_html+='background-size:'+random(ball_size[ran_ball][0],ball_size[ran_ball][1])+'px 100%;';
    }
    else if(ran_ball<4){
      item_html+='background-image: url(images/'+ball_type[ran_ball]+'.png);';
      item_html+='background-size: '+random(ball_size[ran_ball][0],ball_size[ran_ball][1])+'px;';
    }
    item_html+='width:'+ran+'px; height:'+ran+'px;';
  }
  else{
    var rate = [572/350,529/484];
    item_html+='width:'+ran+'px; height:'+ran*rate[ran_type]+'px;';
  }
  item_html +='transform: scale(0)"></span>';
  $('#main1').append(item_html);
  setTimeout(function(){$('.deco').last().css({"transform": "scale(1)"});},30);
  setTimeout(function(){$('.deco').last().addClass('swing');},500);
}


function drop_item(min_cnt=1){
  if(random(min_cnt,15)<$('.deco').length){
    console.log("drop");
    var eqeq=random(0,$('.deco').length-min_cnt);
    $('.deco').eq(eqeq).css({"transition":"1s ease-out","top": "calc(100% + 100px)"});
    setTimeout(function(){
      $('.deco').eq(eqeq).remove();
    },1000);
  }
}
