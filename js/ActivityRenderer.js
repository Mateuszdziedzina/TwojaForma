var ActivityRenderer = (function (renderer) {

    var _listRoot = null;


    renderer.renderList = function (activities) {
        initializeRoot();

        for (var i = 0; i < activities.length; i++) {
            createActivityItem(activities[i]);
        }
    };
	
	
    function initializeRoot() {
        if (!_listRoot) {
        	_listRoot = document.getElementById("activity-list-root");
        } else {
            clearItems();
        }
    }	

	
    function clearItems() {
        while (_listRoot.firstChild) {
            _listRoot.removeChild(_listRoot.firstChild);
        }
    }	

	
    function createActivityItem(activity) {
        _listRoot.innerHTML += createActivityFromTemplate(activity);
    }	
	
	
    function createActivityFromTemplate(activity) {
		
		return `<div role="main">
		
					<div data-role="collapsible" data-content-theme="false">
						<h2>Miejsce na opis</h2>
					
							<div>
					    			<input data-role="flipswitch"name="flip-checkbox-3" id=""
					    				data-on-text="Wykonano" data-off-text="Niewykonano"
					    					data-wrapper-class="custom-size-flipswitch" type="checkbox">
							</div>
					
					    <div>
					        <div>
								<label for=''>Czas wykonywania ćwiczenia (w minutach):</label>
								<input name="slider-2" id='' data-highlight="true" min="0" max="100" value="60" type="range">
					        </div>
					
							<a href="#checkCaloriesField" data-rel="popup" class="ui-btn ui-btn-inline ui-corner-all ui-shadow"
								data-position-to="window" data-transition="pop"
			
								onclick="">
									Sprawdź ilość spalonych kalorii</a>
								<div data-role="popup" id="checkCaloriesField">					
								</div>				                
					    
					        <div>
					        	<button class="ui-btn ui-corner-all" id="add-activity-btn" onclick="">
					        		Usuń
					        	</button>
					        </div>
					    </div>
					
					</div>
				</div>`  
    }
  	 

	
	
    return renderer;

})(ActivityRenderer || {});