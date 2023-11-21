// const cardList = document.querySelectorAll(".card")

// cardList.forEach(el => {
//     let prev = e.target.children[1]
//     el.addEventListener("mouseenter", (e) => {
        
//         console.log(e.target.children[1]);
//         if(e.target.children[1].innerHTML != "Gaming") {
//             prev = e.target.children[1].innerHTML 
//         }
//         e.target.children[1].innerHTML = "Gaming"
//     })
//     el.addEventListener("mouseover", (e) => {
//         e.target.children[1].innerHTML = prev
//         console.log(prev);
//     })
// })
    

// scroll
const scrollBtn = document.querySelector(".scroll-btn")

document.addEventListener("scroll", (e) => {
    const lastKnownScrollPosition = window.scrollY;
    lastKnownScrollPosition < 100 ? scrollBtn.style.display = "none" : scrollBtn.style.display = "block"
})
