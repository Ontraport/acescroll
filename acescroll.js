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
		//veritcal
		var vert = $.extend( true, $.jb.acescroll.prototype,{
	      	name: 'jb-ace-scrollv',
	      	widgetEventPrefix: 'acescrollv',
	      	widgetName: 'acescrollv',
	      });
	  
      vert.options.position ={
				my: 'left top',
				at: 'right top',
				offset: '11 0',
				collision: 'none'
			};
      
      $.widget('jb.acescrollv', vert )

       //horizontal
       
       var hoz = $.extend( true, $.jb.acescroll.prototype,{
	      	name: 'jb-ace-scrollh',
	      	widgetEventPrefix: 'acescrollh',
	      	widgetName: 'acescrollh',
	      });

      hoz.options.orientation= 'horizontal';
      
      hoz.options.position = {
			my:'left bottom',
	        at:'left bottom',
	        offset:'0 20',
	        collision:'none'
		}
      
      $.widget('jb.acescrollh', hoz )
	
	
	
	}
)
