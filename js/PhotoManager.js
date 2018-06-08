
function photoFileSuccess(imageData) {
	var imageTaken = document.getElementById('photoTaken');
	imageTaken.style.display = 'block';
	imageTaken.src = imageData;
}


function photoURISuccess(imageURI) {
	var imageFromLibrary = document.getElementById('photoFromLibrary');
	imageFromLibrary.style.display = 'block';
	imageFromLibrary.src = imageURI;
}


function photoFail(errorMessage) {
	alert('Error: ' + errorMessage);
}


function takeAndAddPhoto() {
	navigator.camera.getPicture(photoFileSuccess, photoFail, { quality: 80, destinationType: Camera.DestinationType.FILE_URI });
}


function getPhoto(source) {
	navigator.camera.getPicture(photoURISuccess, photoFail, { quality: 80, 
		        destinationType: destinationType.FILE_URI,
		        sourceType: source });
}
