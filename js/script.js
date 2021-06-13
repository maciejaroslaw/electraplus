// let icon1 = document.querySelector('.icon1');

const form = document.querySelector('form');
const nameSurname = form.querySelector('[name="nameSurname"]');
const email = form.querySelector('[name="email"]');
const telNumber = form.querySelector('[name="telNumber"]');
const message = form.querySelector('[name="message"]');

// function changeImage(){
//     let x = Math.ceil(Math.floor(Math.random() * (5 - 1)) + 1);
//     icon1.style.backgroundImage = `url('../img/${x}.svg')`;
// }

// function run(){
//     var interval = setInterval(() =>{
//         changeImage();
//     }, 3000);
// }

function sendEmail(){
    Email.send({
    SecureToken : "382f059c-32d5-4441-af18-90238fde5416",
    To : 'maciejaroslaw@gmail.com',
    From : "maciejaroslaw@gmail.com",
    Subject : `Email od: ${email.value}`,
    Body : `${nameSurname.value}<br>
            ----------------<br>
            ${message.value}<br>
            ----------------<br>
            email - ${email.value}<br>
            Telefon - ${telNumber.value}`
    }).then(
        message => alert("SENT")
    );
}

function clickHandler(ee){
    
    ee.preventDefault();
}

form.addEventListener('submit', ee => {
    ee.preventDefault();
    
})

