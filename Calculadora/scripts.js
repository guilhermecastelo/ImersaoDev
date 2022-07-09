var n1 = parseFloat(prompt("Informe o primeiro número"));
var n2 = parseFloat(prompt("Informe o segundo número"));

var op = prompt("Informe a operção que será realizada (+ - * /)");

if (op == "+") {
    var result = (n1 + n2);
    document.write("<h2>" + n1 + " + " + n2 + " = " + result + "</h2>");

} else if (op == "-") {
    var result = (n1 - n2);
    document.write("<h2>" + n1 + " - " + n2 + " = " + result + "</h2>");

} else if (op == "*") {
    var result = (n1 * n2);
    document.write("<h2>" + n1 + " x " + n2 + " = " + result + "</h2>");

} else if (op == "/") {
    var result = (n1 / n2);
    document.write("<h2>" + n1 + " / " + n2 + " = " + result + "</h2>");
} else {
    document.write("<h2>" + "Opção inválida" + "</h2>");
}