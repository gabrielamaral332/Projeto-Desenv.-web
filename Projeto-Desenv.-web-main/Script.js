document.addEventListener('DOMContentLoaded', () => {
  // Redirecionamento dos boxes
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => {
    box.addEventListener('click', () => {
      const page = box.getAttribute('data-page');
      window.location.href = page;
    });
  });

  // LOGIN
  const form = document.getElementById('loginForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = form.querySelector('input[type="text"]').value.trim();
      const password = form.querySelector('input[type="password"]').value.trim();

      const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

      // Verifica se existe algum usuário com mesmo nome e senha
      const usuarioEncontrado = usuarios.find(user => 
        user.nome.toLowerCase() === username.toLowerCase() &&
        user.senha === password
      );

      if (usuarioEncontrado) {
        alert("Login bem-sucedido!");
        localStorage.setItem("username", username);  // ou use email se preferir
        window.location.href = "Proj.html";
      } else {
        alert("Usuário ou senha incorretos.");
      }
    });
  }

  // LOGOUT
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('username');
      localStorage.removeItem('token'); // Se usar token
      window.location.href = 'index.html';
    });
  }

  // CADASTRO
  const cadastroForm = document.getElementById('cadastroForm');
  if (cadastroForm) {
    cadastroForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nome = document.getElementById('nome').value.trim();
      const telefone = document.getElementById('telefone').value.trim();
      const email = document.getElementById('email').value.trim();
      const senha = document.getElementById('senha').value.trim();

      if (nome && telefone && email && senha) {
        const novoUsuario = { nome, telefone, email, senha };

        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        usuarios.push(novoUsuario);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        alert("Cadastro realizado com sucesso!");
        window.location.href = "index.html";
      } else {
        alert("Preencha todos os campos corretamente.");
      }
    });
  }
});
