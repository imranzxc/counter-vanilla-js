let decreaseBtn = document.getElementById('button__decrease');
let increaseBtn = document.getElementById('button__increase');
let resetBtn = document.getElementById('reset');
let counter = document.getElementById('counter');
let count = 0;

decreaseBtn.addEventListener('click', () => {
  count--;
  counter.innerHTML = count;
  counterStyle();
});

increaseBtn.addEventListener('click', () => {
  count++;
  counter.innerHTML = count;
  counterStyle();
});

resetBtn.addEventListener('click', () => {
  count = 0;
  counter.innerHTML = count;
  counterStyle();
});

function counterStyle() {
  if (count < 0) {
    counter.classList.add('negative');
  } else if (count > 0) {
    counter.classList.add('positive');
  } else if (count > 10) {
    counter.classList.add('biggerThanTen');
  } else {
    counter.classList.remove('negative');
    counter.classList.remove('positive');
    counter.classList.remove('biggerThanTen');
  }
}
