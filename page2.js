function init_main2(){
  $('#main2').on("click",function(){
    remove_santa();
    add_santa();
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

}

function add_santa(){

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
