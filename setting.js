const input = document.querySelector('#timer-input');
const btnSave = document.querySelector('.btn-save');

const current = localStorage.getItem('pomodoroCurrentMinutes');
const saved = localStorage.getItem('pomodoroMinutes');
input.value = current || saved || 25;
localStorage.removeItem('pomodoroCurrentMinutes');

btnSave.addEventListener('click', () => {
  const minutes = Number(input.value);

  if (input.value === '' || isNaN(minutes)) return;
  if (minutes < 1 || minutes > 60) return;

  localStorage.setItem('pomodoroMinutes', minutes);
  window.location.href = 'index.html';
});

input.addEventListener('input', () => {
  const minutes = Number(input.value);
  const valid = input.value !== '' && minutes >= 1 && minutes <= 60;
  btnSave.disabled = !valid;
});

// 초기 버튼 상태 설정
btnSave.disabled = input.value === '';
