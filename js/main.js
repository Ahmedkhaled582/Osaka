let aboutTop = $(".about").offset().top
let boxWidth = $("#colorBox").innerWidth()

$("#option").css({left : -`${boxWidth}`})
$(window).scroll(function(){
    let scrollTop = $(window).scrollTop()
    if(scrollTop > aboutTop - 50){
        $("#btnUp").fadeIn(500);
    }
    else{
        $("#btnUp").fadeOut(500);
    }

})

$("#btnUp").click(function(){
    $("html,body").animate({scrollTop: 0} , 400)
})

$(".clr-item").eq(0).css({backgroundColor: "chartreuse"})
$(".clr-item").eq(1).css({backgroundColor: "#09c"})
$(".clr-item").eq(2).css({backgroundColor: "orange"})
$(".clr-item").eq(3).css({backgroundColor: "red"})
$(".clr-item").eq(4).css({backgroundColor: "#888"})

$(".clr-item").click(function(e){
   let colorText =  $(e.target).css("backgroundColor")
   $("h1,h2,h3,h5,h6").css({color: colorText})
})

$("#option i").click(function(){
    if($("#option").css("left")=="0px"){
        $("#option").animate({left : -`${boxWidth}`} , 1000)
    }
    else{
        $("#option").animate({left : `0px`} , 1000)
    }
}) 