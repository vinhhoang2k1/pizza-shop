const menuBtn = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menuBtn.onclick = () => {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('fa-times')
};
window.onscroll = () => {
    menu.classList.remove('active');
    menuBtn.classList.remove('fa-times')
    if (window.scrollY > 60) {
        document.querySelector('.btn-exit').classList.add('active');
    }
    else {
        document.querySelector('.btn-exit').classList.remove('active');

    }
}

function loader() {
    document.querySelector('.loader').classList.add('active');
}
function fade() {
    setInterval(loader, 3000);
}
window.onload = fade();

// form 

const inputText = document.querySelectorAll('.form .input input');

const mes = document.querySelectorAll('.message')
const subBtn = document.querySelector('.form form .btn-sub')


subBtn.addEventListener('click', validate)

function validate() {
    mes.forEach((e) => {
        e.classList.add('active');
    });
    handleName();
    handleEmail();
    handleNumber();
    handleFood();
    handleAddress();
    alertMs();


};



function handleName() {
    const formName = document.querySelector('.form .input input[name="name"]');
    let value = formName.value;

    if (formName.value.length < 6) {
        mes[0].innerHTML = 'nhập tên của bạn !';
    } else {
        mes[0].innerHTML = '';
    }
}
function handleEmail() {
    const formEmail = document.querySelector('.form .input input[name="email"]');
    let value = formEmail.value;
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (formEmail.value.match(mailformat)) {
        mes[1].innerHTML = '';
    } else {
        mes[1].innerHTML = 'nhập e mail của bạn !';
    }
}
function handleNumber() {
    const formNumber = document.querySelector('.form .input input[name="number"]');
    let value = formNumber.value;

    if (formNumber.value < 1) {
        mes[2].innerHTML = 'nhập tối thiểu 1 !';
    } else {
        mes[2].innerHTML = '';
    }
}
function handleFood() {
    const formFood = document.querySelector('.form .input input[name="food"]');
    let value = formFood.value;

    if (formFood.value.length < 6) {
        mes[3].innerHTML = 'nhập nhập tên món !';
    } else {
        mes[3].innerHTML = '';
    }
}
const formAddress = document.querySelector('#address');
function handleAddress() {
    let value = formAddress.value;

    if (formAddress.value.length < 6) {
        mes[4].innerHTML = 'nhập địa chỉ để chúng tôi giao hàng !';
    } else {
        mes[4].innerHTML = '';
    }
}
function alertMs() {
    if (mes[4].innerHTML == '' && mes[3].innerHTML == '' && mes[2].innerHTML == '' && mes[1].innerHTML == '' && mes[4].innerHTML == '') {
        setTimeout(() => {
            alert(`KHÁCH HÀNG : ${inputText[0].value}
        EMAIL : ${inputText[1].value}
        SỐ LƯỢNG : ${inputText[2].value}
        TÊN MÓN : ${inputText[3].value}
        ĐỊA CHỈ : ${formAddress.value}
     `);
        }, 500)
    }
}





