let listaAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    // Validar si el campo está vacío
    if (nombreAmigo === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Validar si el nombre ya existe en la lista
    if (listaAmigos.includes(nombreAmigo)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    // Agregar el nombre a la lista
    listaAmigos.push(nombreAmigo);
    inputAmigo.value = ""; 

    // Actualizar la lista visual
    actualizarListaAmigos();
}

// Función para actualizar la lista visual de amigos
function actualizarListaAmigos() {
    const listaAmigosElement = document.getElementById('listaAmigos');
    listaAmigosElement.innerHTML = ""; // Limpiar la lista antes de actualizar

    // Recorrer el array y agregar cada nombre a la lista
    listaAmigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        li.setAttribute('role', 'listitem');
        listaAmigosElement.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay nombres en la lista. Agrega al menos un amigo.");
        return;
    }

    // Seleccionar un nombre aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[indiceAleatorio];

    // Mostrar el resultado
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}

document.addEventListener('DOMContentLoaded', () => {
    const inputAmigo = document.getElementById('amigo');

    // Permitir agregar un amigo presionando "Enter"
    inputAmigo.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            agregarAmigo();
        }
    });
}
)
