//$(window).bind('click touchstart', function(e) {
$(window).click(function(e) {
	var tagName    = e.target.tagName;
	
	$('p.out').text(tagName);
});