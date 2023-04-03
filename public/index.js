


const formLogin = document.querySelector('.form-login')
const formEmail = document.querySelector('.form-email')
const formPassword = document.querySelector('.form-password')
const loading = document.querySelector('#loading')
const tx2 = document.querySelector('.txt2')
const apiPostUsers = 'https://service-betiu.onrender.com/api/v1/login'

const email = localStorage.getItem("email")
if(email) {
    console.log(email);
    formEmail.value = email;
    if(formEmail.value.length > 2) {
        formPassword.focus();
    }
    else {
        formLogin.focus();
    }
}
email ? formEmail.value = email : formEmail.value = "";
async function login(email, password) {

    loading.style.display = "flex";
    axios({
        method: 'post',
        url: apiPostUsers,
        data: {
            email,
            password
        }
    })
        .then(data => {
            let token = data.data.token;
            let id = data.data.id;
            localStorage.setItem("token", token)
            localStorage.setItem("id", id)
        })
        .then(() => {
            let token = localStorage.getItem("token");
            if (token != "undefined") {
                window.location.href = './main.html'
            }
        })
        .catch((e) => {
            const textError = "Ôi không ! Email hoặc mật khẩu không chính xác. Thử lại nhé"
            // console.log(e);
            // const start = e.response.data.search('<pre>')
            // const end = e.response.data.search('</pre>')
            // let message = e.response.data.slice(start + 5, end);
            toastAram(textError);
            loading.style.display = "none";
        })
}

formLogin.addEventListener('submit', e => {
    e.preventDefault()
    const email = formEmail.value
    const password = formPassword.value
    login(email, password)
    formLogin.value = "";
    formPassword.value = "";
})

tx2.onclick = () => {
    toastAram("Tính năng đang được bảo trì, thông cảm nhé")
}

function toastAram (e) {
    const toastMain = document.getElementById('toast');
    const toast = document.createElement('div');
    if(toastMain) {
        toast.classList.add('toast')
        toast.innerHTML = `
            <i class="fa fa-solid fa-bug error"></i>
            <p class="toast-text">${e}</p>
        `;
        toastMain.appendChild(toast);
        setTimeout(function(){
            toastMain.removeChild(toast);
        },8000)
    }
}