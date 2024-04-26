async function obtenerChiste() {
    const url = 'https://api.chucknorris.io/jokes/random';
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data.value;
    } catch (error) {
      console.error('Error al obtener chiste:', error);
      return null;
    }
  }
  
  // Función para mostrar un chiste en la página
  async function mostrarChiste() {
    const jokeText = document.getElementById('joke-text');
    const jokeContainer = document.getElementById('joke-container');
    const getJokeBtn = document.getElementById('get-joke-btn');
  
    getJokeBtn.disabled = true;
    jokeText.textContent = 'Cargando chiste...';
  
    const joke = await obtenerChiste();
  
    if (joke) {
      jokeText.textContent = joke;
    } else {
      jokeText.textContent = 'Error al cargar el chiste.';
    }
  
    getJokeBtn.disabled = false;
  }
  
 
  document.getElementById('get-joke-btn').addEventListener('click', mostrarChiste);
  
 
  mostrarChiste();
  