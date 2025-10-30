// Aguarda o conteúdo da página carregar completamente
document.addEventListener('DOMContentLoaded', function() {
        
    // Seleciona o formulário e a mensagem de confirmação
    const rsvpForm = document.getElementById('rsvp-form');
    const confirmationMessage = document.getElementById('confirmation-message');

    // Adiciona um "ouvinte" para o evento de envio do formulário
    rsvpForm.addEventListener('submit', function(event) {
        
        // Impede que a página recarregue, que é o comportamento padrão do formulário
        event.preventDefault(); 

        // Pega o nome digitado pelo convidado
        const guestName = document.getElementById('guest-name').value;
        const attendance = document.getElementById('attendance').value;
        
        // Monta a mensagem de confirmação
        if (attendance === 'sim') {
            confirmationMessage.textContent = `Obrigado por confirmar ${guestName}! Esperamos você lá! 🎉`;
        } else {
        confirmationMessage.textContent = `Que pena que você não poderá comparecer, ${guestName}. Sentiremos sua falta!`;
        }

        // Exibe a mensagem de confirmação e esconde o formulário
        confirmationMessage.classList.remove('hidden');
        rsvpForm.classList.add('hidden');
    });

    // Carrossel simples
    const images = document.querySelectorAll('.carousel-image');
    const prevBtn = document.querySelector('.carousel-button.prev');
    const nextBtn = document.querySelector('.carousel-button.next');
    const dotsContainer = document.querySelector('.carousel-dots');
    let current = 0;

    // Criar dots
    images.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.classList.add('carousel-dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => showImage(i));
        dotsContainer.appendChild(dot);
    });

    function showImage(index) {
        images[current].classList.remove('active');
        dotsContainer.children[current].classList.remove('active');
        current = index;
        images[current].classList.add('active');
        dotsContainer.children[current].classList.add('active');
    }

    prevBtn.addEventListener('click', () => {
        showImage((current - 1 + images.length) % images.length);
    });
    nextBtn.addEventListener('click', () => {
        showImage((current + 1) % images.length);
    });

    // Troca automática (opcional)
    setInterval(() => {
        showImage((current + 1) % images.length);
    }, 5000);
});