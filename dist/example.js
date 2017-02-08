/*!
 * 
 *   Copyright (c) 2017 - present Habib Rohman (https://github.com/rohmanhm).
 *   All rights reserved.
 * 
 *   Licensed Under Apache License 2.0 (https://www.apache.org/licenses/LICENSE-2.0)
 * 
 *   Card Maker @0.0.2
 *   
 */
webpackJsonp([0],{2:function(e,n){var t={background:"https://rohmanhm.github.io/img/defaultbg.jpg",text:[{name:"fullName",description:"Input your full name, or anything",value:"RohmanHM",props:{x:270,y:71,size:20,stroke:!1,align:"center"}},{name:"email",description:"Input your email address",value:"mhrohman@live.com",props:{x:195,y:118,size:12,stroke:!1,align:"left"}},{name:"phoneNumber",description:"Input your phone number",value:"(+62)-823-308-99999",props:{x:195,y:139,size:12,stroke:!1,align:"left"}},{name:"streedAddress",description:"Input your street address",value:"Sillicon Valley Street 3B",props:{x:195,y:159,size:12,stroke:!1,align:"left"}}],images:[{name:"imageProfile",description:"Input your image avatar",value:"https://avatars1.githubusercontent.com/u/7524911?v=3&s=460",props:{x:22,y:32,width:100,height:100}}]},a=new CardMaker({el:"#card-container",widthCanvas:500,download:"#download",template:t,color:"white"});document.getElementById("renderCard").onclick=function(){a.render()}}},[2]);