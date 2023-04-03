


const formLogin = document.querySelector('.form-login')
const formEmail = document.querySelector('.form-email')
const formAvatar = document.querySelector('.form-avatar')
const formUserName = document.querySelector('.form-user-name')
const formPhoneName = document.querySelector('.form-phone-name')
const formAddress = document.querySelector('.form-address')
const formPassword = document.querySelector('.form-password')
const formRestriesPassword = document.querySelector('.form-retry-password')
const loading = document.querySelector('#loading')
const alerted = document.querySelector("#alert")
const alertInput = document.querySelector("#alert input")
const apiPostUsers = 'https://service-betiu.onrender.com/api/v1/create'
const apiVerifyMail = 'https://service-betiu.onrender.com/api/v1/verify/send-mail'
// const apiPostUsers = 'http://127.0.0.1:3001/api/v1/create'
// const apiVerifyMail = 'http://127.0.0.1:3001/api/v1/verify/send-mail'
localStorage.clear();

async function login(body) {
    alerted.style.display = "none"
    loading.style.display = "flex";
    axios({
        method: 'post',
        url: apiPostUsers,
        data: body
    })
        .then((data) => {
            if(data.status === 200 && data.data.message === "created success") {
                toastSuccess("Bạn đã đang kí thành công. Đăng nhập và trải nghiệm nào");
                setTimeout(() => {
                    loading.style.display = "none";
                    window.location.href = './index.html'
                    localStorage.setItem("email", body.email)
                }, 1000)
            }
        })
        .catch((e) => {
            // const start = e.response.data.search('<pre>')
            // const end = e.response.data.search('</pre>')
            // let message = e.response.data.slice(start + 5, end);
            // console.log(e.response.data);
            toastAram("Đã có lỗi xảy ra, vui lòng thử lại nhé");
            loading.style.display = "none";
            formUserName.value = "";
            formAddress.value = "";
            formEmail.value = "";
            formPassword.value = "";
            formAvatar.value = "";
            alertInput.value = "";
            formPhoneName.value = "";
        })
}

async function verifySendMail(email) {
    loading.style.display = "flex";
    axios({
        method: 'post',
        url: apiVerifyMail,
        params: {email: email}
    })
        .then((data) => {
            console.log(data);
            if(data.status === 200) {
                toastSuccess("Chúng tôi đã gửi mã xác nhận tới email của bạn, cho chúng tôi biết nhé");
                loading.style.display = "none";
                alerted.style.display = "flex"
            }
        })
        .catch((e) => {
            // console.log(e.response.data);
            // const start = e.response.data.search('<pre>')
            // const end = e.response.data.search('</pre>')
            // let message = e.response.data.slice(start + 5, end);
            toastAram("Ôi không, Email đã được đăng kí rồi :D");
            loading.style.display = "none";
        })
}
var alerInput = document.querySelector('.alert-input')
formLogin.addEventListener('submit',async e => {
    e.preventDefault()
    if(formPassword.value === formRestriesPassword.value) {
        const data = {
            firstName: covertUserName(formUserName.value)[0],
            lastName: covertUserName(formUserName.value)[1],
            email: formEmail.value,
            password: formPassword.value,
            phone: formPhoneName.value
        }
        verifySendMail(data.email)
    }else {
        toastAram("Mật khẩu không khớp. Kiểm tra lại đi bà nội")
    }
})

alerted.addEventListener('submit', async (e) => {
    e.preventDefault()
    if (formUserName.value === "" || formUserName.value == null) {
        toastAram("Nhập cái tên giùm đi haizz.")
    }else {
        if(formPassword.value === formRestriesPassword.value) {
            const data = {
                firstName: covertUserName(formUserName.value)[0],
                lastName: covertUserName(formUserName.value)[1],
                email: formEmail.value,
                password: formPassword.value,
                phone: formPhoneName.value,
                genMailCode: alerInput.value
            }
            login(data)
            formUserName.value = "";
            formEmail.value = "";
            formPassword.value = "";
            alertInput.value = "";
            formPhoneName.value = "";
        }else {
            toastAram("Mật khẩu không khớp. Kiểm tra lại đi bà nội")
        }
    }
})



function toastAram(e) {
    const toastMain = document.getElementById('toast');
    const toast = document.createElement('div');
    if (toastMain) {
        toast.classList.add('toast')
        toast.innerHTML = `
            <i class="fa fa-solid fa-bug error"></i>
            <p class="toast-text">${e}</p>
        `;
        toastMain.appendChild(toast);
        setTimeout(function () {
            toastMain.removeChild(toast);
        }, 8000)
    }
}

function toastSuccess (e) {
    const toastMain = document.getElementById('toast');
    const toast = document.createElement('div');
    if(toastMain) {
        toast.classList.add('toast', 'toastSuccess')
        toast.innerHTML = `
            <i class="ti-check"></i>
            <p class="toast-text">${e}</p>
        `;
        toastMain.appendChild(toast);
        setTimeout(function(){
            toastMain.removeChild(toast);
        },8000)
    }
}

function covertUserName(str) {
    const array = [];
    const strNew = str.split(' ');
    const latestItem = strNew.pop()
    array.push(strNew.join(' '))
    array.push(latestItem)
    return array;
}
