let slides = document.querySelectorAll(`#slideshow img`);

let slideIndex = 0;

let slideInterval;


function showSlide(index){

    slides.forEach((slide,i)=>{
        if(i=== index){
            slide.style.display =`block`;
        }
        else{
            slide.style.display = `none`;
        }
    })
}

// Automation Starts


function startSlideshow(){
    
          slideInterval = setInterval(()=>{
            slideIndex =(slideIndex + 1)% slides.length;

            showSlide(slideIndex);

          },2000)

        }


function stopSlideShow(){
    clearInterval(slideInterval);
    
}

function toggleSlideshow(){
    
    if(slideInterval){
        stopSlideShow();
        slideInterval = null;
    }
    else{
        startSlideshow();
    }
}

function nextSlidshow(){
    stopSlideShow();
    slideIndex = (slideIndex + 1)% slides.length;
    showSlide(slideIndex);
}
 function  prevSlidshow(){
    stopSlideShow();
    slideIndex = (slideIndex - 1 + slides.length)% slides.length;
    showSlide(slideIndex);
}


showSlide(slideIndex);
