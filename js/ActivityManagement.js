var ActivityManagement = (function(service) {

    var _activities = [];

    service.getActivities = function() {
        return _activities;
    }

    service.addActivity = function(description, kcalPerHour) {
        _activities.push(new Activity(description, kcalPerHour));
    }

    service.deleteActivity = function(activityId) {
        _activities = _activities.filter(function(activity) {
            return activity.id !== activityId;
        });
    }

    service.changeState = function(isCompleted, activityId) {
        var activity = _activities.filter(function(activity) {
            return activity.id === activityId;
        })[0];

        activity.isCompleted = isCompleted;
    }

	
    service.getRandomActivity = function() {

    	var activitiesToSelect = ['', 'Brzuszki', 'Skakanka', 'Pajacyki', 'Przysiady', 'Wykroki', 'Pompki', 'Trucht'];
    	var randomIndex = (Math.floor(Math.random()*7)+1);
    		
    	return activitiesToSelect[randomIndex];
    };	
	
    return service;

})(ActivityManagement || {});