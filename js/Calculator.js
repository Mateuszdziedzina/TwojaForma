var Calculator = (function(calculatorValue) {
    
    calculatorValue.calculateBMI = function(weightInKilograms, heightInCentimeters) {   	 
   	 	var heightInMeters = heightInCentimeters/100;
   	 
   	 	var BMI = weightInKilograms/(heightInMeters*heightInMeters);
   	 	
   	 	return BMI;
    };
    

    return calculatorValue;

})(Calculator || {});





