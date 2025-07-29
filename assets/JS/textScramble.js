// const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// let intervals = [];

// const h2Elements = Array.from(document.querySelectorAll("h2"));

// h2Elements.forEach((h2Element) => {
// 	h2Element.addEventListener("mouseover", (event) => {
// 		let iteration = 0;
// 		clearInterval(intervals[h2Elements.indexOf(h2Element)]);

// 		intervals[h2Elements.indexOf(h2Element)] = setInterval(() => {
// 			event.target.innerText = event.target.innerText
// 				.split("")
// 				.map((letter, index) => {
// 					if (index < iteration) {
// 						return event.target.dataset.value[index];
// 					}

// 					return letters[Math.floor(Math.random() * 26)];
// 				})
// 				.join("");

// 			if (iteration >= event.target.dataset.value.length) {
// 				clearInterval(intervals[h2Elements.indexOf(h2Element)]);
// 			}

// 			iteration += 1 / 3;
// 		}, 30);
// 	});
// });
