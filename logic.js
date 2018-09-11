$(document).ready(function() {
  
  $("#redBtn, #greenBtn, #blueBtn, #whiteBtn").click(function() {
    switch (this.id) {
      case "redBtn":
        {
          $("#redBox").css("background-color", "red");
          $("#greenBox").css("background-color", "red");
          $("#blueBox").css("background-color", "red");
        }
        break;
      case "greenBtn":
        {
          $("#greenBox").css("background-color", "green");
          $("#redBox").css("background-color", "green");
          $("#blueBox").css("background-color", "green");
        }
        break;
      case "blueBtn":
        {
          $("#blueBox").css("background-color", "blue");
          $("#redBox").css("background-color", "blue");
          $("#greenBox").css("background-color", "blue");
        }
        break;
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
