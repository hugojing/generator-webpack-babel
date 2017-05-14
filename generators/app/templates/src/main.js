require('normalize.css')
require('@/main.css')

const logoSrc = require('@/assets/images/yeoman-logo.png')

const logo = document.createElement('img')
logo.setAttribute('src', logoSrc)
document.getElementById('app').appendChild(logo)

// function append() {
//   require.ensure(['jquery'], require => {
//     const $ = require('jquery')
//     $('#app').append(logo)
//   })
// }

// setTimeout(append, 0)
