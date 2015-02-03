/* Author : Everton Strack (everton.strack@gmail.com) */

(function($, window, document) {

/*
	HELPER
*/
var Helper = {
	init:function(){
		
	},
	isIE:function(){
		if(navigator.userAgent.match(/msie|trident/i)){ return true; }
	}
}

/*
	MAIN
*/
var Main = {
	init:function(){
		Helper.init();
	}
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