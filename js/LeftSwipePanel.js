
$( document ).on( "pagecreate", $('div[data-role="page"]'), function() {
	$( document ).on( "swiperight", $(this).attr("id"), function( e ) {
	        	
	if ($( ".ui-page-active" ).attr("id") == "calculatorPage") {
		if ( $( ".ui-page-active" ).jqmData( "panel" ) !== "open" ) {
			if ( e.type === "swiperight" ) {
				$( "#leftPanelForCalculatorPage").panel( "open" );
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
