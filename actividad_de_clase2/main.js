const personajes = [
  { nombre: 'Henry Cavill', profesion: 'Actor', pelicula: 'Liga de la justicia', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGJtwKzghY0b6k0z7HEiLXiMLZQzddDolF4Uehu4ihBmj9t9BM' },
  { nombre: 'Serena Williams', deporte: 'Tenis', logro: '23 títulos de Grand Slam', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH5u6rHMmiROvYx42_T_3nx9l44dDbbp1_mdpNescxTtJlf0Jj' },
  { nombre: 'Anuel AA', profesion: 'Cantante', genero: 'Trap', imagen: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRzs0iIjb7MkoOH1hpMXI-_g3oXv7OPu4OmgjuDILpqh3GHj7pB' },
  { nombre: 'Brad Pitt', profesion: 'Actor', pelicula: 'Guerra mundial Z', imagen: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTlF4_IA7kR7taLInQEw0h6gZEGF4bcB4CTH3PH9GE0kpF4syWI' },
  { nombre: 'Lionel Messi', deporte: 'Fútbol', equipo: 'Paris Saint-Germain', imagen: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSrQcGWFbrIUoB-XbjFNoR-1R6eO4phMrMv5Px550qnwct_9NbCFyY3dmCdejxEdWF_g-uhHuLnLPbmb68' },
  { nombre: 'Emma Watson', profesion: 'Actriz', papel: 'Hermione Granger en Harry Potter', imagen: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSvhujovWf6FwfvyaG1VgLVLMU-ap57dCur6eIuFeFcxUcveyug' },
  { nombre: 'Rihanna', profesion: 'Cantante', genero: 'Pop', imagen: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSA_3JytOPmvCan-DGeN2W67IKXgj_S1S_1wMAITkITgoi-2o6Q' },
  { nombre: 'Cristiano Ronaldo', deporte: 'Futbol', equipo: 'Real Madrid', imagen: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQlj3rCfLHry58AtJ8ZyBEAFPtChMddDSUSjt7C7nV3Nhsni9RIx5b0-n7LxfgerrPS6b-P-u3BOM3abuY' },
  { nombre: 'Tom Holland', profesion: 'Actor', pelicula: 'Spiderman', imagen: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcS0BoHXyTC6fiXdFd39tpPeIOMlurZorAPiD6QJwS2yZVzFQGKQq_padu4AaV6Rug9qf35tExpQkObaYLY' },
  { nombre: 'Michael Jordan', deporte: 'Baloncesto', equipo: 'Chicago Bulls', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7PfnHq-mk__6ISGA8M23DQ0nohuw_HThe4RQoojf50WiK43kQ' }
];

// Función para mostrar la información de los personajes en la página
function mostrarPersonajes() {
  const listaPersonajes = document.getElementById('personajes-lista');

  personajes.forEach(personaje => {
    const card = document.createElement('div');
    card.classList.add('col-md-6', 'col-lg-4');

    card.innerHTML = `
      <div class="card">
        <img src="${personaje.imagen}" class="card-img-top" alt="${personaje.nombre}">
        <div class="card-body">
          <h5 class="card-title">${personaje.nombre}</h5>
          <p class="card-text">
            ${personaje.profesion ? 'Profesión: ' + personaje.profesion : ''}
            ${personaje.deporte ? '<br>Deporte: ' + personaje.deporte : ''}
            ${personaje.pelicula ? '<br>Película: ' + personaje.pelicula : ''}
            ${personaje.genero ? '<br>Género musical: ' + personaje.genero : ''}
            ${personaje.logro ? '<br>Logro: ' + personaje.logro : ''}
            ${personaje.equipo ? '<br>Equipo: ' + personaje.equipo : ''}
            ${personaje.papel ? '<br>Papel: ' + personaje.papel : ''}
          </p>
        </div>
      </div>
    `;

    listaPersonajes.appendChild(card);
  });
}

mostrarPersonajes();
