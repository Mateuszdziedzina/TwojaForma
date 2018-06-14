/* module to calculate values */

var Calculator = (function(calculatorValue) {
 
	/* function to calculate BMI value based on weight in kilograms and height in centimeters */
    calculatorValue.calculateBMI = function(weightInKilograms, heightInCentimeters) {   	 
   	 	
		var heightInMeters = heightInCentimeters/100;
   	 
   	 	var BMI = weightInKilograms/(heightInMeters*heightInMeters);
   	 	
   	 	return BMI;
    };
	

	/* function to calculate BMR value based on weight in kilograms and height in centimeters, age and gender*/
    calculatorValue.calculateBMR = function(weightInKilograms, heightInCentimeters, age, gender) {
   	 	var BMR = 0;
   	 	
   	 	if(gender == "Kobieta")
   	 	{
   	 		BMR = 9.99*weightInKilograms + 6.25*heightInCentimeters - 4.92*age - 161;
   	 	}
   	 	else
   	 	{
   	 		BMR = 9.99*weightInKilograms + 6.25*heightInCentimeters - 4.92*age + 5;   	 		
   	 	}
   	 
   	 	return BMR;
    };	


	/* function to calculate CPM value based on BMR value and activity level */
	calculatorValue.calculateCPM = function(BMRvalue, activityLevel) {
   	 	var CPM = BMRvalue*activityLevel;
   	 	
   	 	return CPM;
    };


	/* function to calculate the amount of burned calories based on activity time in minutes and
	   value of calories burn per hour */
    calculatorValue.calculateCaloriesBurn = function(actvityTimeInMinutes, caloriesPerHour) {
   	 	var calories = (actvityTimeInMinutes*caloriesPerHour)/60;
   	 	
   	 	return calories;
    };
    

    return calculatorValue;

})(Calculator || {});





