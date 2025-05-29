
const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.slide');
let index = 0;

function nextSlide() {
  index = (index + 1) % slides.length;
  track.style.transform = `translateX(-${index * 80}vw)`;
}

setInterval(nextSlide, 3000);



const dataInicial = new Date('2022-04-01T14:35:00');

function atualizarContador() {
  const agora = new Date();
  let diff = agora - dataInicial;

  const segundosTotais = Math.floor(diff / 1000);
  const minutosTotais = Math.floor(segundosTotais / 60);
  const horasTotais = Math.floor(minutosTotais / 60);
  const diasTotais = Math.floor(horasTotais / 24);
  const anos = Math.floor(diasTotais / 365);

  const dias = diasTotais % 365;
  const horas = horasTotais % 24;
  const minutos = minutosTotais % 60;
  const segundos = segundosTotais % 60;

  document.getElementById('contador').textContent =
    `Já fazem ${anos} anos, ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos.`;
}

atualizarContador();
setInterval(atualizarContador, 1000);




function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('emoji');
  heart.innerText = '🌸';

  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
  heart.style.animationDuration = (Math.random() * 2 + 3) + 's';

  document.getElementById('emoji-container').appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}


setInterval(createHeart, 100);




