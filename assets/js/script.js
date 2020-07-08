/*code for action confirmation booking window */

let url_string = window.location.href;
let url = new URL(url_string);
let guestsParam = url.searchParams.get("guests");
let dateParam = url.searchParams.get("date");
let timeParam = url.searchParams.get("time");
let drinksOParam = url.searchParams.get("drinksOrder")
document.getElementById("guestsConfirm").innerHTML = guestsParam;
document.getElementById("dateConfirm").innerHTML = dateParam;
document.getElementById("timeConfirm").innerHTML = timeParam;
document.getElementById("drinksConfirm").innerHTML = drinksOParam;