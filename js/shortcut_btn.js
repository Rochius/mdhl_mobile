const addEventShortcut = ()=>{
    const shortcutBtn = document.querySelector(".shortcuts_title")
    const shortcutList = document.querySelector(".shortcuts_list")

    shortcutBtn.addEventListener('click', ()=>{
        if(shortcutList.classList.contains("hide")){
            shortcutList.classList.remove("hide")
        }else{
            shortcutList.classList.add("hide")
        }
    })
}

addEventShortcut()
