

// Element selector (produces array):
function __q(q){
	return document.querySelectorAll(q);
};

// Fire event shortcut:
function __fire(e, data){
	data = (typeof data !== 'undefined') ?  data : {};
	var event = new CustomEvent(e, {'detail': data});
	this.dispatchEvent(event);
}

// "doneScrolling" event for when user stopped scrolling
(function(){
	var scrollTimer = -1;
	var scrollStopTimer = 150;
	window.addEventListener("scroll", function(){
		if (scrollTimer != -1) clearTimeout(scrollTimer);
		scrollTimer = window.setTimeout("window.__fire('doneScrolling')", scrollStopTimer);
	});
})();
