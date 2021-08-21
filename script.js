$(document).ready(function () {
	$('.menu-toggle').click(function () {
		$('.menu-toggle').toggleClass('menu-open');
		$('.menu').toggleClass('active');
	});
	$('.link').click(function () {
		$('.menu-toggle').toggleClass('menu-open');
		$('.menu').toggleClass('active');
	});
	$('.imageOne').click(function () {
		$('.overlayOne').toggleClass('active');
	});
	$('.imageTwo').click(function () {
		$('.overlayTwo').toggleClass('active');
	});
	$('.imageThree').click(function () {
		$('.overlayThree').toggleClass('active');
	});
	$('.imageFour').click(function () {
		$('.overlayFour').toggleClass('active');
	});
	$('.imageFive').click(function () {
		$('.overlayFive').toggleClass('active');
	});
	$('.imageSix').click(function () {
		$('.overlaySix').toggleClass('active');
	});
	$('.closeOverlayOne').click(function () {
		$('.overlayOne').toggleClass('active');
	});
	$('.closeOverlayTwo').click(function () {
		$('.overlayTwo').toggleClass('active');
	});
	$('.closeOverlayThree').click(function () {
		$('.overlayThree').toggleClass('active');
	});
	$('.closeOverlayFour').click(function () {
		$('.overlayFour').toggleClass('active');
	});
	$('.closeOverlayFive').click(function () {
		$('.overlayFive').toggleClass('active');
	});
	$('.closeOverlaySix').click(function () {
		$('.overlaySix').toggleClass('active');
	});
});
