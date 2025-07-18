// chess.js - Sistema de comentarios para recetas
// Asegúrate de que este archivo esté en la carpeta /js/ de tu proyecto

// Variables globales
let comments = [];
let currentRating = 0;

// Función para alternar check de ingredientes
function toggleCheck(element) {
    element.classList.toggle('checked');
}

// Función para inicializar el sistema cuando el DOM esté listo
function initializeCommentSystem() {
    // Sistema de calificación con estrellas
    const stars = document.querySelectorAll('.star');
    
    if (stars.length > 0) {
        stars.forEach(star => {
            star.addEventListener('click', function() {
                currentRating = parseInt(this.getAttribute('data-rating'));
                updateStars();
            });
            
            star.addEventListener('mouseover', function() {
                const rating = parseInt(this.getAttribute('data-rating'));
                highlightStars(rating);
            });
        });

        // Evento para cuando el mouse sale del área de estrellas
        const ratingStars = document.getElementById('ratingStars');
        if (ratingStars) {
            ratingStars.addEventListener('mouseleave', function() {
                updateStars();
            });
        }
    }

    // Manejo del formulario de comentarios
    const commentForm = document.getElementById('commentForm');
    if (commentForm) {
        commentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const userName = document.getElementById('userName').value;
            const userEmail = document.getElementById('userEmail').value;
            const commentText = document.getElementById('commentText').value;
            
            if (currentRating === 0) {
                alert('Por favor, selecciona una calificación con estrellas');
                return;
            }

            // Crear nuevo comentario
            const newComment = {
                id: Date.now(),
                name: userName,
                email: userEmail,
                text: commentText,
                rating: currentRating,
                date: new Date().toLocaleString('es-ES')
            };

            // Agregar comentario al array
            comments.unshift(newComment);
            
            // Actualizar la interfaz
            displayComments();
            updateCommentsCount();
            
            // Limpiar formulario
            this.reset();
            currentRating = 0;
            updateStars();
            
            // Mostrar mensaje de éxito
            showSuccessMessage();
        });
    }

    // Cargar comentarios de ejemplo al inicializar
    loadExampleComments();
}

// Función para resaltar estrellas
function highlightStars(rating) {
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

// Función para actualizar estrellas según la calificación actual
function updateStars() {
    highlightStars(currentRating);
}

// Función para mostrar comentarios en la interfaz
function displayComments() {
    const commentsList = document.getElementById('commentsList');
    if (!commentsList) return;
    
    commentsList.innerHTML = '';
    
    comments.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.className = 'comment';
        commentElement.innerHTML = `
            <div class="comment-header">
                <span class="comment-author">${escapeHtml(comment.name)}</span>
                <div class="comment-meta">
                    <span class="comment-rating">${'★'.repeat(comment.rating)}${'☆'.repeat(5-comment.rating)}</span>
                    <span class="comment-date">${comment.date}</span>
                </div>
            </div>
            <p class="comment-text">${escapeHtml(comment.text)}</p>
        `;
        commentsList.appendChild(commentElement);
    });
}

// Función para actualizar el contador de comentarios
function updateCommentsCount() {
    const commentsCount = document.getElementById('commentsCount');
    if (commentsCount) {
        const count = comments.length;
        commentsCount.textContent = `${count} comentario${count !== 1 ? 's' : ''}`;
    }
}

// Función para mostrar mensaje de éxito
function showSuccessMessage() {
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(45deg, #00b894, #55a3ff);
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        animation: slideIn 0.5s ease;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    `;
    message.textContent = '¡Comentario publicado exitosamente!';
    
    // Agregar estilos de animación
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.style.animation = 'slideIn 0.5s ease reverse';
        setTimeout(() => {
            message.remove();
        }, 500);
    }, 3000);
}

// Función para escapar HTML y prevenir XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Función para cargar comentarios de ejemplo
function loadExampleComments() {
    const exampleComments = [
        {
            id: 1,
            name: "María González",
            email: "maria@email.com",
            text: "¡Increíble receta! Me quedó perfecto siguiendo todos los pasos. La textura es cremosa y el sabor de los frutos rojos es espectacular. Mi familia la adoró.",
            rating: 5,
            date: "15/01/2025, 14:30"
        },
        {
            id: 2,
            name: "Carlos Mendoza",
            email: "carlos@email.com",
            text: "Primera vez haciendo cheesecake y salió muy bien. El tip de temperatura ambiente fue clave. Solo necesité 5 minutos extra de cocción.",
            rating: 4,
            date: "14/01/2025, 19:45"
        },
        {
            id: 3,
            name: "Ana Fernández",
            email: "ana@email.com",
            text: "Delicioso! Usé fresas y arándanos. La salsa de frutos rojos es el toque perfecto. Definitivamente la haré otra vez.",
            rating: 5,
            date: "13/01/2025, 16:20"
        },
        {
            id: 4,
            name: "Roberto Silva",
            email: "roberto@email.com",
            text: "Muy rica la receta, aunque la primera vez se me agrietó un poco. La segunda vez seguí el consejo de no abrir el horno y quedó perfecta.",
            rating: 4,
            date: "12/01/2025, 11:15"
        },
        {
            id: 5,
            name: "Laura Pérez",
            email: "laura@email.com",
            text: "¡Excelente! Hice una versión sin gluten usando galletas sin gluten para la base y quedó increíble. Gracias por la receta.",
            rating: 5,
            date: "11/01/2025, 16:45"
        }
    ];

    // Cargar comentarios de ejemplo
    comments = exampleComments;
    displayComments();
    updateCommentsCount();
}

// Inicializar el sistema cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', initializeCommentSystem);

// También inicializar si el DOM ya está cargado (por si acaso)
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeCommentSystem);
} else {
    initializeCommentSystem();
}