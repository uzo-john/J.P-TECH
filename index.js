function changeNavbar(){
    var navbar =document.getElementByClass("fixed-top");
    var scrollValue =window.scrolly;
    if(scrollValue < 150){
        navbar. classList. remove("fixed-top");
    } else{
        navbar. classList. add("navbar");
    }

    
}
    



window.addEventListener("scroll", changeNavbar);