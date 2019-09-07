document.addEventListener("DOMContentLoaded", function(event) {
  document.body.style.cursor  = "wait";
  window.onload=function(){document.body.style.cursor="default";};
});

var localTime = luxon.DateTime.fromObject({zone: "Europe/Amsterdam"}).setLocale("en-gb").toLocaleString(luxon.DateTime.DATETIME_FULL);

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
