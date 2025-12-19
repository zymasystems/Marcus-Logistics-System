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
        const pickupCity = bookingForm.querySelector('input[placeholder="City"]').value;
        const pickupSuburbInput = bookingForm.querySelectorAll('input[placeholder*="Suburb"]')[0];
        const pickupSuburb = pickupSuburbInput ? pickupSuburbInput.value : '';
        const destinationSuburbInput = bookingForm.querySelectorAll('input[placeholder*="Suburb"]')[1];
        const destinationSuburb = destinationSuburbInput ? destinationSuburbInput.value : '';
        const destination = bookingForm.querySelector('input[placeholder*="destination"]').value;
        const destinationCity = bookingForm.querySelectorAll('input[placeholder="City"]')[1].value;
        const date = bookingForm.querySelector('input[type="date"]').value;
        const luggage = bookingForm.querySelectorAll('select')[1].value;
        const passengers = bookingForm.querySelectorAll('select')[2].value;
        const notes = bookingForm.querySelector('textarea').value || 'None';

        const message = 
`🚗 NEW RIDE BOOKING

👤 Name: ${name}
📞 WhatsApp: ${phone}
📧 Email: ${email}

📍 Pickup: ${pickup}, 
            ${pickupSuburb}, 
            ${pickupCity}
🏁 Destination: ${destination}, 
                ${destinationSuburb}, 
                ${destinationCity}
📅 Date: ${date}
💼 Luggage: ${luggage}
👥 Passengers: ${passengers}

📝 Notes: ${notes}`;

        sessionStorage.setItem('whatsappMessage', message);
        window.location.href = 'confirm.html';
    });
}
