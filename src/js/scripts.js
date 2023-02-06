'use strict';
import { tns } from '../../node_modules/tiny-slider/src/tiny-slider.js';
import MobileMenu from './modules/MobileMenu';
import './modules/service';
import './modules/scroll';
import Modal from './modules/modal';

import ToTop from './modules/toTop';

const mobileMenu = new MobileMenu();
const modal = new Modal();
new ToTop(); 

if(document.querySelector('.about__slider')) {
  const slider = new tns({
      container: '.slider',
      mode: "carousel",
      controls: false,
      nav: false,
      items: 2,
      gutter: 20,
      // edgePadding: 10,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 2000,
      arrows: false,
      swipe: false,
      autoplayButtonOutput: false,
      responsive: {
        578: {
          items: 3,
        },
        640: {
          // items: 2,
          gutter: 45
        },
        700: {
          items: 3
        },
        1400: {
          items: 4,
          gutter: 20
        }
      }
    });
}
