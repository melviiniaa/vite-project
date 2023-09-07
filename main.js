import './style.css';
import javascriptLogo from './javascript.svg';
// import viteLogo from '/ava.jpg';
import { setupCounter } from './counter.js';
import { pasangModulUtama } from './modul/utama.js';
import $ from 'jquery';
// import bs from 'bootstrap'

window.modulUtama = pasangModulUtama($);
console.log('Bismillah');

setupCounter(document.querySelector('#counter'))

if (import.meta.hot) {
  import.meta.hot.on('vite:beforeUpdate',x=>{
    window.modulUtama.bongkar();
    console.log("Alhamdulillah, modulUtama selesai direfresh");
  })
  import.meta.hot.accept(x=>x)
}

