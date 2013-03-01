var latestDate = {'year': 2013, 'month': 2};
var earliestDate = {'year': 2010, 'month': 1};

function dateToHeight(year, month) {
	var offset = ((latestDate['year'] * 12 + latestDate['month']) - (year * 12 + month)) * 20;
	return offset + 40;
}

function addYear(year) {
	var yearElt = $('<div>').text(year).css('top', dateToHeight(year, 0));
	$('#years').append(yearElt);
}

function addSideText(txt, year, month, cssClass) {
	var textElt = $('<div>').html(txt).css('top', dateToHeight(year, month)).addClass(cssClass);
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
		$.get('click/?id=' + (item.name ? item.name : ''));
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

	var totalHeight = dateToHeight(earliestDate.year, earliestDate.month) - dateToHeight(latestDate.year, latestDate.month) + 100;
	$('.line').css('height', totalHeight)

	for (var i = earliestDate['year']; i <= latestDate['year']; i++) {
		addYear(i);
	}

	addSideText('Alex Nisnevich', 2012, 9, 'name');
	addSideText('Developer Portfolio', 2012, 7.4, 'name');

	addSideText('<a href="/blog/">Blog</a> | <a href="/resume/">Resume</a> | <i><a href="/?p=index">Old Site</a></i>',
		2012, 5.5, 'link');

	addSideText('Individual Projects', 2012, 3.5, 'legend green');
	addSideText('Team Projects', 2012, 2.6, 'legend blue');
	addSideText('Corporate / Research Projects', 2012, 1.7, 'legend red');

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
