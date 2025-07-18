
    // Variables para demo
    const validUsers = [
        { email: 'admin@dulcestentaciones.com', password: 'admin123' },
        { email: 'maria@email.com', password: 'maria123' },
        { email: 'test@test.com', password: 'test123' }
    ];

    // Función para alternar visibilidad de contraseña
    function togglePassword() {
        const passwordInput = document.getElementById('password');
        const toggleBtn = document.querySelector('.password-toggle');
        
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            toggleBtn.textContent = '🙈';
        } else {
            passwordInput.type = 'password';
            toggleBtn.textContent = '👁️';
        }
    }

    // Función para mostrar mensajes
    function showMessage(message, type = 'error') {
        const errorDiv = document.getElementById('errorMessage');
        const successDiv = document.getElementById('successMessage');
        
        // Ocultar todos los mensajes
        errorDiv.style.display = 'none';
        successDiv.style.display = 'none';
        
        if (type === 'error') {
            errorDiv.textContent = message;
            errorDiv.style.display = 'block';
        } else {
            successDiv.textContent = message;
            successDiv.style.display = 'block';
        }
        
        // Auto-ocultar después de 5 segundos
        setTimeout(() => {
            errorDiv.style.display = 'none';
            successDiv.style.display = 'none';
        }, 5000);
    }

    // Función para login social (demo)
    function socialLogin(provider) {
        showMessage(`Iniciando sesión con ${provider}...`, 'success');
        
        // Simular delay de autenticación
        setTimeout(() => {
            showMessage(`¡Sesión iniciada exitosamente con ${provider}!`, 'success');
            setTimeout(() => {
                alert(`¡Bienvenido! Has iniciado sesión con ${provider}`);
                window.location.href = 'index.html';
            }, 1000);
        }, 1500);
    }

    // Función para mostrar formulario de registro (demo)
    function showRegisterForm() {
        alert('Aquí se abriría el formulario de registro.\n\nPor ahora puedes usar estas credenciales de prueba:\n\nEmail: admin@dulcestentaciones.com\nContraseña: admin123\n\nEmail: test@test.com\nContraseña: test123');
    }

    // Manejo del formulario de login
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const remember = document.getElementById('remember').checked;
        
        // Validaciones básicas
        if (!email || !password) {
            showMessage('Por favor, completa todos los campos.');
            return;
        }
        
        if (!isValidEmail(email)) {
            showMessage('Por favor, ingresa un email válido.');
            return;
        }
        
        if (password.length < 6) {
            showMessage('La contraseña debe tener al menos 6 caracteres.');
            return;
        }
        
        // Verificar credenciales (demo)
        const user = validUsers.find(u => u.email === email && u.password === password);
        
        if (user) {
            showMessage('¡Iniciando sesión...', 'success');
            
            // Simular delay de autenticación
            setTimeout(() => {
                showMessage('¡Sesión iniciada exitosamente!', 'success');
                
                if (remember) {
                    showMessage('Sesión guardada para la próxima vez', 'success');
                }

                setTimeout(() => {
                    alert(`¡Bienvenido ${email}!\n\nHas iniciado sesión exitosamente.`);
                    window.location.href = 'index.html';
                }, 1000);
            }, 1000);
        } else {
            showMessage('Email o contraseña incorrectos. Intenta de nuevo.');
        }
    });

    // Función para validar email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Efectos visuales adicionales
    document.addEventListener('DOMContentLoaded', function() {
        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.style.transform = 'scale(1.02)';
            });
            
            input.addEventListener('blur', function() {
                this.parentElement.style.transform = 'scale(1)';
            });
        });

        console.log('🍰 Credenciales de prueba:');
        console.log('Email: admin@dulcestentaciones.com | Contraseña: admin123');
        console.log('Email: test@test.com | Contraseña: test123');
    });
