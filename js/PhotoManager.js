/* photo management functions */

/* function to be called when photo is successfully taken */
function photoFileSuccess(imageData) {
	/* get the field where to add taken photo */
	var imageTaken = document.getElementById('photoTaken');
	imageTaken.style.display = 'block';
	imageTaken.src = imageData;
}


/* function to be called when photo is successfully chosen */
function photoURISuccess(imageURI) {
	/* get the field where to add selected photo */
	var imageFromLibrary = document.getElementById('photoFromLibrary');
	imageFromLibrary.style.display = 'block';
	imageFromLibrary.src = imageURI;
}


/* function to be called when photo is not taken due to an error */
function photoFail(errorMessage) {
	/* show alert with error description */
	alert('Error: ' + errorMessage);
}


/* function to take and add photo */
function takeAndAddPhoto() {
	/* use native device functionality - camera
	   try to take photo - call success function when it is successful or fail function when it is failed */
	navigator.camera.getPicture(photoFileSuccess, photoFail, { quality: 80, destinationType: Camera.DestinationType.FILE_URI });
}


/* function to get photo from selected source - for example photo album */
function getPhoto(source) {
	navigator.camera.getPicture(photoURISuccess, photoFail, { quality: 80, 
		        destinationType: destinationType.FILE_URI,
		        sourceType: source });
}


