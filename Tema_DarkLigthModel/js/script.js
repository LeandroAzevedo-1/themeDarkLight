const changeThemeBtn = document.querySelector("#change-theme")
// Toggle dark mode
const toggleDarkMode = () => {
    document.body.classList.toggle("dark")
}

// Load light or dark mode - resgatar a preference de onde parou 
const loadTheme = () => { 
    const darkMode = localStorage.getItem("dark")

    if(darkMode) {
        toggleDarkMode()
    }
}
loadTheme()

changeThemeBtn.addEventListener("change", () => {
    toggleDarkMode()

    // Save or remove dark mode - preference usuario
    localStorage.removeItem("dark") // Se não tiver, não gera erro 
    if(document.body.classList.contains("dark")) {
        localStorage.setItem("dark", 1)
    }
})