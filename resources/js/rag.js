$(document).ready(function() {

	$('#rag_body').load('rag_body_landing.htm');

	$('.clickMenuClass').click(function() {
		var menuVal = $(this).text();
		if (menuVal === 'About Us') {
			$('#rag_body').load('rag_body_about_us.htm');
		} else if (menuVal === 'Home') {
			$('#rag_body').load('rag_body_landing.htm');
		} else if (menuVal === 'Address') {
			$('#rag_body').load('rag_body_contactus.htm');
		} else if (menuVal === 'Location') {
			$('#rag_body').load('rag_body_map.htm');
		} else if (menuVal === 'Contributions') {
			$('#rag_body').load('rag_body_contributions.htm');
		} else if (menuVal === 'Daily Events') {
			$('#rag_body').load('rag_daily.htm');
		} else if (menuVal === 'Weekly Events') {
			$('#rag_body').load('rag_weekly.htm');
		} else if (menuVal === 'Monthly Events') {
			$('#rag_body').load('rag_monthly.htm');
		} else if (menuVal === 'Yearly Events') {
			$('#rag_body').load('rag_yearly.htm');
		} else if (menuVal === 'Photo Gallery') {
			$('#rag_body').load('rag_photogallery.htm');
		} else if (menuVal === 'News') {
			$('#rag_body').load('rag_news.htm');
		} else if (menuVal === 'Get Involved') {
			$('#rag_body').load('rag_getinvolved.htm');
		} else if (menuVal === 'Sponsorship') {
			$('#rag_body').load('rag_sponsorship.htm');
		}

		if(menuVal!=='Home'){
			$('#slides').hide();
		}else{
			$('#slides').show();
		}
	});

	var winURL = window.location.href;
	var len = winURL.indexOf("#",0);
	if( len != -1){
		var pageString = winURL.substring(len+1, winURL.length);

		if (pageString === 'Aboutus') {
			$('#rag_body').load('rag_body_about_us.htm');
		} else if (pageString === 'Home') {
			$('#rag_body').load('rag_body_landing.htm');
		} else if (pageString === 'Address') {
			$('#rag_body').load('rag_body_contactus.htm');
		} else if (pageString === 'Location') {
			$('#rag_body').load('rag_body_map.htm');
		} else if (pageString === 'Contributions') {
			$('#rag_body').load('rag_body_contributions.htm');
		} else if (pageString === 'DailyEvents') {
			$('#rag_body').load('rag_daily.htm');
		} else if (pageString === 'WeeklyEvents') {
			$('#rag_body').load('rag_weekly.htm');
		} else if (pageString === 'MonthlyEvents') {
			$('#rag_body').load('rag_monthly.htm');
		} else if (pageString === 'YearlyEvents') {
			$('#rag_body').load('rag_yearly.htm');
		} else if (pageString === 'PhotoGallery') {
			$('#rag_body').load('rag_photogallery.htm');
		} else if (pageString === 'News') {
			$('#rag_body').load('rag_news.htm');
		} else if (pageString === 'GetInvolved') {
			$('#rag_body').load('rag_getinvolved.htm');
		} else if (pageString === 'Sponsorship') {
			$('#rag_body').load('rag_sponsorship.htm');
		}
	}

	$("#slides").slides({
		next : 'next'
	});

	function tick() {
		$('#ticker li:first').animate({
			'opacity' : 7
		}, 200, function() {
			$(this).appendTo($('#ticker')).css('opacity', 3);
		});
	}

	setInterval(function() {
		tick();
	}, 9000);

});

ddsmoothmenu.init({
	mainmenuid : "smoothmenu1", //menu DIV id
	orientation : 'h', //Horizontal or vertical menu: Set to "h" or "v"
	classname : 'ddsmoothmenu', //class added to menu's outer DIV
	//customtheme: ["#1c5a80", "#18374a"],
	contentsource : "markup" //"markup" or ["container_id", "path_to_menu_file"]
});

$('.clickMenuClass').click(function() {
	var menuVal = $(this).text();
	parent.top.$('#slides').hide();
	if (menuVal === 'Disclaimer' || menuVal === 'Copyright information' || menuVal === 'Terms of use' || menuVal === 'Privacy Policy') {
		parent.top.$('#rag_body').load('rag_legal.htm');
	}
});

$('body').prepend('<a href="#" class="back-to-top">Back to Top</a>');

var amountScrolled = 300;

$(window).scroll(function() {
	if ( $(window).scrollTop() > amountScrolled ) {
		$('a.back-to-top').fadeIn('slow');
	} else {
		$('a.back-to-top').fadeOut('slow');
	}
});

$('a.back-to-top').click(function() {
	$('html, body').animate({
		scrollTop: 0
	}, 700);
	return false;
});
