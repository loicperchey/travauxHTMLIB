import{Guerrier} from './Personnage.mjs';

class Village{

    constructor(nbvillageois, nbbois, nbpierre, nbor, Batiments){
        this.villageois = nbvillageois;
        this.bois = nbbois;
        this.pierre = nbpierre;
        this.or = nbor;
        this.bat = Batiments;

        }
}

class GuerrierVillage extends Guerrier {
    constructor(nom, sante, force, xp, rage){
      super(nom, sante, force, xp)
        this.rage = rage;
        }
    }

let village = new Village(1,100,100, 10, ['HDV', 'Barde massacré']);
let guerrier = new GuerrierVillage('Conan', 20, 18, 150, 12);
console.log(village);
console.log(guerrier);
