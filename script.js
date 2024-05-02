const menuToggler = document.querySelector(".menu-toggler")
menuToggler.onclick = handleClick
const siteNav = document.querySelector(".site-nav")

function handleClick(event){
    siteNav.classList.toggle("open")
    menuToggler.classList.toggle("open")
}
