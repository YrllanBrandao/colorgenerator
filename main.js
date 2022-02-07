const areaColor1 = document.querySelector("#areaColor1");
const areaColor2 = document.querySelector("#areaColor2");
const areaColor3 = document.querySelector("#areaColor3");
const areaColor4 = document.querySelector("#areaColor4");
const areaColor5 = document.querySelector("#areaColor5");

const getColor = () => {
	const valueColor = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F",];
	const colorTemplate = ["#"];

	for (let i = 1; i < 7; i++) {
		//gera um valor
		const alpha = Math.round(Math.random() * (valueColor.length));
    console.log(alpha)

		colorTemplate.push(valueColor[alpha]);

	}

	const color = colorTemplate.join().replaceAll(",", "");

	return color;
};

//gerando cores iniciais
if (areaColor1) {
	const color = getColor();
	areaColor1.style.background = `${color}`;

	const areaHex = document.querySelector(".color1");

	areaHex.value = `${color}`;

	//criando os elementos de forma dinâmica

	const cadeado = document.createElement("div");
	cadeado.type = "text";
	cadeado.id = "areaColor1";
	cadeado.classList.add("padlock");
	areaColor1.appendChild(cadeado);
}
if (areaColor2) {
	const color = getColor();
	areaColor1.style.background = `${color}`;

	const areaHex = document.querySelector(".color2");

	areaHex.value = `${color}`;

	//criando os elementos de forma dinâmica

	const cadeado = document.createElement("div");
	cadeado.type = "text";
	cadeado.id = "areaColor2";
	cadeado.classList.add("padlock");
	areaColor2.appendChild(cadeado);
}
if (areaColor3) {
	const color = getColor();
	areaColor3.style.background = `${color}`;

	const areaHex = document.querySelector(".color3");

	areaHex.value = `${color}`;

	//criando os elementos de forma dinâmica

	const cadeado = document.createElement("div");
	cadeado.type = "text";
	cadeado.id = "areaColor3";
	cadeado.classList.add("padlock");
	areaColor3.appendChild(cadeado);
}
if (areaColor4) {
	const color = getColor();
	areaColor4.style.background = `${color}`;

	const areaHex = document.querySelector(".color4");

	areaHex.value = `${color}`;

	//criando os elementos de forma dinâmica

	const cadeado = document.createElement("div");
	cadeado.type = "text";
	cadeado.id = "areaColor4";
	cadeado.classList.add("padlock");
	areaColor4.appendChild(cadeado);
}
if (areaColor5) {
	const color = getColor();
	areaColor5.style.background = `${color}`;

	const areaHex = document.querySelector(".color5");

	areaHex.value = `${color}`;

	//criando os elementos de forma dinâmica

	const cadeado = document.createElement("div");
	cadeado.type = "text";
	cadeado.id = "areaColor5";
	cadeado.classList.add("padlock");
	areaColor5.appendChild(cadeado);
}

//menu Toogle

const menuMobile = document.querySelector("#menuToggle");
const navMenu = document.querySelector("#navMenu");

menuMobile.addEventListener("click", () => {
	navMenu.classList.toggle("active");
	menuMobile.classList.toggle("active");
});

//
const botaoGerador = document.querySelector("#botaoGerar");

botaoGerador.addEventListener("click", () => {
	if (areaColor1) {
		if (!areaColor1.classList.contains("locked")) {
			const color = getColor();
			areaColor1.style.background = `${color}`;

			const areaHex = document.querySelector(".color1");

			areaHex.value = `${color}`;
		}
	}

	if (areaColor2) {
		if (!areaColor2.classList.contains("locked")) {
			const color = getColor();
			areaColor2.style.background = `${color}`;

			const areaHex = document.querySelector(".color2");

			areaHex.value = `${color}`;
		}
	}

	if (areaColor3) {
		if (!areaColor3.classList.contains("locked")) {
			const color = getColor();
			areaColor3.style.background = `${color}`;

			const areaHex = document.querySelector(".color3");

			areaHex.value = `${color}`;
		}
	}
	if (areaColor4) {
		if (!areaColor4.classList.contains("locked")) {
			const color = getColor();
			areaColor4.style.background = `${color}`;

			const areaHex = document.querySelector(".color4");

			areaHex.value = `${color}`;
		}
	}
	if (areaColor5) {
		if (!areaColor5.classList.contains("locked")) {
			const color = getColor();
			areaColor5.style.background = `${color}`;

			const areaHex = document.querySelector(".color5");

			areaHex.value = `${color}`;
		}
	}
});

//copiando as cores para área de transferência

const inputColor = document.querySelectorAll(".inputColor");

inputColor.forEach((input) => {
	input.addEventListener("click", () => {
		input.select();

		document.execCommand("copy");

		input.classList.toggle("active");

		const cor = input.value;

		input.value = "Copiado!";

		setTimeout(() => {
			input.value = `${cor}`;
			input.style.background = "rgba(0,0,0,.1)";
		}, 300);
	});
});

//travando uma cor

const padlock = document.querySelectorAll(".padlock");

padlock.forEach((padlk) => {
	padlk.addEventListener("click", () => {
		padlk.classList.toggle("active");

		switch (padlk.id) {
			case "areaColor1":
				const contem = areaColor1.classList.contains("locked");

				contem
					? areaColor1.classList.remove("locked")
					: areaColor1.classList.add("locked");
				break;

			case "areaColor2":
				const contem2 = areaColor2.classList.contains("locked");

				contem2
					? areaColor2.classList.remove("locked")
					: areaColor2.classList.add("locked");
				break;

			case "areaColor3":
				const contem3 = areaColor3.classList.contains("locked");

				contem3
					? areaColor3.classList.remove("locked")
					: areaColor3.classList.add("locked");
				break;

			case "areaColor4":
				const contem4 = areaColor4.classList.contains("locked");

				contem4
					? areaColor4.classList.remove("locked")
					: areaColor4.classList.add("locked");
				break;

			case "areaColor5":
				const contem5 = areaColor5.classList.contains("locked");

				contem5
					? areaColor5.classList.remove("locked")
					: areaColor5.classList.add("locked");
				break;
		}
	});
});
