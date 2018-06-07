var Calculator = (function(calculatorValue) {
    
    calculatorValue.calculateBMI = function(weightInKilograms, heightInCentimeters) {   	 
   	 	var heightInMeters = heightInCentimeters/100;
   	 
   	 	var BMI = weightInKilograms/(heightInMeters*heightInMeters);
   	 	
   	 	return BMI;
    };
	
		
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
    

    return calculatorValue;

})(Calculator || {});





