function executarCodigo() {
  const codigo = document.getElementById("codigo").value;
  const iframe = document.getElementById("resultado");
  iframe.srcdoc = codigo;
}

const toggleBtn = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  if (toggleBtn) toggleBtn.textContent = "☀️";
}

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      toggleBtn.textContent = "☀️";
    } else {
      localStorage.setItem("theme", "light");
      toggleBtn.textContent = "🌙";
    }
  });
}

document.querySelectorAll("[data-progress]").forEach(item => {
  const key = item.dataset.progress;
  item.checked = localStorage.getItem(key) === "true";

  item.addEventListener("change", () => {
    localStorage.setItem(key, item.checked);
  });
});

function atualizarProgresso() {
  const checks = document.querySelectorAll("[data-progress]");
  const progressBar = document.getElementById("progressBar");
  const progressText = document.getElementById("progressText");

  if (!checks.length || !progressBar) return;

  let concluido = 0;

  checks.forEach(check => {
    if (check.checked) concluido++;
  });

  const percentagem = Math.round((concluido / checks.length) * 100);

  progressBar.style.width = percentagem + "%";
  progressText.textContent = `Progresso: ${percentagem}%`;
}

/* Atualizar quando clicar */
document.querySelectorAll("[data-progress]").forEach(check => {
  check.addEventListener("change", atualizarProgresso);
});

/* Atualizar ao carregar a página */
window.addEventListener("load", atualizarProgresso);


// MENU MOBILE GLOBAL
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("mobileMenu");

if (hamburger && menu) {
  hamburger.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
}


