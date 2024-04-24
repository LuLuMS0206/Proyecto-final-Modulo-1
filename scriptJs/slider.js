class Slider {
    constructor(sliderId) {
        this.sliderElement = document.getElementById(sliderId);
        this.imagenElement = this.sliderElement.querySelector('img[name="imagen"]');
        this.imagenes = [
            "img/imagen1.jpg",
            "img/imagen2.jpg",
            "img/imagen3.jpg",
            "img/imagen4.jpg"
        ];
        this.contador = 0;
        this.init();
    }

    init() {
        this.imagenElement.src = this.imagenes[0];
        const sliderDerecho = this.sliderElement.querySelector('.slider-derecho');
        const sliderIzquierdo = this.sliderElement.querySelector('.slider-izquierdo');

        sliderDerecho.addEventListener("click", () => this.moverDerecha());
        sliderIzquierdo.addEventListener("click", () => this.moverIzquierda());
    }

    moverDerecha() {
        this.contador++;
        if (this.contador > this.imagenes.length - 1) {
            this.contador = 0;
        }
        this.imagenElement.src = this.imagenes[this.contador];
    }

    moverIzquierda() {
        this.contador--;
        if (this.contador < 0) {
            this.contador = this.imagenes.length - 1;
        }
        this.imagenElement.src = this.imagenes[this.contador];
    }
}

const slider = new Slider('section-slider');
