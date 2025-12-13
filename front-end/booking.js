const bookingForm = document.querySelector('.booking-form');

if (bookingForm) {
    bookingForm.addEventListener('submit', e => {
        e.preventDefault();

        const isOther = document.getElementById('bookingClientMode').value === 'other';

        let name, phone, email;

        if (isOther) {
            name = document.querySelector('#bookingManualClient input[type="text"]').value;
            phone = document.querySelector('#bookingManualClient input[type="tel"]').value;
            email = document.querySelector('#bookingManualClient input[type="email"]').value || 'N/A';
        } else {
            name = document.getElementById('clientName').textContent;
            phone = document.getElementById('clientPhone').textContent;
            email = document.getElementById('clientEmail').textContent;
        }

        const pickup = bookingForm.querySelector('input[placeholder*="pickup"]').value;
        const destination = bookingForm.querySelector('input[placeholder*="destination"]').value;
        const date = bookingForm.querySelector('input[type="date"]').value;
        const luggage = bookingForm.querySelectorAll('select')[1].value;
        const passengers = bookingForm.querySelectorAll('select')[2].value;
        const notes = bookingForm.querySelector('textarea').value || 'None';

        const message = 
`🚗 NEW RIDE BOOKING

👤 Name: ${name}
📞 WhatsApp: ${phone}
📧 Email: ${email}

📍 Pickup: ${pickup}
🏁 Destination: ${destination}
📅 Date: ${date}
💼 Luggage: ${luggage}
👥 Passengers: ${passengers}

📝 Notes: ${notes}`;

        sessionStorage.setItem('whatsappMessage', message);
        window.location.href = 'confirm.html';
    });
}
