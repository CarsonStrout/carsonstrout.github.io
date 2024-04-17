document.addEventListener("DOMContentLoaded", function () {
	document.querySelectorAll(".toggleVideo").forEach(function (button) {
		button.addEventListener("click", function () {
			var videoId = button.getAttribute("data-target");
			var videoContainer = document.getElementById(videoId);
			var iframe = videoContainer.querySelector("iframe");
			if (!iframe) {
				console.error("No iframe found in container with ID:", videoId);
				return;
			}

			var display = window.getComputedStyle(videoContainer).display;

			if (display !== "none") {
				videoContainer.style.display = "none";
				var src = iframe.src;
				iframe.src = "";
				setTimeout(() => {
					iframe.src = src;
				}, 50);
			} else {
				videoContainer.style.display = "block";
			}
		});
	});
});
