const slides = document.querySelectorAll(".slide")

// console.log(slides)
var counter=0;
slides.forEach(
    (slide,index)=>{
        slide.style.left = '${index * 100}%'
    }
)

const goprev =() => {
    counter--
    
    slideImage()
}

const goNext =() => {
    counter++
    
    slideImage()
}

const slideImage =() => {
    slides.forEach(
        (slide) => {
            slide.style.transfrom ='transalteX(-${counter * 100}%)'
        }
    )
}