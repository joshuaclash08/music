const xml = new XMLHttpRequest();
xml.open("GET","https://api.ipify.org");
xml.send();
xml.addEventListener("loadend",ipify);
const agent = window.navigator.userAgent.toLowerCase();
function ipify(e){here(xml.responseText);}
function here(ip){console.log(ip),console.log(agent)}
