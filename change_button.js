function random(min,max){
   return Math.floor(Math.random()*(max-min+1))+min;
 }

var curMain = 0;
var nextMain = ["linear-gradient(to bottom, #008000, #004100)",
  "linear-gradient(to bottom, #000, #000010,rgba(0,0,50,1),rgba(0,0,70,1))",
  "linear-gradient(to right, #be4825 50%, #cf6f28 50%) 100%/30px 100%","#fff"];
function changeMain(){
  $('.main').addClass("disable");
  $('#main'+curMain).empty();
  curMain = (curMain+1)%4;
  $('#main'+curMain).removeClass("disable");
  $("#button").css({"background":nextMain[curMain]});
  console.log("!");
  init_main[curMain]();
}
