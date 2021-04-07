function hideText(id) {
	document.getElementById(id).style.visibility = 'hidden';
	// style.display = 'none' - cacher tout le bloc
}
function displayText(id) {
	document.getElementById(id).style.visibility = 'visible';
	// style.display = 'bloc' - revenir tout le bloc
}
/* 2 version
function hideText(text) {
	if(text == 1) {
		document.getElementById('text').style.visibility = "visible";
	} else if(text == 2) {
		document.getElementById('text').style.visibility = "hidden";
	}
}
dans html 
<button onclick="hideText(1)"></button>
<button onclick="hideText(2)"></button>
*/
