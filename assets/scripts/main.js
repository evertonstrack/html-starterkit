/* Author : Everton Strack (everton.strack@gmail.com) */

/*
	Avoid `console` errors in browsers that lack a console.
	HTML5 Boilerplate (H5BP) paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
*/
(function(){
	var method;
	var noop = function(){};
	var methods = ["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"];
	var length = methods.length;
	var console = window.console = window.console ||{};
	while(length--){
		method = methods[length];
		if(!console[method]){
			console[method]=noop
		}
	}
})();


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