// Función para hacer scroll suave a una sección
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Manejar el envío del formulario de contacto
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simular envío (en un sitio real, esto iría a un servidor)
    const responseDiv = document.getElementById('form-response');
    responseDiv.textContent = `¡Gracias, ${name}! Tu mensaje ha sido enviado. Te contactaremos pronto.`;
    responseDiv.style.color = '#27ae60';
    
    // Limpiar el formulario
    this.reset();
    
    // Ocultar el mensaje después de 5 segundos
    setTimeout(() => {
        responseDiv.textContent = '';
    }, 5000);
});

// Agregar funcionalidad al menú móvil (si se expande en el futuro)
document.addEventListener('DOMContentLoaded', function() {
    // Aquí se podría agregar un toggle para el menú móvil si se implementa
    console.log('Página cargada. Servicios Electrónicos listo.');
});

// Animación de entrada para las tarjetas de servicio
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});