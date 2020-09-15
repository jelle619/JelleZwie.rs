// Change cursor state during loading
document.addEventListener("DOMContentLoaded", function(event) {
    document.body.style.cursor  = "wait";
    window.onload=function(){document.body.style.cursor="default";};
  });

// Server Time

var xmlHttp;
function getServerTime(){
    try {
        xmlHttp = new XMLHttpRequest();
    }
    catch (err1) {
        //IE
        try {
            xmlHttp = new ActiveXObject('Msxml2.XMLHTTP');
        }
        catch {
            try {
                xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
            }
            catch {
                //AJAX not supported, use CPU time
                console.log("AJAX not supported");
            }
        }
    }
    
    xmlHttp.open('HEAD',window.location.href.toString(),false);
    xmlHttp.setRequestHeader("Content-Type", "text/html");
    xmlHttp.send('');
    return xmlHttp.getResponseHeader("Date");
}

var localTime;
var serverTime = getServerTime();

try {
    if (navigator.language.includes("en") && typeof xmlHttp !== 'undefined') {
        localTime = new Date(serverTime).toLocaleString(navigator.language, {timeZone: "Europe/Amsterdam"});
    } else if (typeof xmlHttp !== 'undefined') {
        localTime = new Date(serverTime).toLocaleString("en-GB", {timeZone: "Europe/Amsterdam"});
    } else if (typeof xmlHttp === 'undefined') {
        localTime = new Date().toLocaleString("en-GB", {timeZone: "Europe/Amsterdam"}) + " (based on your device's set time)";
    }
} catch {
    localTime = "Europe/Amsterdam";
}

// Contact

if (navigator.language.includes("nl")) {
    document.querySelector("#contact select[name=\"language\"]").value = "dutch";
}

// Automatic form enlarger
document.addEventListener("DOMContentLoaded", function(event) {
    function OnInput() {
      this.style.height = "auto";
      this.style.height = (this.scrollHeight) + "px";
    }
    var tx = document.getElementsByTagName("textarea");
    for (var i = 0; i < tx.length; i++) {
      tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
      tx[i].addEventListener("input", OnInput, false);
    }
  });

// Because dragons are really cool

console.info("Here be dragons! 🐲");