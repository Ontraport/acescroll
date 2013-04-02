/*
 * assumses that you have jquery-ui checked out to jqueryui
 */
steal(
	'jquery',
	'jqueryui',
	'./lib/jquery.jb.acescroll.css'
)
.then(
	'./acescroll.css',
	
	'./lib/jquery-mousewheel-3.0.5/jquery.mousewheel.js',
	'./lib/jquery.jb.acescroll.js',
	function(){
	/*
	 * setup the horz and vert plugins
	 */
	
	/*
	 * short cut for vertical 
	 */
	$.fn.acescrollv = function( position ){
		return this.acescroll({
			position: $.extend( {}, {
				my: 'left top',
				at: 'right top',
				offset: '11 0',
				collision: 'none'
			}, position )
		});
	};
	
	/*
	 * short cut for vertical horizontal
	 */
	$.fn.acescrollh = function( position ){
		return this.acescroll({
			orientation: 'horizontal',
			position: $.extend( {}, {
				my:'left bottom',
                at:'left bottom',
                offset:'0 20',
                collision:'none'
			}, position )
		});
	};
	
	
	}
)
