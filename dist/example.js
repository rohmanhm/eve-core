/*!
 * 
 *   Copyright (c) 2017 - present Habib Rohman (https://github.com/rohmanhm).
 *   All rights reserved.
 * 
 *   Licensed Under Apache License 2.0 (https://www.apache.org/licenses/LICENSE-2.0)
 * 
 *   Card Maker @0.0.7
 *   
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.CardMaker=t():e.CardMaker=t()}(this,function(){return webpackJsonpCardMaker([0],{81:function(e,t,n){"use strict";var a={background:"https://rohmanhm.github.io/img/defaultbg.jpg",text:[{name:"name",description:"Input your full name, or anything",value:"RohmanHM",props:{x:270,y:71,size:20,stroke:!1,align:"center"}},{name:"email",description:"Input your email address",value:"mhrohman@live.com",props:{x:195,y:118,size:12,stroke:!1,align:"left"}},{name:"phone",description:"Input your phone number",value:"(+62)-823-308-91711",props:{x:195,y:139,size:12,stroke:!1,align:"left"}},{name:"address",description:"Input your street address",value:"Pati, Central Java",props:{x:195,y:159,size:12,stroke:!1,align:"left"}}],images:[{name:"img",description:"Input your image avatar",value:"https://avatars1.githubusercontent.com/u/7524911?v=3&s=460",props:{x:22,y:32,width:100,height:100}}]},o=new CardMaker({el:"#card-container",widthCanvas:500,download:"#download",template:a,color:"white"});document.getElementById("renderCard").onclick=function(){o.render()}}},[81])});