$(document).ready(function() {
  $("button#black-background").click(function() {
    $("body").removeClass();
    $("body").addClass("black-background");
  });
  $("button#white-background").click(function() {
    $("body").removeClass();
    $("body").addClass("white-background");
  });
});
