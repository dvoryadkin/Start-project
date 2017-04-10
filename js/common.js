//E-mail Ajax Send
//Documentation & Example: https://github.com/agragregra/uniMail
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

$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});
// $(".element").animated("zoomInUp", "zoomOutDown");