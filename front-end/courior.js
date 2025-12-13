const courierForm = document.querySelector('.courier-form');

if (courierForm) {
    courierForm.addEventListener('submit', e => {
        e.preventDefault();

        const isOther = document.getElementById('courierClientMode').value === 'other';

        let name, phone;

        if (isOther) {
            name = document.querySelector('#courierManualClient input[type="text"]').value.trim();
            phone = document.querySelector('#courierManualClient input[type="tel"]').value.trim();
        } else {
            const savedClient = document.getElementById('courierSavedClient');
            name = savedClient.querySelector('p:nth-child(1)').textContent.replace('Name: ', '').trim();
            phone = savedClient.querySelector('p:nth-child(2)').textContent.replace('WhatsApp: ', '').trim();
        }

        const selects = courierForm.querySelectorAll('select');
        const parcelType = selects[0].value;
        const weight = selects[1].value;

        const pickup = courierForm.querySelector('input[placeholder*="pickup"]').value;
        const delivery = courierForm.querySelector('input[placeholder*="delivery"]').value;
        const date = courierForm.querySelector('input[type="date"]').value;

        const notes = courierForm.querySelector('textarea').value || 'None';

        const message =
`📦 NEW PARCEL REQUEST

👤 Sender: ${name}
📞 WhatsApp: ${phone}

📦 Parcel: ${parcelType}
⚖️ Weight: ${weight}

📍 Pickup: ${pickup}
🏁 Delivery: ${delivery}
📅 Date: ${date}

📝 Instructions: ${notes}`;

        sessionStorage.setItem('whatsappMessage', message);
        window.location.href = 'confirm.html';
    });
}
