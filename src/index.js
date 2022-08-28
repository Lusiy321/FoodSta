(() => {
  const menuOpenBtn = document.querySelector('[data-menu-open]');
  const menuCloseBtn = document.querySelector('[data-menu-close]');

  const mobileMenu = document.querySelector('[data-menu]');
  const body = document.querySelector('body');

  menuOpenBtn.addEventListener('click', openModal);
  menuCloseBtn.addEventListener('click', openModal);

  function openModal() {
    mobileMenu.classList.toggle('is-open');
    body.classList.toggle('no-scroll');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    body: document.querySelector('[data-page]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-1]'),
    closeModalBtn: document.querySelector('[data-modal-close-1]'),
    modal: document.querySelector('[data-modal-1]'),
    body: document.querySelector('[data-page-1]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
