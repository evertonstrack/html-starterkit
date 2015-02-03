/* Author : Everton Strack (everton.strack@gmail.com) */

(function($, window, document) {

// Add browser, browser.version, browser.engine and operation system class on html
$html = $('html');
$html.browser();


/*
	MAIN
*/
var Main = {
	init:function(){
		Helper.init();
	}
}

/*
	HELPER
*/
var Helper = {
	init:function(){ }
}


/*
    document.read
*/
$(document).ready(function(){
	// Main.init
	Main.init();
});

/*
    window.load
*/
$(window).load(function(){ });



}(window.jQuery, window, document));