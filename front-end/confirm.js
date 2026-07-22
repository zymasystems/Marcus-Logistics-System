const summaryBox = document.getElementById('summaryBox');
const sendBtn = document.getElementById('sendWhatsapp');

const WHATSAPP_NUMBER = "27765082810";

const message = sessionStorage.getItem('whatsappMessage');

if (!message) {
    summaryBox.textContent = "No booking data found.";
} else {
    summaryBox.textContent = message;
}

sendBtn.addEventListener('click', () => {
    const url =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
});
