const inputNome = document.getElementById('nome');
const inputIdade = document.getElementById('idade');
const selectEspecie = document.getElementById('especie');
const btnAdicionar = document.getElementById('adicionar');

const statosPets = document.getElementById('statos');
const listaPets = document.getElementById('listaPets');
const listaPetsA = document.getElementById('adocaoPets');
const listaPetsB = document.getElementById('avaliacaoPets');

btnAdicionar.addEventListener('click', () => {
  const nome = inputNome.value.trim();
  const idade = inputIdade.value.trim();
  const especie = selectEspecie.value;

  if (!nome || !idade || !especie) {
    alert('Por favor, preencha todos os campos!');
    return;
  }

  const petGeral = document.createElement('p');
  petGeral.textContent = `Espécie: ${especie} | Nome: ${nome} | Idade: ${idade} ano(s);`

  const petStatus = document.createElement('p');
  petStatus.textContent = `Espécie: ${especie} | Nome: ${nome} | Idade: ${idade} ano(s);`
  function ordenarLista(lista) {
    const h3 = lista.querySelector('h3');
    const pets = Array.from(lista.querySelectorAll('p'));

    pets.sort((a, b) => {
      const especieA = a.textContent.split('|')[0].replace('Espécie:', '').trim();
      const especieB = b.textContent.split('|')[0].replace('Espécie:', '').trim();
      return especieA.localeCompare(especieB);
    });

    lista.innerHTML = '';
    lista.appendChild(h3);
    pets.forEach(p => lista.appendChild(p));
  }

  listaPets.appendChild(petGeral);
  ordenarLista(listaPets);

  const statusAtual = statosPets.value;

  if (statusAtual === 'adocao') {
    listaPetsA.appendChild(petStatus);
    ordenarLista(listaPetsA);
  }

  if (statusAtual === 'avaliacao') {
    listaPetsB.appendChild(petStatus);
    ordenarLista(listaPetsB);
  }
  
  inputNome.value = '';
  inputIdade.value = '';
  selectEspecie.value = '';
});