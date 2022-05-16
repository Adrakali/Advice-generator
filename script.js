const btn = document.querySelector('div.dice-btn');
const number = document.querySelector('span.advice-number');
const adviceText = document.querySelector('.advice-text');

const getAdvice = async () => {
	const src = 'https://api.adviceslip.com/advice/';
	const id = Math.floor(Math.random() * 224);
	number.textContent = id;

	const response = await fetch(src + id);
	const data = await response.json();
	console.log(data.slip.advice);

	adviceText.textContent = `"${data.slip.advice}"`;
};

btn.addEventListener('click', () => {
	getAdvice();
});
