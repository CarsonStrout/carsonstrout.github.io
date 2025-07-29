document.addEventListener("DOMContentLoaded", () => {
	const projectImages = document.querySelectorAll(".projects_img");

	function getColor(image, ratio = 10) {
		const canvas = document.createElement("canvas");
		const context = canvas.getContext("2d");
		let width = (canvas.width = image.naturalWidth);
		let height = (canvas.height = image.naturalHeight);

		context.drawImage(image, 0, 0, width, height);

		let data, length;
		let R = 0,
			G = 0,
			B = 0,
			count = 0;

		try {
			data = context.getImageData(0, 0, width, height).data;
			length = data.length;

			for (let i = 0; i < length; i += ratio * 4) {
				++count;
				R += data[i];
				G += data[i + 1];
				B += data[i + 2];
			}

			if (count > 0) {
				R = Math.round(R / count);
				G = Math.round(G / count);
				B = Math.round(B / count);
			}

			return { r: R, g: G, b: B };
		} catch (e) {
			console.log("Error: ", e);
			return { r: 212, g: 175, b: 55 };
		}
	}

	function setBoxShadow(image, color) {
		let baseOpacity = 0.5;
		let shadow1 = `0 4px 8px rgba(${color.r}, ${color.g}, ${color.b}, ${baseOpacity})`;
		let shadow2 = `0 3px 3px rgba(${color.r}, ${color.g}, ${color.b}, ${
			baseOpacity + 0.05
		})`;
		let shadow3 = `0 0 30px -3px rgb(${color.r}, ${color.g}, ${color.b})`;

		image.style.boxShadow = `${shadow1}, ${shadow2}, ${shadow3}`;
	}

	projectImages.forEach((img) => {
		img.addEventListener("mouseenter", () => {
			let color = getColor(img);
			setBoxShadow(img, color);
		});

		img.addEventListener("mouseleave", () => {
			img.style.boxShadow = "";
		});
	});
});
