

class Personnage{
    opponent=null;
    attaques=["Coup violent", "Attaque du légionnaire", "This is Méchoui"];

    constructor(nom, hp, strength, endurance){
        this.nom=nom;
        this.hp=hp;
        this.strength=strength;
        this.endurance=endurance;
    }

    getHp() {
        return this.hp;
        }

    getStamina() {
        return this.hp;
        }

    setStamina(endurance) {
        this.endurance=endurance;
          }
    
    setHp(hp) {
        this.hp=hp;
        }
        
    subirDommage(montant_dommage){
        return this.montant_dommage=strength-endurance;
    }
   
    attaquer(target){
        this.target=hp-subirDommage();
        this.endurance = -2;
    }
    afficherAttaques(){
        console.log(this.attaques);
    }

    annonce(){
        return console.log(`Je m'appelle ${this.nom}, mes stats sont :\nhp : ${this.hp}\nstrength : ${this.strength}\nendurance: ${this.endurance} \mesattaques: ${this.attaques}`);
    }
}

let personnage = new Personnage("Conan", 100, 10, 25);
personnage.annonce();

