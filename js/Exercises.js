$( document ).on( "pagecreate", "#exercises", function() {
	$( ".exercise" ).on( "click", function() {
        var target = $( this ),
            title = target.find( "h2" ).html(),
            subtitle = target.find( "p" ).html(),
            short = target.attr( "id" ),
            closebtn = '<a href="#" data-rel="back" class="ui-btn ui-corner-all ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a>',
            header = '<div data-role="header"><h2>' + title + ' ' + subtitle + '</h2></div>',
            img = '<img src="img/' + short + '.gif" alt="' + title + '" class="photo">',
            popup = '<div data-role="popup" id="popup-' + short + '" data-short="' + short +'" data-theme="none" data-overlay-theme="a" data-corners="false" data-tolerance="40"></div>';

        $( header )
            .appendTo( $( popup )
                .appendTo( $.mobile.activePage )
                .popup() )
            .toolbar()
            .before( closebtn )
            .after( img );

        $( ".photo", "#popup-" + short ).load(function() {
            $( "#popup-" + short ).popup( "open" );
            clearTimeout( fallback );
        });

        var fallback = setTimeout(function() {
            $( "#popup-" + short ).popup( "open" );
        }, 2000);
    });

    $( document ).on( "popupbeforeposition", ".ui-popup", function() {
        var image = $( this ).children( "img" ),
            height = image.height(),
            width = image.width();

        $( this ).attr({ "height": height, "width": width });
        var maxHeight = $( window ).height() - 68 + "px";
        $( "img.photo", this ).css( "max-height", maxHeight );
    });

    $( document ).on( "popupafterclose", ".ui-popup", function() {
        $( this ).remove();
    });
});