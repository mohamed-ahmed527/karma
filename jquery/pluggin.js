$(document).ready(function(){
  $("header .container nav .container .menu").click(function(){
    $("header .container nav .container .list").slideToggle();
    $("header .container nav .container .extension").slideToggle();
  });
});