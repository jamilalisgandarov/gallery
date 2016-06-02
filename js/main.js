jQuery(document).ready(function($) {
    var pics = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpeg"];
    for (i = 0; i < pics.length; i++) {
        var divs = $(".main")
            .append("<div><img src=" + pics[i] + "></div>")
            .children().addClass('pics')
    }
    $(".pics").click(function() {
        $(".main")
            .append("<div class='bigImg'><img src=" + $(this).children().eq(0).attr("src") + "></div>")
            .append("<div class='button' onclick='bla()'>X</div>");
    });

    function bla() {
        alert("salam mans")
    }



});
