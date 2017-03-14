require('normalize.css')
require('@/main.css')

const logoSrc = require('@/assets/images/yeoman-logo.png')

const logo = document.createElement('img')
logo.setAttribute('src', logoSrc)
document.getElementById('app').appendChild(logo)
