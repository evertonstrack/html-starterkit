/* Author : Everton Strack (everton.strack@gmail.com) */
(function($, window, document) {

/* ----------------------------------------------------------------------------------------------------------- */
/* ------------------------------------------------ HELPER --------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------- */
var Helper = {

	init:function()
	{
		Helper.browser();
	},

	isIE:function()
	{
		if(navigator.userAgent.match(/msie|trident/i)){ return true; }
	},

	browser:function()
	{
		var name = bowser.name.toLowerCase();
		$('html').addClass(name); 

		var version = String(name + Math.floor(bowser.version)).toLowerCase();
		$('html').addClass(version);

		Modernizr.mobile = bowser.mobile == true || bowser.tablet == true;
		var mobile = Modernizr.mobile ? 'mobile' : 'no-mobile';
		$('html').addClass(mobile);
	}
}

/* ----------------------------------------------------------------------------------------------------------- */
/* ------------------------------------------------ MAIN ----------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------- */
var Main = {

	init:function()
	{
		Helper.init();
	}
}




/*
    document.read
*/
$(document).ready(function()
{

	// Main.init
	Main.init();

});

/*
    window.load
*/
$(window).load(function(){ });



}(window.jQuery, window, document));