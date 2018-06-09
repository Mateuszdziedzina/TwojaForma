var ActivityManagement = (function(service) {

    var _activities = [];

    service.getActivities = function() {
        return _activities;
    }


    return service;

})(ActivityManagement || {});