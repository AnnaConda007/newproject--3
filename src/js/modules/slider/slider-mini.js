import Slider from "./slider";
export default class MiniSlider extends Slider{
constructor(container,next, prev,activeClass,animate,autoplay){
    super(container,next, prev,activeClass,animate,autoplay)
}

   decorizeSlides(){
    Array.from(this.slides).forEach(slide => {
            slide.classList.remove("card-active"); 
            console.log(this.activeClass)// выводит card-active
            if(this.animate){
                this.slides[0].querySelector(".card__title").style.opacity = "0.4"; 
                this.slides[0].querySelector(".card__controls-arrow").style.opacity = "0"
            }
        });
        this.slides[0].classList.add("card-active");
        if(this.animate){
            this.slides[0].querySelector(".card__title").style.opacity = "1";
            this.slides[0].querySelector(".card__controls-arrow").style.opacity = "1"
        }
    }


bindTrigers(){
    this.next.addEventListener("click",()=>{
        this.container.appendChild(this.slides[0])
        this.decorizeSlides()
    })


    this.prev.addEventListener("click",()=>{
        let active = this.slides[this.slides.length-1]
        this.container.insertBefore(active,this.slides[0])
        this.decorizeSlides()
    })
}

init(){
   this.container.style.cssText=`
   display:flex;
   flex-wrap:wrap;
   overflow:hiden;
   align-items:flex-start
   `
   this.bindTrigers()
   this.decorizeSlides()
}
}