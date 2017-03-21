

	$("#search-button").click(function(){
		console.log('button clicked');
	    $("#searchBox").toggleClass('show-search');
	    $("#search-button").toggleClass('search-icon-clicked');

});
	$(".hamburger-icon").click(function() {
		console.log('hamburger clicked');
		$('#hamburger-menu').toggleClass('show-ham');
	})

	$("#write-for-us").click(function() {
		console.log('write for us clicked');
		$('#contact-bg').addClass('show-contact');
	})

	$("#x-icon").click(function(){
		console.log('X out clicked');
		$('#contact-bg').removeClass('show-contact');
	})

	$("#to-footer").click(function(){
		console.log('thing clicked');
		$('#hamburger-menu').removeClass('show-ham');
	})

	$("#about li").click(function(){
		console.log('clickarooni');
		$('#contact-bg').addClass('show-contact');
	})