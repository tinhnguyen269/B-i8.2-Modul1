// nhan vao nut nao thi hien thi nut do


function clickButton(newValue) {
//     lay du lieu tu o input ra
    let bieuthuc = document.getElementById("print").value;
//     them so 1 vao sau
    bieuthuc+=newValue;
//     dien lai vao o input
    document.getElementById("print").value = bieuthuc;
}
// tinh ket qua
function getResult() {
//     lay du lieu tu o input ra
    let bieuthuc = document.getElementById("print").value;
//     tinh toan bang eval
    let result = eval(bieuthuc);
//     in d lieu ra
//     chi co cac the trong form thi moi .value
    document.getElementById("print").value = result;
    document.getElementById("ketqua").innerText =  result;
}
function clean(){
    document.getElementById('print').value = ""
}