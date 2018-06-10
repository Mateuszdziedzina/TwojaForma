var AppView = (function(view) {

    view.showSavedPersonalInfo = function(fieldToShow) {
    	fieldToShow.html("<p> Moje zapisane dane: <br/>" +
   	 			"Płeć: " + localStorage.getItem("myGender") + " <br/>" +
   	 			"Waga: " + localStorage.getItem("myWeight") + " kg" + " <br/>" +
   	 			"Wzrost: " + localStorage.getItem("myHeight") + " cm" + " <br/>" +
   	 			"Wiek: " + localStorage.getItem("myAge") + " <br/>" +  	 	
   	 			"Aktywność: " + localStorage.getItem("myActivityLevel") + "</p>"); 	 	
    };
 

    view.showCaloriesBurn = function(fieldToShow, timeInMinutes, caloriesBurnPerHour) {	
    	fieldToShow.html("<p> W czasie " + timeInMinutes + " min spalisz " +
   	   	 		Calculator.calculateCaloriesBurn(timeInMinutes, caloriesBurnPerHour) + " kcal</p>");
    };
 
	
	view.showBMI = function(fieldToShow) {   	 
    	fieldToShow.html("<p> Twoje BMI wynosi: " + Calculator.calculateBMI(localStorage.getItem("myWeight"),
   	 			localStorage.getItem("myHeight")) + "</p>");  	
    };	
	
	
    view.showBMR = function(fieldToShow) {   	 
    	fieldToShow.html("<p> Twoje podstawowe zapotrzebowanie kaloryczne BMR wynosi: " +
   	 			Calculator.calculateBMR(localStorage.getItem("myWeight"), localStorage.getItem("myHeight"),
   	 			localStorage.getItem("myAge"), localStorage.getItem("myGender")) + " kcal</p>"); 	 	
    };


    view.showCPM = function(fieldToShow) {
    	var BMRvalue = Calculator.calculateBMR(localStorage.getItem("myWeight"), localStorage.getItem("myHeight"),
   	 			localStorage.getItem("myAge"), localStorage.getItem("myGender"));   		
    		
    	fieldToShow.html("<p> Twoje dobowe zapotrzebowanie kaloryczne CPM uwzględniające aktywność fizyczną wynosi: " +
   	 			Calculator.calculateCPM(BMRvalue, localStorage.getItem("myActivityLevelValue")) + " kcal</p>"); 	 	
    };


    view.showCountdownTime = function(timeToCountdown, fieldToShow) {
    	fieldToShow.html(timeToCountdown);
    	TimerCountdown.countdownFromInitialValue();
    };	    


    view.showRandomActivity = function(fieldToShow) {
    	fieldToShow.html(ActivityManagement.getRandomActivity()); 
    };		
	
	
    view.getActivities = function() {
        return ActivityManagement.getActivities();
    };
	
	
    function updateView() {
        ActivityRenderer.renderList(ActivityManagement.getActivities());
        $('[data-role="content1111"]').trigger('create'); //odswieza widok -> dostosowuje dynamicznie
        //dodawane elementy do wybranego stylu
    }	
	

    view.addActivity = function() {
    	ActivityManagement.addActivity($("#activitySelect option:selected").text(), $("#activitySelect").val());
        updateView();
    };	
	
	
    view.deleteActivity = function(activityId) {
    	ActivityManagement.deleteActivity(activityId);
        updateView();
    };	


    return view;


})(AppView || {});


document.addEventListener("deviceready", function(event) {
    ActivityRenderer.renderList(AppView.getActivities());
});
