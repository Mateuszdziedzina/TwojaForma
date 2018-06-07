var AppView = (function(view) {

    view.showSavedPersonalInfo = function(fieldToShow) {
    	fieldToShow.html("<p> Moje zapisane dane: <br/>" +
   	 			"Płeć: " + localStorage.getItem("myGender") + " <br/>" +
   	 			"Waga: " + localStorage.getItem("myWeight") + " kg" + " <br/>" +
   	 			"Wzrost: " + localStorage.getItem("myHeight") + " cm" + " <br/>" +
   	 			"Wiek: " + localStorage.getItem("myAge") + " <br/>" +  	 	
   	 			"Aktywność: " + localStorage.getItem("myActivityLevel") + "</p>"); 	 	
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
	

    return view;


})(AppView || {});