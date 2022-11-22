

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
        return this.endurance;
        }

    setStamina(endurance) {
        this.endurance=endurance;
          }
    
    setHp(hp) {
        this.hp=hp;
        }
        
    subirDommage(montant_dommage){
        this.hp-=montant_dommage;
    }
   
    attaquer(target){
        target.subirDommage(this.strength);
        this.endurance -=2;
    }
   
    annonce(){
        console.log(`Je m'appelle ${this.nom}, mes stats sont :\nhp : ${this.hp}\nstrength : ${this.strength}\nendurance: ${this.endurance} \mesattaques: ${this.attaques}`);
    }

    ajouterAttaque(valeurAPousser){
        this.attaques.push(valeurAPousser);
    }

    /*joueurTour(choix){
        return array.get(choix);
    }
    */
}

let personnage1 = new Personnage("Conan", 100, 10, 25);
let personnage2 = new Personnage("Sabrina", 100, 5, 10);
personnage1.annonce();
personnage1.ajouterAttaque("La chèvre chauve");
personnage1.annonce();
class Spell{

    constructor(nom, damage, staminacost, castcallback){
        this.nom=nom;
        this.damage=damage;
        this.staminacost=staminacost;
        this.castcallback=castcallback;
    }

    cast(caster, target){
        caster.setStamina(caster.getStamina()-this.staminacost);
        target.subirDommage(this.damage);
        console.log(`Le sort ${this.nom} inflige :\nbdegats : ${this.damage}\ncaster : ${this.caster}\nstaminacoast: ${this.target}`);
        setTimeout(()=>this.castcallback(spell), 500);
    }
}

function callbackSpell(caster, target){
    console.log(`Le sort ${caster.getStamina()} inflige :\nbdegats : ${target}`);
}

let spell = new Spell("boule de feu", 10, 5, callbackSpell);
spell.cast(personnage1, personnage2);
