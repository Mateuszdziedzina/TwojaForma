var ActivityRenderer = (function (renderer) {

    var _listRoot = null;

	
	
    function initializeRoot() {
        if (!_listRoot) {
        	_listRoot = document.getElementById("activity-list-root");
        } else {

        }
    }	

	
    return renderer;

})(ActivityRenderer || {});