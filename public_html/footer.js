// footer.js
function cargarFooter() {
    const footer = document.querySelector('footer');
    
    const secciones = [
        {
            titulo: 'Información Legal',
            enlaces: [
                { texto: 'Términos y Condiciones', url: 'terminos-condiciones.html' },
                { texto: 'Política de Privacidad', url: 'politica-privacidad.html' }
            ]
        },
        {
            titulo: 'Sobre Nosotros',
            enlaces: [
                { texto: 'Nosotros', url: 'nosotros.html' },
                { texto: 'Servicios', url: 'servicios.html' }
            ]
        },
        {
            titulo: 'Contáctanos',
            enlaces: [
                { texto: 'Libro de Reclamaciones', url: 'reclamaciones.html' },
                { texto: 'Procedimiento de atención de Reclamos', url: 'procedimientos.html' }
            ]
        },
        {
            titulo: 'Redes Sociales',
            enlaces: [
                { texto: 'Facebook', url: 'https://www.facebook.com/ClinicaSPablo', img: 'recursos/facebook.png' },
                { texto: 'Instagram', url: 'https://www.tiktok.com/@red_sanpablo', img: 'recursos/instagram.png' },
                { texto: 'Youtube', url: 'https://www.youtube.com/@red_sanpablo', img: 'recursos/youtube.png' },
                { texto: 'TikTok', url: 'https://www.instagram.com/sanpablo_reddeclinicas', img: 'recursos/tik-tok.png' }
            ]
        }
    ];
    
    secciones.forEach(seccion => {
        const section = document.createElement('section');
        section.className = 'footer-section';
        
        const titulo = document.createElement('p');
        titulo.textContent = seccion.titulo;
        section.appendChild(titulo);
        
        const ul = document.createElement('ul');
        
        seccion.enlaces.forEach(enlace => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = enlace.url;
            
            if (enlace.img) {
                const img = document.createElement('img');
                img.src = enlace.img;
                img.alt = enlace.texto;
                a.appendChild(img);
            } else {
                a.textContent = enlace.texto;
            }
            
            li.appendChild(a);
            ul.appendChild(li);
        });
        
        section.appendChild(ul);
        footer.appendChild(section);
    });
}

cargarFooter();