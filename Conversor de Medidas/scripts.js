function fnCalcula() {

    var antes = document.getElementById("slcAntes").value;
    var depois = document.getElementById("slcDepois").value;
    var num = document.getElementById("txtNumero").value
    var result = 0;

    if (antes == "MM" && depois == "MM") {
        result = num;

    } else if (antes == "MM" && depois == "CM") {
        result = num / 10;

    } else if (antes == "MM" && depois == "M") {
        result = num / 1000;

    } else if (antes == "MM" && depois == "KM") {
        result = num / 1e+6;

    } else if (antes == "CM" && depois == "MM") {
        result = num * 10;

    } else if (antes == "CM" && depois == "CM") {
        result = num;

    } else if (antes == "CM" && depois == "M") {
        result = num / 100;

    } else if (antes == "CM" && depois == "KM") {
        result = num / 100000;

    } else if (antes == "M" && depois == "MM") {
        result = num * 1000;

    } else if (antes == "M" && depois == "CM") {
        result = num * 100;

    } else if (antes == "M" && depois == "M") {
        result = num;

    } else if (antes == "M" && depois == "KM") {
        result = num / 1000;

    } else if (antes == "KM" && depois == "MM") {
        result = num * 1e+6;

    } else if (antes == "KM" && depois == "CM") {
        result = num * 100000;

    } else if (antes == "KM" && depois == "M") {
        result = num * 1000;

    } else if (antes == "KM" && depois == "KM") {
        result = num;
    }

    document.getElementById("resultado").innerText = "Resultado: " + result + " " + depois;

}