import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/pages/index'
import SW from './services/serviceWorker'
import './app/scss/main.scss'

ReactDOM.render(<App />, document.getElementById('root'))
SW.unregister()
// SW.register();

console.clear()
// prettier-ignore
console.log(`%c
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
█ ▄▄▀█▄ ▄█ ▄▄▄█▄ ▄█▄ ▄█ ▄▄▀█ ████ ███ █▄ ▄█ ███ ███ ▄▄▀█
█ ██ ██ ██ █▄ ██ ███ ██ ▀▀ █ █████ ▀ ███ ██ ███ ███ ▀▀ █
█▄▄▄██▄▄▄█▄▄▄▄█▄▄▄██▄██▄██▄█▄▄▄████▄███▄▄▄█▄▄▄█▄▄▄█▄██▄█`,'color:#e26fff')
const start = String.fromCodePoint(0x2660)
console.log(`%c${start + start} Version 2.4 ${start + start} `, `color:#e26fff`)
