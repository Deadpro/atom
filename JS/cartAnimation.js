$('.add-to-cart').on('click', function () {
  var cart;
  var imgtodrag;

  if ($(this).parents().is($('.col-sm-4'))) {
    if ($(document).width() <= 500) {
      cart = $('.bwShrinked');
    } else {
      cart = $('#basketwidjet');
    }
  } else {
    if ($(document).width() <= 500) {
      cart = $('.bwShrinked');
    } else {
      cart = $('.bwShrinked');
    }
  }
  if ($(document).width() <= 500) {
    cart = $('.bwShrinked');
  } else {
    cart = $('#basketwidjet');
  }
  if ($(this).parents().is($('.col-sm-4'))) {
      imgtodrag = $(this).parents('.col-sm-4').children('.panel').children('.thumbnail').children('.panel-body').find("img").eq(0);
  } else {
    // imgtodrag = $(this).parents('.more-info').children('.row').find("img").eq(0);
    imgtodrag = $(this).find("img").eq(0);
  }
  var imgclone = imgtodrag.clone()
    .css({'position' : 'absolute', 'z-index' : '11100', 'opacity' : '0.5', 'height' : '150px', 'width' : '150px'})
    .offset({top: imgtodrag.offset().top, left: imgtodrag.offset().left})
    .appendTo($('body'))
    .animate({
      'top': cart.offset().top + 10,
      'left': cart.offset().left + 10,
      'width': 75,
      'height': 75}, 1000, function() {
        $(this).remove();
      });

    setTimeout(function () {
        cart.effect("shake", {
            times: 2
        }, 200);
    }, 1500);

    imgclone.animate({
        'width': 0,
            'height': 0
    }, function () {
        $(this).detach()
    });
});


  // $('.add-to-cart').on('click', function () {
  //         var cart = $('.shopping-cart');
  //         var imgtodrag = $(this).parent('.item').find("img").eq(0);
  //         if (imgtodrag) {
  //             var imgclone = imgtodrag.clone()
  //                 .offset({
  //                 top: imgtodrag.offset().top,
  //                 left: imgtodrag.offset().left
  //             })
  //                 .css({
  //                 'opacity': '0.5',
  //                     'position': 'absolute',
  //                     'height': '150px',
  //                     'width': '150px',
  //                     'z-index': '100'
  //             })
  //                 .appendTo($('body'))
  //                 .animate({
  //                 'top': cart.offset().top + 10,
  //                     'left': cart.offset().left + 10,
  //                     'width': 75,
  //                     'height': 75
  //             }, 1000, 'easeInOutExpo');
  //
  //             setTimeout(function () {
  //                 cart.effect("shake", {
  //                     times: 2
  //                 }, 200);
  //             }, 1500);
  //
  //             imgclone.animate({
  //                 'width': 0,
  //                     'height': 0
  //             }, function () {
  //                 $(this).detach()
  //             });
  //         }
  //     });
