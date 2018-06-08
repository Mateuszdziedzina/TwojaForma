
function takeAndAddPhoto() {
	navigator.camera.getPicture(photoFileSuccess, photoFail, { quality: 80, destinationType: Camera.DestinationType.FILE_URI });
}
