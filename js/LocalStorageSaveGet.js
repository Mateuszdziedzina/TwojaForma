var LocalStorageSaveGet = (function(storedData) {

	storedData.savePersonalInfoData = function() {   	 
		localStorage.setItem("myWeight", $("#sliderWeight").val());
		localStorage.setItem("myHeight", $("#sliderHeight").val());
		localStorage.setItem("myAge", $("#sliderAge").val());
		localStorage.setItem("myGender", $("input:radio[name=genderSelect]:checked").val());
		localStorage.setItem("myActivityLevelValue", $("#activityLevelSelect").val());
		localStorage.setItem("myActivityLevel", $("#activityLevelSelect option:selected").text());
		
		navigator.vibrate(1000);
    };


    return storedData;

})(LocalStorageSaveGet || {});