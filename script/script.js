console.log('test')


function nav(visible){
    
    let pages = document.querySelectorAll(".page")
    pages.forEach(page => {

        if(page.id===visible){
            if(page.classList.contains("displayNone")){
                page.classList.remove("displayNone")
            }
            if(!(page.classList.contains("display-flex"))){
                page.classList.add("display-flex")
            }
        }else{
            if(page.classList.contains("display-flex")){
                page.classList.remove("display-flex")
            }
            if(!(page.classList.contains("displayNone"))){
                page.classList.add("displayNone")
            }
        }

    })

}
