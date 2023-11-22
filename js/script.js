// tabs

const navItem = document.querySelectorAll(".nav-item")

const addActive = (element) => {
        navItem.forEach(el => el.classList.remove("active"))
        element.target.parentNode.classList.add("active")
}

navItem.forEach(el => el.addEventListener("click", addActive))
    
// scroll
const scrollBtn = document.querySelector(".scroll-btn")

document.addEventListener("scroll", (e) => {
    const lastKnownScrollPosition = window.scrollY;
    lastKnownScrollPosition < 100 ? scrollBtn.style.display = "none" : scrollBtn.style.display = "block"
})

scrollBtn.addEventListener("click", () => window.scrollTo(0, 0))

// mobile nav

const navigationItemBtn = document.querySelectorAll(".navigation-item-btn")

navigationItemBtn.forEach(el => el.addEventListener("click", (element) => {
    navigationItemBtn.forEach(el => el.classList.remove("active"))
    element.target.classList.add("active")
}
))