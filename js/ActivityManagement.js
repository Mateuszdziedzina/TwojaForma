var ActivityManagement = (function(service) {

    var _activities = [];

    service.getActivities = function() {
        return _activities;
    }


    service.addActivity = function(description, kcalPerHour) {
        _activities.push(new Activity(description, kcalPerHour));
    }	
	

    return service;

})(ActivityManagement || {});