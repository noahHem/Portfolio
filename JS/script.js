const header = document.querySelector("header");

window.addEventListener("scroll",function () {
    header.classList.toggle("sticky",window.scrollY > 140);
});

let menu = document.querySelector('#menu-icon');
let nav = document.querySelector('.nav');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    nav.classList.remove('open');
}

const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const objet = document.getElementById("objet");
const msg = document.getElementById("message");


function sendEmail() {
    const bodyMessage = `Nom : ${fullName.value}<br> Email : ${email.value}<br> Message : ${msg.value}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "hemery.noah18@gmail.com",
        Password : "089354CAE2FD3CF7039003215640117B24F4",
        To : 'hemery.noah18@gmail.com',
        From : "hemery.noah18@gmail.com",
        Subject : objet.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK") {
            Swal.fire({
                title: "Félicitation !",
                text: "Votre mail est envoyé !",
                icon: "success"
              });
        }
      }
    );
}

form.addEventListener("submit",(e) => {
    e.preventDefault();

    sendEmail();
})