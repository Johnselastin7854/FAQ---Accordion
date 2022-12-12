const btn=document.querySelectorAll(".accordion__question");


btn.forEach((item)=>{
    item.addEventListener("click",()=>{

        // Open accordion item
        if(!item.classList.contains("open")){

            item.nextElementSibling.style.display="block";
            let accordionHeight=item.nextElementSibling.clientHeight;
            // console.log(accordionHeight)
            
            setTimeout(()=>{
                item.nextElementSibling.style.height= accordionHeight + "px";
                item.nextElementSibling.style.display="";

            },1)


            item.nextElementSibling.classList= "accordion__collapse collapsing";


            setTimeout(()=>{
                item.nextElementSibling.classList=" accordion__collapse open";
                // item.nextElementSibling.style.height="";
            }, 300)
        }

        //  close the accordion
        else{
            item.nextElementSibling.classList= "accordion__collapse collapsing";

            setTimeout(() => {
                item.nextElementSibling.style.height="0px";
            }, 1);

            setTimeout(()=>{
                item.nextElementSibling.classList=" accordion__collapse collapse";
                item.nextElementSibling.style.height="";
            }, 300)
        }
        item.classList.toggle("open");
       item.nextElementSibling.classList.toggle("open");
    })
})