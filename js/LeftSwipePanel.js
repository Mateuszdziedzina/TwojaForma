/* module to provide left swipe panel functionality */

$( document ).on( "pagecreate", $('div[data-role="page"]'), function() {	/* action when page with selected data role is created */
	$( document ).on( "swiperight", $(this).attr("id"), function( e ) {		/* action when swiping right is detected */
	        	
	if ($( ".ui-page-active" ).attr("id") == "calculatorPage") {
		if ( $( ".ui-page-active" ).jqmData( "panel" ) !== "open" ) {
			if ( e.type === "swiperight" ) {
				$( "#leftPanelForCalculatorPage").panel( "open" );			/* open left swipe panel for this page */
			}
		}
	}
	else if ($( ".ui-page-active" ).attr("id") == "timerPage") {
		if ( $( ".ui-page-active" ).jqmData( "panel" ) !== "open" ) {
			if ( e.type === "swiperight" ) {
				$( "#leftPanelForTimerPage").panel( "open" );
			}
		}
	}
	else if ($( ".ui-page-active" ).attr("id") == "personalInfoPage") {
		if ( $( ".ui-page-active" ).jqmData( "panel" ) !== "open" ) {
			if ( e.type === "swiperight" ) {
				$( "#leftPanelForPersonalInfoPage").panel( "open" );
			}
		}
	}
	else if ($( ".ui-page-active" ).attr("id") == "takePhotoPage") {
		if ( $( ".ui-page-active" ).jqmData( "panel" ) !== "open" ) {
			if ( e.type === "swiperight" ) {
				$( "#leftPanelForTakePhotoPage").panel( "open" );
			}
		}
	}	     		
	else if ($( ".ui-page-active" ).attr("id") == "randomActivityPage") {
		if ( $( ".ui-page-active" ).jqmData( "panel" ) !== "open" ) {
			if ( e.type === "swiperight" ) {
				$( "#leftPanelForRandomActivityPage").panel( "open" );
			}
		}
	}			     		
	else if ($( ".ui-page-active" ).attr("id") == "treningPlanPage") {
		if ( $( ".ui-page-active" ).jqmData( "panel" ) !== "open" ) {
			if ( e.type === "swiperight" ) {
				$( "#leftPanelForTreningPlanPage").panel( "open" );
			}
		}
	}	     			     			
	});
});
