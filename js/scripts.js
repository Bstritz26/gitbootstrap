$(function() {
    $(".carousel").carousel( { interval: 4000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause"); 
        }
    });
    $('#tradeButton').click(function() {
        $('#tradeModal').modal('show');
    })
    $('#buyButton').click(function() {
        $('#buyModal').modal('show');
    })
    $('#sellButton').click(function() {
        $('#sellModal').modal('show');
    })

    $('#loginButton').click(function() {
        $('#loginModal').modal('show');
    })
});