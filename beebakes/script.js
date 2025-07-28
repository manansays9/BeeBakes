AOS.init();

document.getElementById('whatsappForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const item = document.getElementById('item').value;
  const quantity = document.getElementById('quantity').value;
  const message = document.getElementById('message').value;

  const text = `Hello BeeBakes!%0AName: ${name}%0APhone: ${phone}%0AOrder: ${item} x${quantity}%0AMessage: ${message}`;
  const url = `https://wa.me/92XXXXXXXXXX?text=${text}`; // Replace with your WhatsApp number

  window.open(url, '_blank');
});