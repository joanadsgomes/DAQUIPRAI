const botao = document.querySelector('#menu-botao');
const menu = document.querySelector('#menu-principal');
const icone = document.querySelector('#menu-icone');

function abrirMenu() {
  menu.classList.remove('hidden');
  botao.setAttribute('aria-expanded', 'true');
  icone.textContent = '✕';
}

function fecharMenu() {
  menu.classList.add('hidden');
  botao.setAttribute('aria-expanded', 'false');
  icone.textContent = '☰';
}

// botão do menu
botao.addEventListener('click', () => {
  const aberto = botao.getAttribute('aria-expanded') === 'true';
  if (aberto) {
    fecharMenu();
  } else {
    abrirMenu();
  }
});

// tecla que fecha o menu
document.addEventListener('keydown', (evento) => {
  if (evento.key === 'Escape' && botao.getAttribute('aria-expanded') === 'true') {
    fecharMenu();
    botao.focus();
  }
});

// botão para fechar o menu
document.addEventListener('click', (evento) => {
  const aberto = botao.getAttribute('aria-expanded') === 'true';
  const clicouNoMenu = menu.contains(evento.target);
  const clicouNoBotao = botao.contains(evento.target);

  if (aberto && !clicouNoMenu && !clicouNoBotao) {
    fecharMenu();
  }
});

// responsividade entre o display do telemóvel e computador
window.matchMedia('(min-width: 768px)').addEventListener('change', (evento) => {
  if (evento.matches) {
    fecharMenu();
  }
});