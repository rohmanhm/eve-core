import axios from 'axios'

axios.get('template/dark-blue.json')
  .then(({ data }) => {
    var cm = new Eve({
      node: document.getElementById('card-container'),
      widthCanvas: 500,
      download: '#download',
      template: data,
      color: 'white'
    })

    document.getElementById('renderCard').onclick = function () {
      cm.render()
    }
  })
  .catch(error => new Error('[CARDMAKER]:' + error))
