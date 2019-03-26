$(document).ready(function() {
  $("button#black-background").click(function() {
    $("body").removeClass();
    $("body").addClass("black-background");
  });
  $("button#white-background").click(function() {
    $("body").removeClass();
    $("body").addClass("white-background");
  });
  $(".clickable1").click(function() {
    $("#p2").removeClass();
    $("#p3").removeClass();
    $("#p1").addClass("highlight");
  });
  $(".clickable2").click(function() {
    $("#p1").removeClass();
    $("#p3").removeClass();
    $("#p2").addClass("highlight");
  });
  $(".clickable3").click(function() {
    $("#p1").removeClass();
    $("#p2").removeClass();
    $("#p3").addClass("highlight");
  });
});
