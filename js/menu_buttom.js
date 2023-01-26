const eventButtonMenu = ()=>{
    const menuIcon = document.querySelector(".icon_container")
    const menuContainer = document.querySelector(".nav_container")

    menuIcon.addEventListener('click', ()=>{
        if(menuContainer.classList.contains("hide")){
            menuContainer.classList.remove("animationMenuContainerOut")
            menuContainer.classList.remove("hide")
            menuContainer.classList.add("animationMenuContainerin")
            setTimeout(() => {
                menuContainer.classList.remove("animationMenuContainerin")
            }, 500);
        }
        else{
            menuContainer.classList.add("animationMenuContainerOut")
            setTimeout(()=>{
                menuContainer.classList.add("hide")
            },500)
        }
    })
}

eventButtonMenu()
