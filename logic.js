$(document).ready(function() {
  
  $("#redBtn, #greenBtn, #blueBtn, #whiteBtn").click(function() {
    switch (this.id) {
      // changing background colors to red
      case "redBtn":
        {
          $("#redBox").css("background-color", "red");
          $("#greenBox").css("background-color", "red");
          $("#blueBox").css("background-color", "red");
        }
        break;
        // changing background colors to green
      case "greenBtn":
        {
          $("#greenBox").css("background-color", "green");
          $("#redBox").css("background-color", "green");
          $("#blueBox").css("background-color", "green");
        }
        break;
        // changing background colors to blue
      case "blueBtn":
        {
          $("#blueBox").css("background-color", "blue");
          $("#redBox").css("background-color", "blue");
          $("#greenBox").css("background-color", "blue");
        }
        break;
        // reseting background colors
      case "whiteBtn":
        {
          $("#redBox").css("background-color", "red");
          $("#greenBox").css("background-color", "green");
          $("#blueBox").css("background-color", "blue");
        }
        break;
    }
  });
});
