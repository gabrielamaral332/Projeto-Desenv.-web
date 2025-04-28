const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('click', () => {
        const page = box.getAttribute('data-page');
        window.location.href = page;
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const username = form.querySelector('input[type="text"]').value;
            const password = form.querySelector('input[type="password"]').value;

            if (username === "Amaral" && password === "Chj2T3do") {
                alert("Login bem-sucedido!");
                window.location.href = "Proj.html"; 
            } else {
                alert("Usuário ou senha incorretos.");
            }
        });
    }
});
