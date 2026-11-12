const separadores = document.querySelectorAll('[role="tab"]');


const classesAtivo = ['border-orange-600', 'bg-white', 'text-sky-950'];
const classesInativo = ['border-transparent', 'bg-slate-100', 'text-slate-600', 'hover:bg-slate-50'];

function ativarSeparador(separadorEscolhido, darFoco = false) {
  for (const separador of separadores) {
    const ativo = separador === separadorEscolhido;
    const painel = document.getElementById(separador.getAttribute('aria-controls'));

    
    separador.setAttribute('aria-selected', ativo ? 'true' : 'false');
    separador.tabIndex = ativo ? 0 : -1;

    
    if (ativo) {
      separador.classList.remove(...classesInativo);
      separador.classList.add(...classesAtivo);
    } else {
      separador.classList.remove(...classesAtivo);
      separador.classList.add(...classesInativo);
    }

    
    painel.hidden = !ativo;
  }

  if (darFoco) {
    separadorEscolhido.focus();
  }
}


function atualizarEndereco(separador) {
  const nome = separador.id === 'tab-recomendacao' ? '#recomendacao' : '#orcamento';
  history.replaceState(null, '', nome);
}


for (const separador of separadores) {
  separador.addEventListener('click', () => {
    ativarSeparador(separador);
    atualizarEndereco(separador);
  });
}


for (const separador of separadores) {
  separador.addEventListener('keydown', (evento) => {
    const lista = Array.from(separadores);
    const atual = lista.indexOf(separador);
    let novo = null;

    if (evento.key === 'ArrowRight') novo = lista[(atual + 1) % lista.length];
    if (evento.key === 'ArrowLeft') novo = lista[(atual - 1 + lista.length) % lista.length];
    if (evento.key === 'Home') novo = lista[0];
    if (evento.key === 'End') novo = lista[lista.length - 1];

    if (novo) {
      evento.preventDefault();
      ativarSeparador(novo, true);
      atualizarEndereco(novo);
    }
  });
}


function abrirSeparadorDoEndereco() {
  if (location.hash === '#recomendacao') {
    ativarSeparador(document.getElementById('tab-recomendacao'));
  } else if (location.hash === '#orcamento') {
    ativarSeparador(document.getElementById('tab-orcamento'));
  }
}

abrirSeparadorDoEndereco();
window.addEventListener('hashchange', abrirSeparadorDoEndereco);