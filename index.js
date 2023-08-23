/* Declaracion de constantes */
const btnGenerate = document.getElementById("btn-generate");
const inputText = document.getElementById("input-text");
const qrCodeDiv = document.getElementById("qrcode");
const btnClear = document.getElementById("btn-clear");

/* Funcion al hacer click en "Generar QR" */
btnGenerate.addEventListener("click", () => {
    const inputValue = inputText.value; // Obtenemos el valor del input
    if (inputValue) {
        qrCodeDiv.innerHTML = ""; // Limpiamos el div del codigo QR
        const qrcode = new QRCode(qrCodeDiv, {
            text: inputValue,
            width: 200,
            heigth: 200,
        });
    }
});

/* Funcion al hacer click en "Limpiar" */
btnClear.addEventListener("click", () => {
    inputText.value = ""; // Limpiamos el input
    qrCodeDiv.innerHTML = ""; // Limpiamos el div del codigo QR
})