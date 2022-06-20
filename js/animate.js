$(document).ready(function() {
  $('.fadeInLine').children().css('opacity','0');  
  
    var divArr = [];

    $('.fadeInLine').children().each(function() {
        divArr.push($(this));
    })

    function animate() {
        $currentDiv = divArr.shift();
        $currentDiv.animate({
            'opacity': '1'
        }, 500);
        if (divArr.length) {
            setTimeout(animate, 500);
        }
    }
    animate();
})