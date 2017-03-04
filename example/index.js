var axios = require('axios');

function getTemplate (url) {
  return new Promise((resolve, reject) => {
    axios.request({
      url: url,
      method: 'get',
      headers: {
        'Content-type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
    .then(({ data }) => {
      resolve(data)
    })
    .catch(error => {
      reject(error)
    })
  })
}

getTemplate('/template/dark-blue.json')
  .then(data => {
    console.log(data) // Object {status: 'ok', message: 'work perfectly'}
    new CardMaker(data) // Uncaught (in promise) TypeError: Cannot read property 'protocol' of undefined
  })