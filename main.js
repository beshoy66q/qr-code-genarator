const cont = document.getElementById("cont");
const btn = document.getElementById("btn");
const input = document.getElementById("input")
const img = document.getElementById("img")
btn.addEventListener("click", (eo) => {
    eo.preventDefault()
    if (input.value == "") {
        return false;
    } else {
        img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`
    }
    btn.innerHTML = "generating QR code....!!!";
    img.addEventListener("load" , (eo) => {
        btn.innerHTML = "generate QR code";
        cont.classList.add("active")
    })
})