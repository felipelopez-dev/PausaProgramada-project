const loginKeyboard = (e) => {
    const loginUserKey = document.querySelector('.login--user').value.trim();
    const loginPasswordKey = document.querySelector('.login--password').value.trim();

    if (e.key === 'Enter' && loginUserKey === 'adm' && loginPasswordKey === 'adm2025*') {
        e.preventDefault();
        sessionStorage.setItem('usuarioLogado', 'true');
        window.location.replace('../index.html');
    }

    if (e.key === 'Enter' && loginUserKey === 'monitor' && loginPasswordKey === 'monitor2025*') {
        e.preventDefault();
        sessionStorage.setItem('usuarioLogado', 'true');
        window.location.replace('../index2.html');
    }

    if (e.key === 'Enter' && loginUserKey === 'Tunel' && loginPasswordKey === 'tcm1234') {
        e.preventDefault();
        sessionStorage.setItem('usuarioLogado', 'true');
        window.location.replace('../index3.html');
    }
};

document.addEventListener('keydown', loginKeyboard);