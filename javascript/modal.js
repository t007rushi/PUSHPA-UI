const alertModalBtn = document.querySelector('#alert-modal-btn');
const alertModal = document.querySelector('#alert-modal');

alertModalBtn.addEventListener('click', (e) => {
  e.preventDefault();
  alertModal.showModal();
});