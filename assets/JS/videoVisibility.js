document.addEventListener("DOMContentLoaded", function () {
	document.querySelectorAll(".toggleVideo").forEach(function (button) {
		button.addEventListener("click", function () {
			var videoId = button.getAttribute("data-target");
			var videoContainer = document.getElementById(videoId);
			var display = window.getComputedStyle(videoContainer).display;
			videoContainer.style.display = display === "none" ? "block" : "none";
		});
	});
});
