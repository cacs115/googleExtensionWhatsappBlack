console.log("Chrome Extension Log");
// window.onload = function (){
// window.addEventListener("onload", function(event){
//       // document ready

//
// });

function test(){
      // var body = document.getElementsByTagName("body");
      var liston = document.getElementsByClassName('_1FKgS')[0];
      var right_background = document.getElementsByClassName('_3qlW9')[0];
      var text_box_left = document.getElementsByClassName('_3j7s9');
      var image_left = document.getElementsByClassName('dIyEr');
//TextboxTitles
      var title_left = document.getElementsByClassName('_1wjpf');
      var title_left_2 = document.getElementsByClassName('_25Ooe');//Other type of title
      var subtitle_left = document.getElementsByClassName('_1bX-5');


      // console.log(right_background);
      liston.setAttribute("style", "background-image: linear-gradient(to bottom, black, #d2dbdc);");
      // body[0].setAttribute("style", "background-image: linear-gradient(to bottom, black, #d2dbdc);");
      right_background.setAttribute("style", "background-color:black");

      for (var i = 0; i < text_box_left.length; i++) {
        text_box_left[i].setAttribute("style", "background-image: linear-gradient(to bottom, black, #d2dbdc);");
        console.log(text_box_left[i]);
      }

      for (var i = 0; i < image_left.length; i++) {
        image_left[i].setAttribute("style", "background-image: linear-gradient(to bottom, black, #d2dbdc);");
      }

      for (var i = 0; i < title_left.length; i++) {
        title_left[i].setAttribute("style", "color:greenyellow;");
      }
      for (var i = 0; i < title_left_2.length; i++) {
        title_left_2[i].setAttribute("style", "color:greenyellow;");
      }
      for (var i = 0; i < subtitle_left.length; i++) {
        subtitle_left[i].setAttribute("style", "color:greenyellow;");
      }


console.log('test',right_background[0])
}
//
// var interval = setInterval(function() {
//     if(document.readyState === 'complete') {
//         clearInterval(interval);
//         test();
//     }
// }, 100);

var intervalvalues = setInterval(function() {
  x = document.getElementsByClassName('_3qlW9')[0];
    if(typeof x !== "undefined") {
      clearInterval(intervalvalues);
      test();

    }
}, 100);
