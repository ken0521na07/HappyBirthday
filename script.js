let num = 0;
let count = 0;
const answers = ["happy", "birth", "day"];
function checkAnswer() {
  var inputText = $("#textInput").val().toLowerCase();
  if (inputText == answers[num]) {
    alert("正解！");
    if (num == 2) {
      $(".input").hide();
      $(".button").hide();
    }
    num += 1;
    // $(".ques" + num).css("opacity", 0.6);
    $(".ques" + (num + 1)).show();
  }

  $("#textInput").val("");
}
$(function () {
  $(".target").on("click", function () {
    count++;
    if (count === 5) {
      $(".main").hide();
      $(".clear").fadeIn(1000);
      count = 0; // カウントをリセット
    }
  });
});
