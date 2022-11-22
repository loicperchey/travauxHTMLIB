
class Animation{
    constructor(element){
        this.element=element;
    }


    deplacer(x, y){
    this.element.style.position = 'absolute';
    this.element.style.top = `${x}px`
    this.element.style.right =`${y}px`
    }

    agrandir(largeur, hauteur){
        this.element.style.width = `${largeur}px`;
        this.element.style.height = `${hauteur}px`;
    }

    changerCouleur(couleur)
    {
        this.element.style.color=couleur;
    }

   pivoter(degrees){
        this.element.style.transform = `rotate(${degrees}deg)`;
        }

    disparaitre(){
        this.element.style.display = 'none';
        }
        
    apparaitre(){
        this.element.style.display = 'block';
    }

    key() {
        let logKey = (e) => {
           this.element.innerText= 
           `Screen X/Y: ${e.screenX}, ${e.screenY}
            Client X/Y: ${e.clientX}, ${e.clientY}
            `;
        }
        document.addEventListener('mousemove', logKey);
    }
}