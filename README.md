acescroll
=========

stealable version of jebaird/acescroll

###usage

To add both vertical and horizontal functionality, acescroll extends the original acescroll prototype (see acescroll.js). 
Becuase of this acescroll must be declared as either:

#####'acescrollh' for a horizontal acescroll 

	$('.selector').acescrollh({
		position: {
				my:'left top',
                at:'right top'
        }
	});

#####'acescrollv' for a vertical acescroll 

	$('.selector').acescrollv({
		position: {
				my:'left top',
                at:'right top'
        }
	});

#####Or Both
       $('.selector').acescrollh({position: {my:'left top', at:'right top',}})
                     .acescrollv({position: { my:'left top', at:'right top'}});

#####Never use 'acescroll'

