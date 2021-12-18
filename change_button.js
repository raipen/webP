function random(min,max){
   return Math.floor(Math.random()*(max-min+1))+min;
 }
var loop = [loop_main4,loop_main1,loop_main2,loop_main3];
var isloop = [false,false,false,false];
var curMain = 0;
var nextMain = ["linear-gradient(to bottom, #008000, #004100)",
  "linear-gradient(to bottom, #000, #000010,rgba(0,0,50,1),rgba(0,0,70,1))",
  "linear-gradient(to right, #be4825 50%, #cf6f28 50%) 100%/30px 100%","#fff"];

function changeMain(){
  $('.main').addClass("disable");
  isloop[curMain] = false;
  $('#main'+curMain).empty();
  curMain = (curMain+1)%4;
  $('#main'+curMain).removeClass("disable");
  $("#button").css({"background":nextMain[curMain]});
  if(curMain==1){
      make_background();
  }
  isloop[curMain] = true;
  loop[curMain]();
}
