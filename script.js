// Project data - Aquí puedes agregar toda la información detallada de cada proyecto
const projectsData = [
    {
        number: '01',
        title: 'Nombre del Proyecto',
        year: '2024',
        client: 'Cliente / Personal',
        role: 'Diseñador de Producto',
        description: 'Esta es una descripción completa del proyecto. Aquí puedes explicar en detalle el concepto, el proceso de diseño, los desafíos enfrentados y las soluciones implementadas. Puedes agregar varios párrafos para contar la historia completa del proyecto.',
        images: 3 // número de imágenes del proyecto
    },
    {
        number: '02',
        title: 'Otro Proyecto',
        year: '2024',
        client: 'Empresa XYZ',
        role: 'Diseño Industrial',
        description: 'Descripción completa del segundo proyecto con todos los detalles sobre el proceso creativo, investigación, desarrollo y resultado final.',
        images: 4
    },
    {
        number: '03',
        title: 'Tercer Proyecto',
        year: '2023',
        client: 'Startup ABC',
        role: 'Concept Design',
        description: 'Información detallada sobre este proyecto de ilustración y concepto, incluyendo inspiraciones, técnicas utilizadas y el impacto del trabajo.',
        images: 3
    },
    {
        number: '04',
        title: 'Cuarto Proyecto',
        year: '2023',
        client: 'Proyecto Personal',
        role: 'Modelado 3D & Render',
        description: 'Descripción extensa del cuarto proyecto con información sobre el software utilizado, el proceso de modelado y renderizado.',
        images: 5
    }
];

// FUNCIÓN PARA ABRIR EL MODAL DE PROYECTO
function openProject(index) {
    const project = projectsData[index];
    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');
    
    // Generate images HTML
    let imagesHTML = '';
    for(let i = 0; i < project.images; i++) {
        imagesHTML += '<div class="modal-image-container"></div>';
    }
    
    modalContent.innerHTML = `
        <div class="modal-header">
            <div class="modal-number">(${project.number})</div>
            <h2 class="modal-title">${project.title}</h2>
            <div class="modal-meta">
                <div class="modal-meta-item">
                    AÑO
                    <span>${project.year}</span>
                </div>
                <div class="modal-meta-item">
                    CLIENTE
                    <span>${project.client}</span>
                </div>
                <div class="modal-meta-item">
                    ROL
                    <span>${project.role}</span>
                </div>
            </div>
        </div>
        <div class="modal-description">
            <p>${project.description}</p>
        </div>
        <div class="modal-images">
            ${imagesHTML}
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// FUNCIÓN PARA CERRAR EL MODAL DE PROYECTO
function closeProject() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// CERRAR MODAL CON LA TECLA ESCAPE
document.addEventListener('keydown', function(e) {
    if(e.key === 'Escape') {
        closeProject();
    }
});

// CERRAR MODAL AL HACER CLIC FUERA DEL CONTENIDO
const projectModalElement = document.getElementById('projectModal');
if (projectModalElement) {
    projectModalElement.addEventListener('click', function(e) {
        // Verifica si el clic fue directamente en el fondo del modal (e.target === this)
        if(e.target === this) {
            closeProject();
        }
    });
}


// SMOOTH SCROLL (Desplazamiento suave)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ANIMACIÓN DE BARRAS DE HABILIDAD (SKILL BARS) AL HACER SCROLL
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.skill-progress').forEach(bar => {
                bar.style.width = bar.parentElement.previousElementSibling.querySelector('span:last-child').textContent;
            });
            // Opcional: deja de observar después de animar para no repetir
            // observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

const skillsSection = document.querySelector('.skills');
if (skillsSection) observer.observe(skillsSection);