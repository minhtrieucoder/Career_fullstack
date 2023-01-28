// Xử lý phần show form
function showRegister() {
    const form_signup = document.getElementsByClassName('form-signup');
    const form_signin = document.getElementsByClassName('form-signin');
    form_signup[0].classList.add('form-hide');
    form_signin[0].classList.remove('form-hide');
}

function showSignin() {
    const form_signup = document.getElementsByClassName('form-signup');
    const form_signin = document.getElementsByClassName('form-signin');
    form_signin[0].classList.add('form-hide');
    form_signup[0].classList.remove('form-hide');
}


// Xử lý phần register
function register() {
    const registerFullname = document.getElementById('registerFullname');
    const registerUsername = document.getElementById('registerUsername');
    const registerEmail = document.getElementById('registerEmail');
    const registerPassword = document.getElementById('registerPassword');
    const registerConfirmpassword = document.getElementById('registerConfirmpassword');
    const candidates = document.getElementById('candidates');
    const recruiters = document.getElementById('recruiters');
    
    // ktra null
    let notify = '';
    if (registerFullname.value == "")
        notify += 'Enter full name ... \n';
    if (registerUsername.value == "")
        notify += 'Enter username ... \n';
    if (registerEmail.value == "")
        notify += 'Enter email address ... \n';
    if (registerPassword.value == "")
        notify += 'Enter password ... \n';
    if (registerConfirmpassword.value == "")
        notify += 'Enter confirm password ... \n';
    if (notify != '') {
        alert(notify);
        return;
    }

    // ktra password == confirm password
    if (registerPassword.value != registerConfirmpassword.value) {
        alert('Incorrect password ...');
        return;
    }

    // ktra quyen - phan quyen
    let rose;
    if (candidates.checked == true) {
        rose = 3;
    }
    else {
        rose = 2;
    }
    // Role: phan quyen trang web : 1 - admin / 2 - recruiters / 3 - candidates


    // ma hoa password
    const password = registerPassword.value;
    const encryptedPassword = CryptoJS.AES.encrypt(password, '@tr.minhtrieu');


    // Call api 'POST' to create new user
    fetch('https://localhost:7005/backend-api/Users/CreateNewUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Fullname: `${registerFullname.value}`,
            UserName: `${registerUsername.value}`,
            EmailAddress: `${registerEmail.value}`,
            Password: `${encryptedPassword}`,
            Role: rose
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log("New user created: ", data);
        // Bien toan cuc luu giu thong tin user khi dang ky
        // window.globalUser = data;
        sessionStorage.setItem('globalUser', JSON.stringify(data));

        if (rose == 3) {
            location.replace('http://127.0.0.1:5500/candidates.html');
        }
        else {
            location.replace('http://127.0.0.1:5500/recruiters.html');
        }
    })
    .catch(error => {
        console.error("Error creating new user: ", error);
    });
    // Role: phan quyen trang web : 1 - admin / 2 - recruiters / 3 - candidates
}


// Xử lý phần sign in
function signin() {
    const signinUsername = document.getElementById('signinUsername');
    const signinEmail = document.getElementById('signinEmail');
    const signinPassword = document.getElementById('signinPassword');

    let notify = '';
    if (signinUsername.value == "")
        notify += 'Enter username ... \n';
    if (signinEmail.value == "")
        notify += 'Enter email address ... \n';
    if (signinPassword.value == "")
        notify += 'Enter password ... \n';
    if (notify != '') {
        alert(notify);
        return;
    }

    // Call api 'POST' to signin
    fetch(`https://localhost:7005/backend-api/Users/SignIn?email=${signinEmail.value}`, {
        method: 'POST',
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    })
    .then(data => {
        let accountExist = false;
        data.forEach(user => {
            // Giai ma password duoc luu trong csdl
            const bytes = CryptoJS.AES.decrypt(`${user.password}`, '@tr.minhtrieu');
            const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);
            if (decryptedPassword == signinPassword.value) {
                accountExist = true;
                // Bien toan cuc luu giu thong tin user khi dang nhap
                // window.globalUser = user;
                sessionStorage.setItem('globalUser', JSON.stringify(user));

                if (user.role == 1) {
                    location.replace('http://127.0.0.1:5500/admin.html');
                    return;
                }
                else if (user.role == 2) {
                    location.replace('http://127.0.0.1:5500/recruiters.html');
                    return;
                }
                else if (user.role == 3) {
                    location.replace('http://127.0.0.1:5500/candidates.html');
                    return;
                }
                // Role: phan quyen trang web : 1 - admin / 2 - recruiters / 3 - candidates
            }
        });
        if(!accountExist) alert('Khong ton tai tai khoan');
    })
    .catch(error => {
        console.error("Error creating new user: ", error);
        return;
    });
}