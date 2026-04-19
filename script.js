const body = document.body;
const customGridSize = document.querySelector(".grid-size");
const container = document.createElement("div");

container.classList.add("container");

body.appendChild(container);

// ||RANDOM COLOR
function randomColor(red, green, blue, alpha) {
	const r = Math.floor(Math.random() * red);
	const g = Math.floor(Math.random() * green);
	const b = Math.floor(Math.random() * blue);
	const color = `rgba(${r}, ${g}, ${b}, ${alpha}%)`;
	return color;
}

// ||GRID SIZE 16 X 16
for (let i = 0; i < 256; i++) {
	const square = document.createElement("div");
	square.classList.add("square");

	container.appendChild(square);
}

const squares = document.querySelectorAll(".square");

// **DRAWING
for (const square of squares) {
	let alpha = 0;

	square.addEventListener("pointerover", (event) => {
		if (
			window.getComputedStyle(square).getPropertyValue("background-color") ===
			"rgb(255, 255, 255)"
		) {
			alpha = 10;
		} else if (alpha >= 10 && alpha < 100) {
			alpha += 10;
		}

		event.target.style.backgroundColor = randomColor(200, 200, 200, alpha);
	});
}

// ||CUSTOM GRID SIZE
customGridSize.addEventListener("click", () => {
	container.replaceChildren();

	let customSize;

	// **PROMPT
	while (
		customSize < 8 ||
		customSize > 100 ||
		customSize === "" ||
		customSize === undefined ||
		!Number.isInteger(customSize)
	) {
		customSize = Number(prompt("Enter grid size", ""));
		if (
			customSize < 8 ||
			customSize > 100 ||
			customSize === undefined ||
			!Number.isInteger(customSize)
		) {
			alert("Please enter one of the integers between 8 and 100");
		}
	}

	// **CUSTOM GRID SIZE
	const gridSize = customSize * customSize;
	for (let i = 0; i < gridSize; i++) {
		const newSquare = document.createElement("div");
		newSquare.classList.add("new-square");
		newSquare.style.width = `${800 / customSize}px`;
		newSquare.style.height = `${800 / customSize}px`;

		container.appendChild(newSquare);
	}

	// **DRAWING
	const newSquares = document.querySelectorAll(".new-square");

	for (const newSquare of newSquares) {
		let alpha = 0;
		newSquare.addEventListener("pointerover", (event) => {
			if (
				window
					.getComputedStyle(newSquare)
					.getPropertyValue("background-color") === "rgb(255, 255, 255)"
			) {
				alpha = 10;
			} else if (alpha >= 10 && alpha < 100) {
				alpha += 10;
			}

			event.target.style.backgroundColor = randomColor(200, 200, 200, alpha);
		});
	}
});
