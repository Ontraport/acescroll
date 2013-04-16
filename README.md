acescroll
=========

stealable version of jebaird/acescroll

###usage
To add both vertical and horizontal functionality, acescroll extends the original acescroll prototype (see acescroll.js). 
Becuase of this acescroll must be declared with as either: 
--------------------------------------
+'acescrollh' for a horizontal acescroll 
	$('.selector').acescrollv({
		position: {
				my:'left top',
                at:'right top',
        }
	});
+'acescrollv' for a vertical acescroll 
	$('.selector').acescrollh({
		position: {
				my:'left top',
                at:'right top',
        }
	});
+ or both.
+ Never 'acescroll'
--------------------------------------
