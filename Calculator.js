const display = document.getElementById('display');
const btns = document.querySelectorAll('.btn');

btns.forEach(button => {
  button.addEventListener('click', () => {
    const val = button.dataset.value;

    if (val === 'ac') {
      display.value = '';
    } else if (val === 'de') {
      display.value = display.value.slice(0, -1);
    } else if (val === '=') {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = 'cant solve sry!!';
      }
    } else {
      display.value += val;
    }
  });
});
