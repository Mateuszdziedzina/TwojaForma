/* module to manage the view of application, connect elements with actions */

var AppView = (function(view) {

	/* function to show personal info data read from local memory in selected field */
    view.showSavedPersonalInfo = function(fieldToShow) {
    	fieldToShow.html("<p> Moje zapisane dane: <br/>" +
   	 			"Płeć: " + localStorage.getItem("myGender") + " <br/>" +
   	 			"Waga: " + localStorage.getItem("myWeight") + " kg" + " <br/>" +
   	 			"Wzrost: " + localStorage.getItem("myHeight") + " cm" + " <br/>" +
   	 			"Wiek: " + localStorage.getItem("myAge") + " <br/>" +  	 	
   	 			"Aktywność: " + localStorage.getItem("myActivityLevel") + "</p>"); 	 	
    };
 

	/*function to show the amount of calories burned based on time in minutes and value of calories per hour */
    view.showCaloriesBurn = function(fieldToShow, timeInMinutes, caloriesBurnPerHour) {
		/* call function to calculate calories and then show the result in selected field */		
    	fieldToShow.html("<p> W czasie " + timeInMinutes + " min spalisz " +
   	   	 		Calculator.calculateCaloriesBurn(timeInMinutes, caloriesBurnPerHour) + " kcal</p>");
    };
 

	/* function to show BMI value */
    view.showBMI = function(fieldToShow) {   	
		/* call function to calculate BMI based on weight and height read from local memory,
		   format result to value with only two digits after decimal point, then show this result in selected field */
    	fieldToShow.html("<p> Twoje BMI wynosi: " + Calculator.calculateBMI(localStorage.getItem("myWeight"),
   	 			localStorage.getItem("myHeight")).toFixed(2) + "</p>");  	
    };	
	

	/* function to show BMR value */
    view.showBMR = function(fieldToShow) {   	 
		/* call function to calculate BMR based on weight, height, age and gender read from local memory,
		   format result to value without any digits after decimal point, then show this result in selected field */
    	fieldToShow.html("<p> Twoje podstawowe zapotrzebowanie kaloryczne BMR wynosi: " +
   	 			Calculator.calculateBMR(localStorage.getItem("myWeight"), localStorage.getItem("myHeight"),
   	 			localStorage.getItem("myAge"), localStorage.getItem("myGender")).toFixed() + " kcal</p>"); 	 	
    };


	/* function to show CPM value */
    view.showCPM = function(fieldToShow) {
		/* call function to calculate BMR based on weight, height, age and gender read from local memory */
    	var BMRvalue = Calculator.calculateBMR(localStorage.getItem("myWeight"), localStorage.getItem("myHeight"),
   	 			localStorage.getItem("myAge"), localStorage.getItem("myGender"));   		
 
		/* call function to calculate CPM based on previously calculated BMR value and activity level
		   read from local memory, format result to value without any digits after decimal point,
           then show this result in selected field */
    	fieldToShow.html("<p> Twoje dobowe zapotrzebowanie kaloryczne CPM uwzględniające aktywność fizyczną wynosi: " +
   	 			Calculator.calculateCPM(BMRvalue, localStorage.getItem("myActivityLevelValue")).toFixed() + " kcal</p>"); 	 	
    };


	/* function to show countdown value in selected field */
    view.showCountdownTime = function(timeToCountdown, fieldToShow) {
    	fieldToShow.html(timeToCountdown);
		/* call function to countdown from initial value */
    	TimerCountdown.countdownFromInitialValue();
    };	    


	/* function to show random activity in selected field */
    view.showRandomActivity = function(fieldToShow) {
		/* call function to get random activity, then show this activity in selected field */
    	fieldToShow.html(ActivityManagement.getRandomActivity()); 
    };		


	/* function to show countdown time for random activity */
    view.showCountdownTimeForRandomActivity = function(timeToCountdown, fieldToShow) {
    	fieldToShow.html(timeToCountdown);
		/* call function to countdown time */
    	TimerCountdown.countdownForRandomActivity();
    };	


	
	/* function to get activities */
    view.getActivities = function() {
		/* call function from management module to get activities */
        return ActivityManagement.getActivities();
    };
	

	/* function to update view of activity list */
    function updateView() {
		/* call function from management module to get activities, then call function to render list
		   from get activities */
        ActivityRenderer.renderList(ActivityManagement.getActivities());
		/* refresh view and adapt it to main style used in application */
        $('[data-role="content1111"]').trigger('create');
    }	
	

	/* function to add activity */
    view.addActivity = function() {
		/* call function to add activity with description get from select menu and its value of calories burn per hour */
    	ActivityManagement.addActivity($("#activitySelect option:selected").text(), $("#activitySelect").val());
        updateView();
    };	
	

	/* function to delete activity */
    view.deleteActivity = function(activityId) {
		/* call function to delete activity with selected ID */
    	ActivityManagement.deleteActivity(activityId);
        updateView();
    };	


    return view;


})(AppView || {});


/* add event listener - when device is ready, list is rendered for the first time */
document.addEventListener("deviceready", function(event) {
    ActivityRenderer.renderList(AppView.getActivities());
});
