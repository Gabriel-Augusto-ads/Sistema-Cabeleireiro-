document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('agendamento-form');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const corte = document.getElementById('corte').value;

            const message = `Agendamento confirmado para ${date} às ${time} para o corte ${corte}.`;

            // Enviar mensagem para o WhatsApp do cabeleireiro
            const phoneNumber = '5516992153271'; // Substitua pelo número do cabeleireiro
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');

            // Redirecionar para a página de confirmação
            localStorage.setItem('confirmationMessage', message);
            window.location.href = 'confirmar.html';
        });
    }

    const confirmationMessage = localStorage.getItem('confirmationMessage');
    if (confirmationMessage) {
        const confirmationElement = document.getElementById('confirmation-message');
        if (confirmationElement) {
            confirmationElement.textContent = confirmationMessage;
        }
        localStorage.removeItem('confirmationMessage');
    }
});
