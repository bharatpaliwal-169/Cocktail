function clickCounter() {
  if(typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("count").innerHTML = localStorage.clickcount;
  } else {
    document.getElementById("count").innerHTML = "Sorry, your browser does not support web storage...";
  }
  document.getElementById("inc").disabled = true;
  
}
// localStorage.clickcount = 0;
// console.log(localStorage.clickcount);