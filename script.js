const Base_URL = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example";

const text = document.querySelector("#text");
const imageBox = document.querySelector(".qr-code");
const qrImage = document.querySelector("#qr-image");
const btn = document.querySelector("#btn");


let generateQR = () => {
    btn.addEventListener("click", function(){
        if(text.value.length > 0){
            fetchUrl();
        }
    });
}

let fetchUrl = async () => {
    let url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text.value}`;

    qrImage.src = url;
    imageBox.classList.add("show-img"); 
}

generateQR();