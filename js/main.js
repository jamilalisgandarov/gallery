jQuery(document).ready(function($) {
    var pics = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpeg"];
    for (i = 0; i < pics.length; i++) {
        var divs = $(".main")
            .append("<div><img src=" + pics[i] + "></div>")
            .children().addClass('pics')
    }
    $(".pics").click(function() {
        $(".overlay").css('display', 'block');
        var source = $(this).children().eq(0).attr("src");
        $(".overlay").append("<img src=" + source + ">")
    });

});
