document.addEventListener('DOMContentLoaded', () => {

    // Adiciona interatividade aos botões de contato
    const instagramBtn = document.getElementById('instagram');
    const whatsappBtn = document.getElementById('whatsapp');
    const mapsBtn = document.getElementById('maps');

    instagramBtn.addEventListener('click', (event) => {
        event.preventDefault(); // Impede a navegação padrão
        window.location.href = 'https://www.instagram.com/lashdesign.vivi?igsh=MXQwa3JuYnJrN3Z4bQ==';
    });

    whatsappBtn.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = 'https://wa.me/554991857441'
    });

    mapsBtn.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = 'https://maps.app.goo.gl/qJPpcLywoprzTJRa7';
    });

});