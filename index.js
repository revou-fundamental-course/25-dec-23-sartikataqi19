function hitungluas() {
    let alas= document.getElementById("alas").value;
    let tinggi= document.getElementById("tinggi").value;

    let luas = 1/2*alas*tinggi
    console.log(luas)
    document.getElementById("luas").value=luas;
}

function hitungKeliling () {
    let A = document.getElementById("sisi a").value;
    let B = document.getElementById("sisi b").value;
    let C = document.getElementById("sisi c").value;

    let keliling = parseInt(A) + parseInt(B) + parseInt(C);
    console.log(keliling)
    document.getElementById("keliling").value=keliling;
}
