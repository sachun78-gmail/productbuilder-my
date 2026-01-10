const generatorBtn = document.getElementById('generator-btn');
const numbersContainer = document.getElementById('numbers-container');

generatorBtn.addEventListener('click', () => {
  numbersContainer.innerHTML = '';
  const numbers = new Set();
  while (numbers.size < 6) {
    numbers.add(Math.floor(Math.random() * 45) + 1);
  }

  for (const number of Array.from(numbers).sort((a,b) => a-b)) {
    const circle = document.createElement('div');
    circle.classList.add('number-circle');
    circle.textContent = number;
    numbersContainer.appendChild(circle);
  }
});