const menuSidebar = document.querySelector(".sidebar")
const main = document.querySelector(".main")

menuSidebar.addEventListener("click", () => {
    menuSidebar.classList.sidebar("active")
    main.classList.sidebar("active")
})
