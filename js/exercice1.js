/*
function displayBorder() {
    document.getElementById('image').style.border = '4px solid red';
}
function noneBorder() {
    document.getElementById('image').style.border = 'none';
}
*/
var img = document.querySelector('img');
    img.addEventListener('mouseover', function() {
    this.style.border = '3px solid red';
});
    img.addEventListener('mouseout', function() {
    this.style.border = 'none';
});
// querySelector pour choisir le premier element
// Tagname('img') -> toutes les images / TagName('img')[0] -> la 1ere image