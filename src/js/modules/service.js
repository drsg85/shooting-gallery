'use strict';

const Service = document.querySelectorAll('.service__tab');
const tabItems = document.querySelectorAll('.service__content-item');

Service.forEach(onTabClick);

function onTabClick (item) {
    item.addEventListener('click', function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains('active')) {
            tabItems.forEach(function(item) {
                item.classList.remove('active');
            });

            Service.forEach(function(item) {
                item.classList.remove('active');
            });

            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}

document.querySelector('.service__tab').click();


export default Service;