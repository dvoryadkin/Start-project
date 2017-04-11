// E-mail Ajax Send
// Documentation & Example: https://github.com/agragregra/uniMail
$(function() {
$("form").submit(function() { //Change
	var th = $(this);
	$.ajax({
		type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
});


// Animate CSS + WayPoints
// Example: $(".element").animated("zoomInUp", "zoomOutDown");


// Dropdown Menu
$(document).ready(function() {
	$('.trigger').click(function() {
		$('.menu').slideToggle(500);
	});
	$(window).resize(function() {		
		if (  $(window).width() > 500 ) {			
			$('.menu').removeAttr('style');
		}
	});
});

