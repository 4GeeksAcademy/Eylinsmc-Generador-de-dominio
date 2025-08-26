import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let domainName = document.getElementById("domainName")

  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let ext = ['.com', '.net', '.es']
  
  let pronounRandom = Math.floor(Math.random() * pronoun.length)

  let adjRandom = Math.floor(Math.random() * adj.length)
  
  let nounRandom = Math.floor(Math.random() * noun.length)

  let extRandom = Math.floor(Math.random() * ext.length)

  domainName.innerHTML = `${pronoun[pronounRandom]}${adj[adjRandom]}${noun[nounRandom]}${ext[extRandom]}`
  
}


