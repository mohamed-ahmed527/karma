$(document).ready(function() {
  $('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 0 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
  /***********dynamic tabs*******/
  $("#my-tabs li a").click(function(){
    var myID= $(this).attr("id");
    $(this).parent().parent().find("li a").removeClass("inactive")
    $(this).addClass("inactive");
    console.log(("#"+myID+"-content"));
    $(".list-parent .container >div").hide();
    $("#"+myID+"-content").fadeIn();
  });
});



