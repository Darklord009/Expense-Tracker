const currencyEl_one = document.querySelector('#currency-one');
const amountEl_one = document.querySelector('#amount-one');
const curTwo = document.querySelector('#currency-two');
const amountEl_two = document.querySelector('#amount-two');
const rateEl = document.querySelector('#rate');
const swap = document.querySelector('#swap');

function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two =curTwoo.value;
  fetch("https://open.exchangerate-api.com/v6/latest")
    .then(res => res.json())
    .then(data => {
      //  console.log(data);
      const rate = data.rates[currency_two] / data.rates[currency_one];
      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
      amountEl_two.value = (amountEl_one.value * (rate)).toFixed(2);
    });
}


// Event Listener
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);curTwo.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);

swap.addEventListener('click', () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value =curTwoo.value;
 curTwoo.value = temp;
  calculate();
});

swap.addEventListener('press', () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value =curTwoo.value.value;
 curTwoo.value = temp;
  calculate();
});



calculate();

const move = () => {
  const currency_one = currencyEl_one.value;
  const currency_two =curTwoo.value;
  fetch("https://open.exchangerate-api.com/v6/latest")
    .then(res => res.json())
    .then(data => {
      //  console.log(data);
      const rate = data.rates[currency_two] / data.rates[currency_one];
      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
      amountEl_two.value = (amountEl_one.value * (rate)).toFixed(2);
    });
}