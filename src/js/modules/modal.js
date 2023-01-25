'use strict';

    const btns = document.querySelectorAll('.btns');
    const modalOverlay = document.querySelector('.modals__overlay ');
    const modals = document.querySelectorAll('.modal');
    const closeButton = document.querySelectorAll('.modal__close-button');

    function Modal () {
        btns.forEach((el) => {
            el.addEventListener('click', (e) => {
                let path = e.currentTarget.getAttribute('data-path');
        
                modals.forEach((el) => {
                    el.classList.remove('modal--visible');
                });
        
                document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
                modalOverlay.classList.add('modals__overlay--visible');

                const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
                const body = document.body;
                body.style.position = 'fixed';
                body.style.top = `-${scrollY}`;
            });
        });
        
        modalOverlay.addEventListener('click', (e) => {
            console.log(e.target);
        
            if (e.target == modalOverlay) {
                modalOverlay.classList.remove('modals__overlay--visible');
                modals.forEach((el) => {
                    el.classList.remove('modal--visible');
                });

                const body = document.body;
                const scrollY = body.style.top;
                body.style.position = '';
                body.style.top = '';
                window.scrollTo(0, parseInt(scrollY || '0') * -1);
            }
        });

        closeButton.forEach((el) => {
            el.addEventListener('click', (e) => {
                modalOverlay.classList.remove('modals__overlay--visible');
                modals.forEach((el) => {
                    el.classList.remove('modal--visible');
                });

                const body = document.body;
                const scrollY = body.style.top;
                body.style.position = '';
                body.style.top = '';
                window.scrollTo(0, parseInt(scrollY || '0') * -1);
            });
        });
        window.addEventListener('scroll', () => {
            document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
          });
  }


export default Modal;