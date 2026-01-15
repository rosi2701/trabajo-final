const projectsData = [
    {
        number: '01',
        title: 'Festival del Cachureo',
        year: '2024',
        tipo: 'Académico',
        modalidad: 'Grupal',
        description: 'Este proyecto tiene como objetivo ser un espacio de ventas oficial de productos reutilizados y para los recicladores de base del programa "Reutiliza con Sentido" de la Municipalidad de Peñalolén. Proyecto desarrollado con el apoyo de Puentes UC.',
        thumbnail: 'imagenes/festival1.png',
        images: [
            'imagenes/festival1.png',
            'imagenes/festival2.png',
            'imagenes/festival3.png',
            'imagenes/festival4.png'
        ]
    },
    {
        number: '02',
        title: 'Scape!',
        year: '2025',
        tipo: 'Académico',
        modalidad: 'Grupal',
        description: 'Proyecto desarrollado en conjunto con el Aeropuerto de Santiago como contraparte institucional. Consiste en la creación de una plataforma inteligente que utiliza recomendaciones locales para guiar a los turistas, conectando destinos de escape y facilitando el descubrimiento de los diversos atractivos de Chile.',
        thumbnail: 'imagenes/scape1.png',
        images: [
            'imagenes/scape1.png',
            'imagenes/scape2.png',
            'imagenes/scape3.png',
            'imagenes/scape4.png',
            'imagenes/scape5.png'
        ]
    },
    {
        number: '03',
        title: 'Batimóvil 1989',
        year: '2025',
        tipo: 'Académico',
        modalidad: 'Individual',
        description: 'Modelado 3D detallado del Batimóvil (película Batman, 1989), creado para demostrar dominio en técnicas avanzadas de Diseño por Computación.',
        thumbnail: 'imagenes/batimovil1.png',
        images: [
            'imagenes/batimovil1.png',
            'imagenes/batimovil2.png',
            'imagenes/batimovil3.png',
            'imagenes/batimovil4.png',
            'imagenes/batimovil5.png'
        ]
    },
    {
        number: '04',
        title: 'Preventips',
        year: '2025',
        tipo: 'Académico',
        modalidad: 'Grupal',
        description: 'Diseño e implementación de un programa comunicacional integral para la prevención de riesgos en San José de Maipo, desarrollado en colaboración con la Junta de Vecinos de San Alfonso. El proyecto se materializó a través de un sistema omnicanal: desde una estrategia digital con plantillas y posts para Instagram, hasta una activación en terreno. Esta última incluyó un stand educativo con entrega de material de utilidad inmediata (afiches e imanes de emergencia) y una herramienta de evaluación mediante un quiz de conocimientos preventivos, logrando cerrar la brecha entre la información digital y la participación comunitaria física.',
        thumbnail: 'imagenes/preventips4.png',
        images: [
            'imagenes/preventipsafiches.png',
            'imagenes/preventipsafiches2.png',
            'imagenes/preventipsinstagram.png',
            'imagenes/preventips2.png',
            'imagenes/preventips1.png'
        ]
    },
    {
        number: '05',
        title: 'NgenPet',
        year: '2025',
        tipo: 'Académico',
        modalidad: 'Individual',
        description: 'Creación de una colección de souvenirs funcionales de protección para mascotas. El proyecto se basa en una profunda investigación de la cosmovisión mapuche y la riqueza biológica de la Reserva Huilo Huilo, logrando un diseño que fusiona la tradición cultural con el valor emocional del cuidado animal. El producto se realizó usando madera de roble reforzada y corte láser. Además, fue expuesto en el IV Encuentro de áreas protegidas en el Centro Cultural La Moneda.',
        thumbnail: 'imagenes/ngenpet1.png',
        images: [
            'imagenes/ngenpet1.png',
            'imagenes/ngenpet2.png',
            'imagenes/ngenpet3.png',
            'imagenes/ngenpet4.png'
        ]
    },
    {
        number: '06',
        title: 'Tocador PALADS',
        year: '2023',
        tipo: 'Académico',
        modalidad: 'Individual',
        description: 'Tocador PALADS busca generar un ambiente vibrante, carismático y funcional, integrando formas geométricas que aportan vida a la habitación. Combina estética y practicidad, incorporando luces estratégicamente ubicadas para iluminar al usuario y facilitar actividades como peinarse o maquillarse. Estas luces cuentan con un interruptor ubicado al costado derecho de la mesa, pensado para un acceso cómodo y discreto.',
        thumbnail: 'imagenes/palads1.png',
        images: [
            'imagenes/palads1.png',
            'imagenes/palads2.png',
            'imagenes/palads3.png',
            'imagenes/palads4.png'
        ]
    }
];

function openProject(index) {
    const project = projectsData[index];
    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');
    
    let imagesHTML = '';
    project.images.forEach(imagePath => {
        imagesHTML += `
            <div class="modal-image-container">
                <img src="${imagePath}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
        `;
    });
    
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
                    TIPO
                    <span>${project.tipo}</span>
                </div>
                <div class="modal-meta-item">
                    MODALIDAD
                    <span>${project.modalidad}</span>
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

function closeProject() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

document.addEventListener('keydown', function(e) {
    if(e.key === 'Escape') {
        closeProject();
    }
});

const projectModalElement = document.getElementById('projectModal');
if (projectModalElement) {
    projectModalElement.addEventListener('click', function(e) {
        if(e.target === this) {
            closeProject();
        }
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.skill-progress').forEach(bar => {
                bar.style.width = bar.parentElement.previousElementSibling.querySelector('span:last-child').textContent;
            });
        }
    });
}, observerOptions);

const skillsSection = document.querySelector('.skills');
if (skillsSection) observer.observe(skillsSection);

document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach((card, index) => {
        const projectImage = card.querySelector('.project-image');
        if (projectImage && projectsData[index].thumbnail) {
            projectImage.style.backgroundImage = `url('${projectsData[index].thumbnail}')`;
            projectImage.style.backgroundSize = 'cover';
            projectImage.style.backgroundPosition = 'center';
            projectImage.innerHTML = '';
        }
        
        card.addEventListener('click', () => {
            openProject(index);
        });
    });
});



