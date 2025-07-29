document.addEventListener("DOMContentLoaded", () => {
	const fadeObjs = document.querySelectorAll(".fade1");

	const observer = new IntersectionObserver((entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				let obj = entry.target;
				obj.classList.remove("loading");
				obj.classList.add("loaded");
				observer.unobserve(obj);
			}
		});
	});

	fadeObjs.forEach((obj) => {
		observer.observe(obj);
	});

	const fadeObjs2 = document.querySelectorAll(".fade2");

	const observer2 = new IntersectionObserver((entries, observer2) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				let obj = entry.target;
				obj.classList.remove("loading");
				obj.classList.add("loaded-slow");
				observer2.unobserve(obj);
			}
		});
	});

	fadeObjs2.forEach((obj) => {
		observer2.observe(obj);
	});
});
