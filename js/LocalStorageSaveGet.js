/* module to save data in local storage */

var LocalStorageSaveGet = (function(storedData) {

	/* function to save personal info data in local memory storage */
	storedData.savePersonalInfoData = function() {   	 
		localStorage.setItem("myWeight", $("#sliderWeight").val());									/* save the value of weight selected in slider */
		localStorage.setItem("myHeight", $("#sliderHeight").val());									/* save the value of height selected in slider */
		localStorage.setItem("myAge", $("#sliderAge").val());										/* save the value of age selected in slider */
		localStorage.setItem("myGender", $("input:radio[name=genderSelect]:checked").val());		/* save the gender selected on radio button */
		localStorage.setItem("myActivityLevelValue", $("#activityLevelSelect").val());				/* save the value connected with activity level */
		localStorage.setItem("myActivityLevel", $("#activityLevelSelect option:selected").text());	/* save the description of activity level */
		
		navigator.vibrate(1000);																	/* use device native functionality - vibration */
    };


    return storedData;

})(LocalStorageSaveGet || {});