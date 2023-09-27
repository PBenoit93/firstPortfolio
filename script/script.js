console.log('test')


function nav(visible){
    
    let pages = document.querySelectorAll(".page")
    pages.forEach(page => {

        console.log(page.id)
        console.log(visible)

        if(page.id===visible){
            if(page.classList.contains("display-none")){
                page.classList.remove("display-none")
            }
            if(!(page.classList.contains("display-flex"))){
                page.classList.add("display-flex")
            }
        }else{
            if(page.classList.contains("display-flex")){
                page.classList.remove("display-flex")
            }
            if(!(page.classList.contains("display-none"))){
                page.classList.add("display-none")
            }
        }

    })

}