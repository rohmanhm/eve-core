var template1 = {
    "background": "https://rohmanhm.github.io/img/defaultbg.jpg",
    "text": [
      {
        "name": "name",
        "description": "Input your full name, or anything",
        "value": "RohmanHM",
        "props": {
          "x": 270,
          "y": 71,
          "size": 20,
          "stroke": false,
          "align": "center"
        }
      }, {
        "name": "email",
        "description": "Input your email address",
        "value": "mhrohman@live.com",
        "props": {
          "x": 195,
          "y": 118,
          "size": 12,
          "stroke": false,
          "align":"left"
        }
      }, {
        "name": "phone",
        "description": "Input your phone number",
        "value": "(+62)-823-308-99999",
        "props": {
          "x": 195,
          "y": 139,
          "size": 12,
          "stroke": false,
          "align":"left"
        }
      }, {
        "name": "address",
        "description": "Input your street address",
        "value": "Sillicon Valley Street 3B",
        "props": {
          "x": 195,
          "y": 159,
          "size": 12,
          "stroke": false,
          "align":"left"
        }
      }
    ],
    "images": [
      {
        "name": "img",
        "description": "Input your image avatar",
        "value": "https://avatars1.githubusercontent.com/u/7524911?v=3&s=460",
        "props": {
          "x": 22,
          "y": 32,
          "width": 100,
          "height": 100
        }
      }
    ]
  };

  var cm = new CardMaker({
    el: "#card-container",
    widthCanvas: 500,
    download: "#download",
    template: template1,
    color: "white"
  });

  document.getElementById('renderCard').onclick = function () {
    cm.render();
  }