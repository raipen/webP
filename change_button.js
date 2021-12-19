function random(min,max){
   return Math.floor(Math.random()*(max-min+1))+min;
 }
var loop = [loop_main3,loop_main1,loop_main2];
var isloop = [false,false,false];
var curMain = 0;
var nextMain = ["linear-gradient(to bottom, #008000, #004100)",
  "linear-gradient(to bottom, #000, #000010,rgba(0,0,50,1),rgba(0,0,70,1) 50%)",
  "linear-gradient(to right, #be4825 50%, #cf6f28 50%) 100%/30px 100%"];

function changeMain(){
  $('#main'+curMain).addClass("disable");
  isloop[curMain] = false;
  curMain = (curMain+1)%3;
  $('#main'+curMain).removeClass("disable");
  $('#main'+((curMain+1)%3)).removeClass("disable");
  $('#main'+curMain).removeClass("back");
  $('#main'+((curMain+1)%3)).addClass("back");
  $('#main'+((curMain+1)%3)).empty();
  $("#button").css({"background":nextMain[curMain]});
  if(curMain==1){
      make_background();
  }
  isloop[curMain] = true;
  loop[curMain]();
}
