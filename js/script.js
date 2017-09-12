var link = document.querySelector(".write-us");
var popup = document.querySelector(".write-us-overlay");
var closeButton = document.querySelector(".modal-write-us .modal-close");

link.addEventListener("click", function (event) {
	event.preventDefault();
	popup.classList.add("modal-show", "animated-modal-show");
});

closeButton.addEventListener("click", function (event) {
	event.preventDefault();
	popup.classList.remove("modal-show", "animated-modal-show");
});

var mapLink = document.querySelector(".map-link");
var mapPopup = document.querySelector(".map-overlay");
var mapCloseButton = document.querySelector(".modal-map .modal-close");

mapLink.addEventListener("click", function (event) {
	event.preventDefault();
	mapPopup.classList.add("modal-show");
});

mapCloseButton.addEventListener("click", function (event) {
	event.preventDefault();
	mapPopup.classList.remove("modal-show");
});
