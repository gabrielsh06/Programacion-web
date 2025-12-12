function crearSeccionFooter(titulo, enlaces) {
    const section = document.createElement('section');
    section.className = 'footer-section';
    
    const p = document.createElement('p');
    p.textContent = titulo;
    section.appendChild(p);
    
    const ul = document.createElement('ul');
    
    enlaces.forEach(enlace => {
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
    return section;
}

function cargarFooter() {
    const footer = document.querySelector('footer');
    
    const legal = crearSeccionFooter('Información Legal', [
        { texto: 'Términos y Condiciones', url: 'terminos-condiciones.html' },
        { texto: 'Política de Privacidad', url: 'politica-privacidad.html' }
    ]);
    
    const nosotros = crearSeccionFooter('Sobre Nosotros', [
        { texto: 'Nosotros', url: 'nosotros.html' },
        { texto: 'Servicios', url: 'servicios.html' }
    ]);
    
    const contacto = crearSeccionFooter('Contáctanos', [
        { texto: 'Libro de Reclamaciones', url: 'reclamaciones.html' },
        { texto: 'Procedimiento de atención de Reclamos', url: 'procedimientos.html' }
    ]);
    
    const redes = crearSeccionFooter('Redes Sociales', [
        { texto: 'Facebook', url: 'https://www.facebook.com/ClinicaSPablo', img: 'recursos/facebook.png' },
        { texto: 'Instagram', url: 'https://www.tiktok.com/@red_sanpablo', img: 'recursos/instagram.png' },
        { texto: 'Youtube', url: 'https://www.youtube.com/@red_sanpablo', img: 'recursos/youtube.png' },
        { texto: 'TikTok', url: 'https://www.instagram.com/sanpablo_reddeclinicas', img: 'recursos/tik-tok.png' }
    ]);
    
    footer.appendChild(legal);
    footer.appendChild(nosotros);
    footer.appendChild(contacto);
    footer.appendChild(redes);
}

cargarFooter();