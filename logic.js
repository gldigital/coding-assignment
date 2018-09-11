$(document).ready(function() {
  // Change boxes to red
  $("#redBtn").click(function() {
    $("#redBox").css("background-color", "red");
    $("#greenBox").css("background-color", "red");
    $("#blueBox").css("background-color", "red");
  });

  // Change boxes to green
  $("#greenBtn").click(function() {
    $("#greenBox").css("background-color", "green");
    $("#redBox").css("background-color", "green");
    $("#blueBox").css("background-color", "green");
  });

  // Change boxes to blue
  $("#blueBtn").click(function() {
    $("#blueBox").css("background-color", "blue");
    $("#redBox").css("background-color", "blue");
    $("#greenBox").css("background-color", "blue");
  });

  // Reset box colors
  $("#whiteBtn").click(function() {
    $("#redBox").css("background-color", "red");
    $("#greenBox").css("background-color", "green");
    $("#blueBox").css("background-color", "blue");
  });
});
