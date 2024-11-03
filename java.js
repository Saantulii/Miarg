// Función para actualizar la fecha y hora
function updateDateTime() {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0'); // Los meses son base cero
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');

  const dateTimeString = `Última actualización ${day}/${month}/${year} ${hours}:${minutes} hs`;

  // Guardar en localStorage
  localStorage.setItem('lastUpdate', dateTimeString);

  // Actualizar el texto en la página
  document.getElementById('update-text').textContent = dateTimeString;
}

// Función para mostrar la fecha y hora almacenada
function displayStoredDateTime() {
  const storedDateTime = localStorage.getItem('lastUpdate');
  if (storedDateTime) {
      document.getElementById('update-text').textContent = storedDateTime;
  } else {
      // Mostrar una fecha y hora predeterminada si no hay datos almacenados
      document.getElementById('update-text').textContent = 'Última actualización no disponible';
  }
}

// Llamar a la función para mostrar la fecha y hora almacenada al cargar la página
displayStoredDateTime();

// Agregar evento de clic a la imagen para actualizar la fecha y hora
document.getElementById('reiniciar').addEventListener('click', updateDateTime);


  // Seleccionar el contenedor y establecer el estado inicial
const container = document.getElementById('dni-container');
let isFlipped = false;

// Añadir evento de clic para alternar la rotación
container.addEventListener('click', function() {
    if (isFlipped) {
        container.querySelector('.DNI').style.transform = 'rotateY(0deg)';
        container.querySelector('.DNI-ATRAS').style.transform = 'rotateY(180deg)';
    } else {
        container.querySelector('.DNI').style.transform = 'rotateY(180deg)';
        container.querySelector('.DNI-ATRAS').style.transform = 'rotateY(0deg)';
    }
    isFlipped = !isFlipped; // Alternar el estado
});
