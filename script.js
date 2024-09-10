document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('agendamento-form');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const corte = document.getElementById('corte').value;

            const message = `Agendamento confirmado para ${date} às ${time} para o corte ${corte}.`;

            const phoneNumber = '5516992153271';
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');

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
