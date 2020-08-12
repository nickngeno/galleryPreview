// document.addEventListener("load", myDreamcars, false);
function myDreamcars(){
    const imgHighlight = document.querySelector(".img-highlight");
    const previewImages = document.querySelectorAll(".gallery-previews img");
    // console.log(previewImages);

    previewImages.forEach(element => {
        element.addEventListener("click", function(){
            const smallSrc = element.src;
            // console.log(smallSrc)
            const bigSrc = smallSrc.replace("small", "big");
            imgHighlight.src = bigSrc;
            // console.log(imgHighlight);
            // remove car-active class from ech element
            previewImages.forEach(element => element.classList.remove("car-active"))
            // add class car-active to the clicked/active item
            element.classList.add("car-active")

        })
    })

}
// invoke the function
myDreamcars(); 

