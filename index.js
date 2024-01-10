function hitungluas() {
    let alas= document.getElementById("alas").value;
    let tinggi= document.getElementById("tinggi").value;

    let luas = 1/2*alas*tinggi
    console.log(luas)
    document.getElementById("luas").value=luas;
}

function hitungkeliling() {
    let sisiA = document.getElementById("sisi a").value;
    let sisiB = document.getElementById("sisi b").value;
    let sisiC = document.getElementById("sisi c").value;

    let keliling = parseInt(sisiA) + parseInt(sisiB) + parseInt(sisiC)
    console.log(keliling)
    document.getElementById("keliling").value=keliling;

}