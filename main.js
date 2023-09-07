import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/ava.jpg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
   
    <h1>Melvinia Azzahra Desylia</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Profil to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
