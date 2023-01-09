'use strict';
import { tns } from '../../node_modules/tiny-slider/src/tiny-slider.js';
import MobileMenu from './modules/MobileMenu';
import './modules/service';
import './modules/map';
import Modal from './modules/modal';

import ToTop from './modules/toTop';

const mobileMenu = new MobileMenu();
const modal = new Modal();
// const service = new Service();
new ToTop(); 

if(document.querySelector('.about__slider')) {
  const slider = new tns({
      container: '.slider',
      mode: "carousel",
      controls: false,
      nav: false,
      items: 3,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 2000,
      arrows: false,
      swipe: false,
      autoplayButtonOutput: false,
    });
}
