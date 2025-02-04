document.addEventListener("DOMContentLoaded", () => {
	document.querySelectorAll("a[data-target]").forEach((anchor) => {
		anchor.addEventListener("click", function (event) {
			event.preventDefault(); // Prevent default anchor behavior
			let targetId = this.getAttribute("data-target");
			let targetElement = document.getElementById(targetId);

			if (targetElement) {
				let offset = 100; // Adjust this based on your padding/margins
				let targetPosition =
					targetElement.getBoundingClientRect().top + window.scrollY - offset;
				window.scrollTo({ top: targetPosition, behavior: "smooth" });
			}
		});
	});
});
