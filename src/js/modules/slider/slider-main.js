import Slider from './slider';

export default class MainSlider extends Slider {
    constructor(btns, moduleNext, modulePrev) {
        super(btns, moduleNext, modulePrev);
    }

    showSlides(n) {
        if (n > this.slides.length) {
            this.slideIndex = 1;
        }

        if (n < 1) {
            this.slideIndex = this.slides.length;
        }

        try{
            this.hanson.style.display = 'none';

            if (n === 3) {
                this.hanson.classList.add('animated');

                setTimeout(() => {
                    this.hanson.style.display = 'block';
                    this.hanson.classList.add('slideInUp');
                } ,3000);
            } else {
                this.hanson.classList.remove('slideInUp');
            }
        } catch(e) {}
        
        this.slides.forEach(slide => {
            slide.style.display = 'none';
        });

        this.slides[this.slideIndex - 1].style.display = 'block';
    }

    plusSlides(n , trigger = '') {
        try {
            trigger.forEach(item => {
                item.addEventListener('click', (e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    this.showSlides(this.slideIndex += n);
                });
            });
        } catch(e) {}

        this.showSlides(this.slideIndex += n);
    }

    bindTriggers() {
        this.btns.forEach(item => {
            item.addEventListener('click', () => {
                this.plusSlides(1);
            });

            item.parentNode.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();
                this.slideIndex = 1;
                this.showSlides(this.slideIndex);
            });
        });

        this.plusSlides(-1 , this.modulePrev);
        this.plusSlides(1 , this.moduleNext);

    }

    render () {
        if (this.container) {
            try{
                this.hanson = document.querySelector('.hanson');
            } catch(e) {}

            this.showSlides(this.slideIndex);
            this.bindTriggers();
        }
    }
}