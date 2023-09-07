export function pasangModulUtama($){
    document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/ava.jpg" class="logo" alt="Vite logo" />
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

    return {
        bongkar: ()=>{
            console.log("Modul utama dibongkar")
            return true
        }
    }
}