$(function() {
		$('.pop').on('click', function() {
			$('.imagepreview').attr('src', $(this).find('img').attr('src'));
			$('#imagemodal').modal('show');   
		});		
});


if ($(window).width() < 991) {
    $('#social_bottom_footer').addClass('text-center');
} else {
    $('#social_bottom_footer').removeClass('text-center');
}


if ($(window).width() < 767) {
    $('.text_center_js').addClass('text-center');
} else {
    $('.text_center_js').removeClass('text-center');
}

// Gallary Page 

$('.thumbnail').click(function(){
  	$('.modal-body').empty();
  	var title = $(this).parent('a').attr("title");
  	$('.modal-title').html(title);
  	$($(this).parents('div').html()).appendTo('.modal-body');
  	$('#myModal').modal({show:true});
});

