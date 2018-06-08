
function photoFileSuccess(imageData) {
	var imageTaken = document.getElementById('photoTaken');
	imageTaken.style.display = 'block';
	imageTaken.src = imageData;
}


function photoFail(errorMessage) {
	alert('Error: ' + errorMessage);
}


function takeAndAddPhoto() {
	navigator.camera.getPicture(photoFileSuccess, photoFail, { quality: 80, destinationType: Camera.DestinationType.FILE_URI });
}
