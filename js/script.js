console.log("halo world");

/*
var backgrounds  = document.querySelectorAll('.bg'),
        faSquares = document.querySelectorAll('.fa-square');
for (i = 0; i < 4; i++) {
    faSquares[i].addEventListener('click',
        function() {
            for (var j = 0; j < 4; j++) {
                faSquares[j].classList.remove("active-square");
                backgrounds[j].classList.remove("active-slide");
            }
            var hrefValue = this.getAttribute("href");
            var target = document.querySelector(hrefValue);
            target.className += " active-slide";
            this.className += " active-square";
        });
}
*/


var counter = 1;
var index = 2;
var  moveSlidesTimeout;
function moveSlides() {
    clearTimeout(moveSlidesTimeout);
    if (counter < 4){
        $('#bg' + counter).css('right','100vw');
        $(".fa-square").removeClass("active-square");
        $(".fa-square:nth-child(" + index +")").addClass("active-square");
        index++;
        counter++;
    }else {
        index = 2;
        counter = 1;
        $('#bg1').css('right','0');
        $('#bg2').css('right','0');
        $('#bg3').css('right','0');
        $('#bg4').css('right','0');
        $(".fa-square").removeClass("active-square");
        $(".fa-square:nth-child(1)").addClass("active-square");
    }
    moveSlidesTimeout = window.setTimeout(moveSlides, 5000);
}
setTimeout(moveSlides,2000);