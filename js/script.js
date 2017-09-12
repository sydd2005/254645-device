var link = document.querySelector(".write-us");
var popup = document.querySelector(".write-us-overlay");
var form = popup.querySelector("form");
var fullname = form.querySelector("[name=fullname]");
var closeButton = popup.querySelector(".modal-close");

link.addEventListener("click", function (event) {
	event.preventDefault();
	popup.classList.add("modal-show", "animated-modal-show");
});

form.addEventListener("submit", function(event) {
	if (!fullname.value) {
		event.preventDefault();
		fullname.classList.add("invalid");
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
	}
});

closeButton.addEventListener("click", function (event) {
	event.preventDefault();
	fullname.classList.remove("invalid");
	popup.classList.remove("modal-show", "animated-modal-show", "modal-error");
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

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if(popup.classList.contains("modal-show")) {
			fullname.classList.remove("invalid");
			popup.classList.remove("modal-show", "animated-modal-show", "modal-error");
		}
		if(mapPopup.classList.contains("modal-show")) {
			mapPopup.classList.remove("modal-show");
		}
	}
});
