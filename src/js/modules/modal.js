'use strict';

    const btns = document.querySelectorAll('.btns');
    const modalOverlay = document.querySelector('.modals__overlay ');
    const modals = document.querySelectorAll('.modal');

    function Modal () {
        btns.forEach((el) => {
            el.addEventListener('click', (e) => {
                let path = e.currentTarget.getAttribute('data-path');
                console.log(path);
        
                modals.forEach((el) => {
                    el.classList.remove('modal--visible');
                });
        
                document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
                modalOverlay.classList.add('modals__overlay--visible');
            });
        });
        
        modalOverlay.addEventListener('click', (e) => {
            console.log(e.target);
        
            if (e.target == modalOverlay) {
                modalOverlay.classList.remove('modals__overlay--visible');
                modals.forEach((el) => {
                    el.classList.remove('modal--visible');
                });
            }
        });
  }


export default Modal;