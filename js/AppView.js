var AppView = (function(view) {

    view.showSavedPersonalInfo = function(fieldToShow) {
    	fieldToShow.html("<p> Moje zapisane dane: <br/>" +
   	 			"Płeć: " + localStorage.getItem("myGender") + " <br/>" +
   	 			"Waga: " + localStorage.getItem("myWeight") + " kg" + " <br/>" +
   	 			"Wzrost: " + localStorage.getItem("myHeight") + " cm" + " <br/>" +
   	 			"Wiek: " + localStorage.getItem("myAge") + " <br/>" +  	 	
   	 			"Aktywność: " + localStorage.getItem("myActivityLevel") + "</p>"); 	 	
    };
    

    return view;


})(AppView || {});