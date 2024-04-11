let image_dp = null;
image_dp = document.getElementById('image');

function init() {
    image_dp = document.getElementById('image');
    image_dp.style.position= 'relative';
    image_dp.style.left = '0px';
}
window.onload = init;

function moveright(){
    image_dp.style.left = parseInt(image_dp.style.left) + 10 +'px';
}