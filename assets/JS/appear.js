document.addEventListener("DOMContentLoaded", function () {
	const fadeInSections = document.querySelectorAll(".fade-in-section");

	const appearOnScroll = new IntersectionObserver(function (
		entries,
		appearOnScroll
	) {
		entries.forEach((entry) => {
			if (!entry.isIntersecting) {
				return;
			} else {
				entry.target.classList.add("appear");
				appearOnScroll.unobserve(entry.target);
			}
		});
	});

	fadeInSections.forEach((section) => {
		appearOnScroll.observe(section);
	});
});
