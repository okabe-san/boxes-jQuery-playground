$(document).ready(function () {
  console.log("hello world");

// Exercise 2
  // $('#secretBox').css('background', 'white');
  // $('#secretBox').append('<h1>Sercret box</h1>');
  // $('#row1 > div').addClass('boxType3');
  // $('#row4 div:last-child').css('display', 'none');
  // $('.boxType1').css('background', 'white');
  // $('#row2 div:nth-child(1)').removeAttr('style');
  // $('.box').not('#secretBox').width(2);

// Exercise 3
  // $('#container').mousedown(function (e) {
  //   console.log(e.pageX, e.pageY);
  // });

  // $('.boxType1').mousedown(function (e) {
  //   $('.boxType1').attr('href', 'http://www.galvanize.com/');
  //   alert('You can never leave the page!');
  //   // window.location.href='http://www.galvanize.com/';
  //   e.preventDefault();
  // })
  //
  // $('.box').mousedown(function (e) {
  //   var clicks = $(this).data('clicks');
  //   if (clicks) {
  //     $(this).removeAttr('style');
  //   } else {
  //     $(this).css("background-image", "url(http://cdn.playbuzz.com/cdn/154cb38e-55e3-4294-bffe-6906b6a41a6b/dd0857c9-b514-4270-889a-2a9adbbb044f.jpg)");
  //   }
  //   $(this).data("clicks", !clicks);
  //   })

  $('body').on('click', function (e) {
    var clickOn = $(e.target);
    if (e.target.id == "container") {
      $(clickOn).css('background', '#32CD32')
    } else {
      $(clickOn).parentsUntil().css('background', 'black');
      $(clickOn).css('background', 'white');
    }

  })

})
