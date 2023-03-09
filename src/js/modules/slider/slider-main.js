import Slider from './slider'

export default class MainSlider extends Slider {
  constructor(btns) {
    super(btns)
  }

  showSlides(n) {
    if (n > this.slides.length) {
      this.slidIndex = 1
    } 
    if (n < 1) {
      this.slidIndex = this.slides.length
    }
    try {
      this.hanson.style.opacity = '0'
      if (n === 3) {
        this.hanson.classList.add('animated')
        setTimeout(() => {
          this.hanson.style.opacity = '1'
          this.hanson.classList.add('slideInUp')
        }, 3000)
      } else {
        this.hanson.classList.remove('slideInUp')
      }
    } catch (error) {}

    Array.from(this.slides).forEach((slide) => {
      slide.style.display = 'none'
    })
    this.slides[this.slidIndex - 1].style.display = 'block' // за счет чего значение slidIndex меняется при переключении слайдов?
  }

  plusSlides(n) {
    this.showSlides((this.slidIndex += n))
  }

  render() {
    try {
      this.hanson = document.querySelector('.hanson')
    } catch (error) {}

    this.btns.forEach((btn) => {
      btn.addEventListener('click', () => {
        this.plusSlides(1) //? увеличивается индекс показываемого слайда и вызывает  showSlides
      })

      btn.parentNode.previousElementSibling.addEventListener('click', (e) => {
        e.preventDefault()
        this.slidIndex = 1
        this.showSlides(this.slidIndex) //? клик на логотип и возвращение к первому слайду
      })
    })
    this.showSlides(this.slidIndex) //? повторно вызывает showSlides во время одного клика?
  }
}
