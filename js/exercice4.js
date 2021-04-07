function checkPw() {
    var passe = document.getElementById('passe').value;
    var passe2 = document.getElementById('passe2').value;
    if(passe===passe2) {
        document.getElementById("passe").style.border="1px solid green"; // 1 vertion de l'écriture = 2 version
        document.getElementById("passe2").style.border="1px solid green";
    }
    else {
        document.getElementById('passe').style.border = document.getElementById('passe2').style.border = '1px solid red'; // 2 version de l'écriture
    }
}