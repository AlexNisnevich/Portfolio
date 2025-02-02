var latestDate = {'year': 2025, 'month': 2};
var earliestDate = {'year': 2011, 'month': 1};

function dateToHeight(year, month) {
	var offset = ((latestDate['year'] * 12 + latestDate['month']) - (year * 12 + month)) * 16;
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

	var point = $('<div>', { class: 'point'}).css({
		'top': topHeight,
		'height': bottomHeight - topHeight
	});
	for (var i = 0; i < item.classes.length; i++) {
		point.addClass(item.classes[i]);
	}

	// (Super-point + sub-point handling for points composed of discrete intervals)
	if (item.intervals) {
		point.addClass('superPoint');
		item.intervals.forEach((interval) => {
			var intervalTopHeight = dateToHeight(interval.end.year, interval.end.month) - topHeight;
			var intervalBottomHeight = dateToHeight(interval.start.year, interval.start.month) - topHeight;
			var subPoint = $('<div>', {class: 'point'}).css({
				'top': intervalTopHeight,
				'height': intervalBottomHeight - intervalTopHeight
			});
			for (var i = 0; i < item.classes.length; i++) {
				subPoint.addClass(item.classes[i]);
			}
			point.append(subPoint);
		})
	};

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

	papers.forEach(function (paper) {
		addItem({
			"name": "",
			"category": "papers",
			"start": paper,
			"end": paper,
			"classes": ["paper", "centerLeft"],
			"description": '<i>' + paper.title + '</i><br>' + paper.authors + '<br><b>' + paper.pub + '</b>',
			"url": paper.url
		});
	});

	var totalHeight = dateToHeight(earliestDate.year, earliestDate.month) - dateToHeight(latestDate.year, latestDate.month) + 100;
	$('.line').css('height', totalHeight)

	for (var i = earliestDate['year']; i <= latestDate['year']; i++) {
		addYear(i);
	}

	addSideText('Solo projects', 2022, 8.5, 'legend green');
	addSideText('Team projects', 2022, 7, 'legend blue');
	addSideText('Big org projects', 2022, 5.5, 'legend red');
	addSideText('(In-progress projects)', 2022, 4, 'legend blue inprogress');
	addSideText('Papers / blog posts', 2022, 2.5, 'legend gray');

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
