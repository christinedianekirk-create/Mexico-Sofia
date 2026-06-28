// Bloqueo si el usuario está marcado como bloqueado
if (localStorage.getItem("blocked") === "true") {
    alert("Acceso bloqueado por la administradora.");
    window.location.href = "register.html";
}

// Protección de páginas internas
const protectedPages = ["panel-admin.html"];

const currentPage = window.location.pathname.split("/").pop();

if (protectedPages.includes(currentPage)) {
    const pin = localStorage.getItem("userPIN");
    const approved = localStorage.getItem("approvedName");

    if (!pin || !approved) {
        alert("Debes iniciar sesión primero.");
        window.location.href = "login.html";
    }
}
