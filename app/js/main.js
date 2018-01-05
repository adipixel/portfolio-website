$(document).ready(function(){
  $.get("../footer.html", function(data) {
    $("#footer").html(data);
  });
  $.get("../header.html", function(data) {
    $("#header").html(data);
  });
});