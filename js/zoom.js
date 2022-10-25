
  $(function(){
    $('.gallery-element__img').click(function(event) {
      let i_path = $(this).attr('src');
      $('body').append('<div class="cover"></div><div class="increase"><img src="'+i_path+'"><div class="close-popup"><i></i></div></div>');
      $('.increase').css({
       left: ($(document).width() - $('.increase').outerWidth())/2,
              top: ($(window).height() - $('.increase').outerHeight())/2
     });
      $('.cover, .increase').fadeIn('fast');
    });
    
    $('body').on('click', '.close-popup, .cover', function(event) {
      event.preventDefault();
  
      $('.cover, .increase').fadeOut('fast', function() {
        $('.close-popup, .increase, .cover').remove();
      });
    });
  });