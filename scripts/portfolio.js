var latestDate = {'year': 2019, 'month': 3};
var earliestDate = {'year': 2011, 'month': 1};

// Created by processing http://alex.nisnevich.com/blog/atom.xml
var blogPosts = [
	{year: 2019, month: 2, name: 'Visualizing Classical Music Influence with networkx', url: 'https://nbviewer.jupyter.org/github/AlexNisnevich/blog/blob/master/_notebooks/music-graphs.ipynb'},
	{year: 2019, month: 1, name: 'Reading List - 2018', url: 'https://www.facebook.com/notes/alex-nisnevich/reading-list-2018/10155545261246685/'},
	{year: 2018, month: 9, name: 'Creating Land-Use Maps with an HP 7475A Plotter', url: 'http://alex.nisnevich.com/blog/2018/09/15/plotting_land_use_maps.html'},
	{year: 2018, month: 8, name: 'Gator Album Release', url: 'http://alex.nisnevich.com/blog/2018/08/19/gator_album_release.html'},
	{year: 2018, month: 1, name: 'Reading List - 2017', url: 'https://www.facebook.com/notes/alex-nisnevich/reading-list-2017/10154826038166685'},
	{year: 2017, month: 9, name: 'The Leningrad Rock Scene, in Five Albums', url: 'https://www.facebook.com/notes/alex-nisnevich/the-leningrad-rock-scene-in-5-albums/10154560682836685/'},
	{year: 2017, month: 1, name: 'Reading List - 2016', url: 'https://www.facebook.com/notes/alex-nisnevich/reading-list-2016/10153930614281685'},
	{year: 2017, month: 10, name: 'Purple State Electoral Nightmare Scenario', url: 'https://alexnisnevich.github.io/one-weird-electoral-trick/'},
	{year: 2016, month: 8, name: 'In Search of a New Musical Genre, Using Spotify Data', url: 'https://nbviewer.jupyter.org/github/AlexNisnevich/blog/blob/master/_notebooks/exploring-music-genres.ipynb'},
	{year: 2016, month: 7, name: 'Secrets of natural language UIs: Translating English into computer actions', url: 'http://alex.nisnevich.com/blog/2016/07/01/secrets_of_natural_language_uis.html'},
	{year: 2016, month: 5, name: 'How many closed lambda-calculus terms are there of a given length?', url: 'http://alex.nisnevich.com/blog/2016/05/19/how_many_lambda_terms_are_there.html'},
	{year: 2016, month: 1, name: 'Reading List - 2015', url: 'https://www.facebook.com/alex.nisnevich/posts/10153269546231828'},
	{year: 2015, month: 10.8, name: 'Postmortem - Asshole Transit Bureaucrat 2015', url: 'http://alex.nisnevich.com/blog/2015/10/18/asshole_transit_bureaucrat_postmortem.html'},
	{year: 2015, month: 10, name: 'The Impact of Donations to Bernie Sanders', url: 'http://alexnisnevich.github.io/bernie-donations/'},
	{year: 2015, month: 1, name: 'Reading List - 2014', url: 'https://www.facebook.com/alex.nisnevich/posts/10152535243891828'},
	{year: 2014, month: 11, name: 'JSON Requests with rust-http', url: 'http://alex.nisnevich.com/blog/2014/10/23/json_requests_with_rust_http.html'},
	{year: 2014, month: 10.5, name: 'Some Words on Untrusted', url: 'http://alex.nisnevich.com/blog/2014/10/17/some_words_on_untrusted.html'},
	{year: 2014, month: 10, name: 'Setting up a Flask application on EC2 Ubuntu with Apache + mod_wsgi', url: 'http://alex.nisnevich.com/blog/2014/10/01/setting_up_flask_on_ec2.html'},
	{year: 2014, month: 9, name: 'Postmortem - Shattered Worlds', url: 'http://alex.nisnevich.com/blog/2014/09/27/shattered_worlds_postmortem.html'},
	{year: 2014, month: 6, name: 'A First Foray into Experiential Art', url: 'http://alex.nisnevich.com/blog/2014/06/27/my_first_foray_into_experiential_art.html'},
	{year: 2014, month: 5, name: 'Postmortem - Asteroid Tycoon', url: 'http://alex.nisnevich.com/blog/2014/05/07/asteroid_tycoon_postmortem.html'},
	{year: 2013, month: 9, name: 'Postmortem - 10 Second Roguelike', url: 'http://alex.nisnevich.com/blog/2013/09/03/10_second_roguelike_postmortem.html'},
	{year: 2013, month: 5.5, name: 'Rolling Your Own Mechanical Turk Form with ExternalQuestion and Rails', url: 'http://alex.nisnevich.com/blog/2013/05/23/rolling_your_own_mechanical_turk_form.html'},
	{year: 2013, month: 5, name: 'The Church-Rosser Theorem and the Consistency of Lambda Calculus', url: 'http://alex.nisnevich.com/blog/2013/05/17/consistency_of_lambda_calculus.html'},
	{year: 2013, month: 3, name: 'My Experience with Steam for Linux (64-bit Linux Mint Debian Edition)', url: 'http://alex.nisnevich.com/blog/2013/03/25/steam_on_linux.html'},
	{year: 2013, month: 2.5, name: 'Face Tracking with OpenCV and a USB Missile Launcher', url: 'http://alex.nisnevich.com/blog/2013/02/19/face_tracking_with_open_cv_and_a_usb_missile_launcher.html'},
	{year: 2013, month: 2, name: 'Installing a Brother printer on 64-bit Ubuntu/Debian', url: 'http://alex.nisnevich.com/blog/2013/02/07/installing_brother_printer.html'},
	{year: 2013, month: 1, name: 'Quantifying Linguistic Diversity', url: 'http://alex.nisnevich.com/blog/2013/01/11/quantifying_linguistic_diversity.html'},
	{year: 2012, month: 8, name: 'Playing Around with Ruby Hashes', url: 'http://alex.nisnevich.com/blog/2012/07/30/fun_with_ruby_hashes.html'},
	{year: 2012, month: 7.5, name: 'Dynamic Pluralization with PHP and jQuery', url: 'http://alex.nisnevich.com/blog/2012/07/30/dynamic_pluralization.html'},
	{year: 2012, month: 7, name: 'Refreshing Browsers over SSH', url: 'http://alex.nisnevich.com/blog/2012/07/25/browsers_and_ssh.html'},
	{year: 2012, month: 6.5, name: 'About this blog', url: 'http://alex.nisnevich.com/blog/2012/07/13/welcome.html'}
]

function dateToHeight(year, month) {
	var offset = ((latestDate['year'] * 12 + latestDate['month']) - (year * 12 + month)) * 20;
	return offset + 40;
}

function addYear(year) {
	var yearElt = $('<div>').text(year).css('top', dateToHeight(year, 0) + 60);
	$('#years').append(yearElt);
}

function addSideText(txt, year, month, cssClass) {
	var textElt = $('<div>').html(txt).css('top', dateToHeight(year, month) + 60).addClass(cssClass);
	$('#years').append(textElt);
}

function addItem(item) {
	// Dimensions

	var topHeight = dateToHeight(item.end.year, item.end.month);
	var bottomHeight = dateToHeight(item.start.year, item.start.month);
	var pointHeight = bottomHeight - topHeight;
	var captionOffset = (pointHeight == 0) ? -4 : pointHeight / 2 - 10;
	if (item.captionOffset) {
		captionOffset += item.captionOffset;
	}
	if (item.favorite) {
		captionOffset -= 8;
	}
	var calloutOffset = (pointHeight == 0) ? -8 : captionOffset;

	// Point

	var point = $('<div>', {'class': 'point'}).css({
		'top': topHeight,
		'height': bottomHeight - topHeight
	});
	for (var i = 0; i < item.classes.length; i++) {
		point.addClass(item.classes[i]);
	}

	// Caption

	if (item.name) {
		var caption = $('<div>', {'class': 'caption'}).text(item.name).css('top', captionOffset);
		point.append(caption);

		// Star

		if (item.favorite) {
			var star = $('<div>', {'class': 'star'}).html('<img src="images/star.png">');
			caption.prepend(star);
		}
	}


	// Callout

	if (item.description) {
		var calloutHtml = '<div class="name">' + item.name + '</div><div class="description">' + item.description + '</div>';
		var callout = $('<div>', {'class': 'callout'}).html(calloutHtml).css('top', calloutOffset).hide();
		if (point.hasClass('left') || point.hasClass('centerLeft')) {
			callout.addClass('calloutLeft');
		} else {
			callout.addClass('calloutRight');
		}
		point.append(callout);
	}

	// Dialog

	if (item.dialogId) {
		var dialogWidth = item.dialogDimensions ? item.dialogDimensions[0] : 600;
		var dialogHeight = item.dialogDimensions ? item.dialogDimensions[1] : 'auto';
		var dialogElt = $('#' + item.dialogId);
		dialogElt.dialog({
			'width': dialogWidth,
			'height': dialogHeight,
			'autoOpen': false,
			'resizable': false,
			'modal': true,
			'open': function () {
				$(this).find('a').blur();
			}
		});
	} else {
		dialogElt = {
			dialog: function () {}
		}
	}

	// Behavior

	point.click(function () {
		dialogElt.dialog('open');
		$('#clickTracker').attr('src', 'click/?id=' + (item.name ? item.name : ''));
		if (item.url) {
			window.open(item.url);
		}
	}).hover(function () {
		$(this).addClass('hover');
		$(this).find('.caption').hide();
		$(this).find('.callout').show();
	}, function () {
		$(this).removeClass('hover');
		$(this).find('.caption').show();
		$(this).find('.callout').hide();
	})

	// Inject

	$('#' + item.category).append(point);
}

function checkScrollbars() {
	var root = (document.compatMode == 'BackCompat')? document.body : document.documentElement;

	// check vertical scrollbar presence
	if (root.scrollHeight > root.clientHeight) {
		$('body').removeClass('noScrollY');
	} else {
		$('body').addClass('noScrollY');
	}

	// check horizontal scrollbar presence
	if (root.scrollWidth > root.clientWidth) {
		$('body').removeClass('noScrollX');
	} else {
		$('body').addClass('noScrollX');
	}
}

$(document).ready(function() {
	$.each(creations, function(i, item) {
		addItem(item);
	});

	blogPosts.forEach(function (post) {
		addItem({
			"name": "",
			"category": "blogposts",
			"start": post,
			"end": post,
			"classes": ["blogpost", "centerLeft"],
			"description": '"' + post.name + '" [' + Math.floor(post.month) + '.' + post.year + ']',
			"url": post.url
		});
	});

	var totalHeight = dateToHeight(earliestDate.year, earliestDate.month) - dateToHeight(latestDate.year, latestDate.month) + 100;
	$('.line').css('height', totalHeight)

	for (var i = earliestDate['year']; i <= latestDate['year']; i++) {
		addYear(i);
	}

	addSideText('Solo projects', 2018, 8.5, 'legend green');
	addSideText('Team projects', 2018, 7, 'legend blue');
	addSideText('Company / research projects', 2018, 5.5, 'legend red');
	addSideText('Blog posts', 2018, 4, 'legend gray');

	$('.legend').hover(function () {
		if ($(this).hasClass('green')) {
			$('.point.solo').addClass('hover');
		} else if ($(this).hasClass('blue')) {
			$('.point.team').addClass('hover');
		} else if ($(this).hasClass('red')) {
			$('.point.company').addClass('hover');
		}
	}, function () {
		$('.point').removeClass('hover');
	});

	checkScrollbars();
});

$(window).resize(function() {
	checkScrollbars();
});
