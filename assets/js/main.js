
$(document).ready(function() {

    //accordion
    $(".accordion-block > a").on("click", function(e) {
        e.preventDefault();

        if ($(this).hasClass("active")) {
          $(this).removeClass("active");
          $(this)
            .siblings(".content")
            .slideUp(300);
          $(".accordion-block > a i")
            .removeClass("open")
            .addClass("closed");
        } else {
          $(".accordion-block > a i")
            .removeClass("open")
            .addClass("closed");
          $(this)
            .find("i")
            .removeClass("closed")
            .addClass("open");
          $(".accordion-block > a").removeClass("active");
          $(this).addClass("active");
          $(".content").slideUp(300);
          $(this)
            .siblings(".content")
            .slideDown(300);
        }
      });
    
    //hero and thumbnails

    function imgSwitch (btn,imgUrl){
        $(btn).click(function(){
            $('#ws-hero img').attr('src',imgUrl);
            $('#modal-product-img').html('');
                
            return false;
        });
    }
    // product modal
    $('#ws-modal').on('shown.bs.modal', function () {
        showProductImg();
      });

    function showProductImg(){

        var imgContainer = document.getElementById('modal-product-img');
        var img = document.getElementById('product-img');

        $(img).clone().appendTo(imgContainer)
    }

    imgSwitch('#thmb1',"assets/img/product-large-a.jpg");
    imgSwitch('#thmb2',"assets/img/product-large-b.jpg");
    imgSwitch('#thmb3',"assets/img/product-large-c.jpg");
    imgSwitch('#thmb4',"assets/img/product-large-d.jpg");


    
});