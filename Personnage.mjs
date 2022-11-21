export class Personnage{

    constructor(nom, sante, force){
        this.nom = nom;
        this.sante = sante;
        this.force = force;
      

        }
}

export class Aventurier extends Personnage {
    constructor(nom, sante, force, xp){
      super(nom, sante, force)
        this.xp = xp;

        }
}

export class Paladin extends Aventurier {
    constructor(nom, sante, force, xp, vertu){
      super(nom, sante, force, xp)
        this.vertu = vertu;
        }
}

export class Guerrier extends Aventurier {
    constructor(nom, sante, force, xp, rage){
      super(nom, sante, force, xp)
        this.rage = rage;
        }
       
}

export class Mage extends Aventurier {
    constructor(nom, sante, force, xp, mana){
      super(nom, sante, force, xp)
        this.mana = mana;
    }
}
let penOfChaos = new Aventurier('Pen Of Chaos', 20, 18, 5);
let Aerie = new Mage("Aerie", 20, 5, 15, 15);
console.log(penOfChaos);
console.log(Aerie);
