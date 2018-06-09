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
	
	
    return renderer;

})(ActivityRenderer || {});