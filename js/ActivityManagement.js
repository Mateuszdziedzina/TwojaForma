/* management module to manage activities */

var ActivityManagement = (function(service) {

    var _activities = [];											/* private variable - array of activities */

    service.getActivities = function() {							/* public function to get collection of activities */
        return _activities;
    }

	/* public function to create and add activity with description and value of calories burn per hour */
    service.addActivity = function(description, kcalPerHour) {		
        _activities.push(new Activity(description, kcalPerHour));
    }

	/* public function to delete activity with selected ID number */
    service.deleteActivity = function(activityId) {
        _activities = _activities.filter(function(activity) {
            return activity.id !== activityId;
        });
    }

	/* public function to change the state (done/undone) of the selected activity */
    service.changeState = function(isCompleted, activityId) {
        var activity = _activities.filter(function(activity) {
            return activity.id === activityId;
        })[0];

        activity.isCompleted = isCompleted;
    }

	
	/* public function to get random activity */
    service.getRandomActivity = function() {

    	var activitiesToSelect = ['', 'Brzuszki', 'Skakanka', 'Pajacyki', 'Przysiady', 'Wykroki', 'Pompki', 'Trucht'];
    	var randomIndex = (Math.floor(Math.random()*7)+1);
    		
    	return activitiesToSelect[randomIndex];
    };	
	
    return service;

})(ActivityManagement || {});