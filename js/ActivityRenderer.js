/* module to render activities */

var ActivityRenderer = (function (renderer) {

    var _listRoot = null;												/* private variable - root of the list */

	
	/* public function to render the list of activities */
    renderer.renderList = function (activities) {						
        initializeRoot();												/* initialize root of the list */							

        for (var i = 0; i < activities.length; i++) {
            createActivityItem(activities[i]);							/* create the collection of activities */
        }
    };
	

	/* private function to initialize root of the list */	
    function initializeRoot() {
        if (!_listRoot) {												/* check if root is already set */
        	_listRoot = document.getElementById("activity-list-root");	/* set root of list to the element "activity-list-root" */
        } else {														
            clearItems();												/* clear the list of activities*/
        }
    }	


	/* private function to clear the list */
    function clearItems() {
        while (_listRoot.firstChild) {									/* remove elements until all elements are removed */
            _listRoot.removeChild(_listRoot.firstChild);
        }
    }	


	/* private function to create activity structure from template and add it to the root and other elements */
    function createActivityItem(activity) {
        _listRoot.innerHTML += createActivityFromTemplate(activity);
    }	
	

	/* private function to create the activity from layout template */
    function createActivityFromTemplate(activity) {
		
		return `<div role="main">
		
					<div data-role="collapsible" data-content-theme="false">
						<h2>${activity.description}</h2>
					
							<div>
					    			<input data-role="flipswitch"name="flip-checkbox-3" id="check'+${activity.id}+'"
					    				data-on-text="Wykonano" data-off-text="Niewykonano"
					    					data-wrapper-class="custom-size-flipswitch" type="checkbox">
							</div>
					
					    <div>
					        <div>
								<label for='#${activity.id}'>Czas wykonywania ćwiczenia (w minutach):</label>
								<input name="slider-2" id='${activity.id}' data-highlight="true" min="0" max="100" value="60" type="range">
					        </div>
					
							<a href="#checkCaloriesField" data-rel="popup" class="ui-btn ui-btn-inline ui-corner-all ui-shadow"
								data-position-to="window" data-transition="pop"
			
								onclick="AppView.showCaloriesBurn($('#checkCaloriesField'), $('#${activity.id}').val(), ${activity.kcalPerHour})">
									Sprawdź ilość spalonych kalorii</a>
								<div data-role="popup" id="checkCaloriesField">					
								</div>				                
					    
					        <div>
					        	<button class="ui-btn ui-corner-all" style="background: #de5459; color: white;" id="add-activity-btn" onclick="AppView.deleteActivity(${activity.id});">
					        		Usuń
					        	</button>
					        </div>
					    </div>
					
					</div>
				</div>`  
    }
  	 

	
	
    return renderer;

})(ActivityRenderer || {});