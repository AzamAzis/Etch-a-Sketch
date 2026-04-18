const body = document.body;
const container = document.createElement("div");
container.classList.add("container");

body.appendChild(container);

const customGridSize = document.querySelector(".grid-size");

for (let i = 0; i < 256; i++) {
	const square = document.createElement("div");
	square.classList.add("square");

	container.appendChild(square);

	// ||HOVER
	square.addEventListener("mouseover", (event) => {
		event.target.classList.add("square-hover");
	});

	square.addEventListener("mouseout", (event) => {
		event.target.classList.add("square-colored");
	});
}

const squares = document.querySelectorAll(".square");
squares[0].style.borderTopLeftRadius = "7px";
squares[16 - 1].style.borderTopRightRadius = "7px";
squares[16 * (16 - 1)].style.borderBottomLeftRadius = "7px";
squares[16 * 16 - 1].style.borderBottomRightRadius = "7px";

customGridSize.addEventListener("click", () => {
	container.replaceChildren();

	let customSize;

	do {
		customSize = Number(prompt("Enter grid size", ""));
		if (customSize < 8 || customSize > 100 || customSize === "") {
			alert("The number is unacceptable");
		}
	} while (
		customSize < 8 ||
		customSize > 100 ||
		customSize === "" ||
		customSize === undefined
	);

	const squares = document.querySelectorAll(".square");
	for (const square of squares) {
		square.remove();
	}

	const gridSize = customSize * customSize;
	for (let i = 0; i < gridSize; i++) {
		const newSquare = document.createElement("div");
		newSquare.classList.add("new-square");
		newSquare.style.width = `${800 / customSize}px`;
		newSquare.style.height = `${800 / customSize}px`;

		newSquare.addEventListener("mouseover", (event) => {
			event.target.classList.add("square-hover");
		});

		newSquare.addEventListener("mouseout", (event) => {
			event.target.classList.add("square-colored");
		});

		container.appendChild(newSquare);
	}

	const newSquares = document.querySelectorAll(".new-square");

	newSquares[0].style.borderTopLeftRadius = "7px";
	newSquares[customSize - 1].style.borderTopRightRadius = "7px";
	newSquares[customSize * (customSize - 1)].style.borderBottomLeftRadius =
		"7px";
	newSquares[customSize * customSize - 1].style.borderBottomRightRadius = "7px";
});
