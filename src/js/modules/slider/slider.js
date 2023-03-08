export default class Slider {
    constructor({container=null, btns=null,next=null, prev=null}={}) {
        this.container = document.querySelector(container);
        this.slides = this.container.children;
        this.btns = document.querySelectorAll(btns);
        this.slidIndex = 1
        this.prev = document.querySelector(prev)
        this.next = document.querySelector(next)
    }
    
}