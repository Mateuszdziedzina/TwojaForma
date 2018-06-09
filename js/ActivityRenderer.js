var ActivityRenderer = (function (renderer) {

    var _listRoot = null;

	
	
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
		
				</div>`  
    }
  	 

	
	
    return renderer;

})(ActivityRenderer || {});