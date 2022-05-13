class Character  {
    constructor (name, ATK, def, HP, img, id) {
        this.name = name,
        this.ATK = ATK,
        this.def = def,
        this.HP = HP,
        this.img = img,
        this.id = id
    }//ATK def HP integer, id name img string
    getName() {
        return this.name;
    }
    getATK(){
        return this.ATK;
    }
    setATK(ATK){
        this.ATK =ATK;
    }
    getDef(){
        return this.def;
    }
    setDef(def){
        this.def = def
    }
    getHP() {
        return this.HP;
    }
    setHP(HP){
        this.HP = HP;
    }
}
let CharacterStats = [
    new Character("chucky",500, 150, 750, "View/misc/chucky.jpg", "fighterChucky"),
]

class Arme {
    constructor(name, boost_ATK, boost_def) {
        this.name = name,
        this.boost_ATK = boost_ATK,
        this.boost_def = boost_def
    }
    getName(){
        return this.name
    }
    getBoostATK() {
        return this.boost_ATK
    }
    getBosstDef(){
        return this.boost_def
    }
}
document.getElementById("fighterChucky").onclick= showImageChucky;

function showImageChucky(){
    document.getElementById("chuckyImg").style.display = "block"
    document.getElementById("brahmsImg").style.display = "none"
    document.getElementById("annabelleImg").style.display = "none"
    document.getElementById("clownImg").style.display = "none"
    document.getElementById("babaImg").style.display = "none"
}




document.getElementById("fighterBrahms").onclick = showImageBrahms;

function showImageBrahms(){
    document.getElementById("brahmsImg").style.display = "block"
    document.getElementById("annabelleImg").style.display = "none"
    document.getElementById("chuckyImg").style.display = "none"
    document.getElementById("clownImg").style.display = "none"
    document.getElementById("babaImg").style.display = "none"
}




document.getElementById("fighterAnnabelle").onclick = showImageAnnabelle;

function showImageAnnabelle(){
    document.getElementById("annabelleImg").style.display = "block"
    document.getElementById("brahmsImg").style.display = "none"
    document.getElementById("chuckyImg").style.display = "none"
    document.getElementById("clownImg").style.display = "none"
    document.getElementById("babaImg").style.display = "none"
}



document.getElementById("fighterAnnabelle").onclick = showImageClown;

function showImageClown(){
    document.getElementById("clownImg").style.display = "block"
    document.getElementById("brahmsImg").style.display = "none"
    document.getElementById("annabelleImg").style.display = "none"
    document.getElementById("chuckyImg").style.display = "none"
    document.getElementById("babaImg").style.display = "none"
}




document.getElementById("fighterBaba").onclick = showImageBaba;

function showImageBaba(){
    document.getElementById("babaImg").style.display = "block"
    document.getElementById("brahmsImg").style.display = "none"
    document.getElementById("annabelleImg").style.display = "none"
    document.getElementById("chuckyImg").style.display = "none"
    document.getElementById("clownImg").style.display = "none"
}
// fonctions pour afficher les images



class Weapon {
    constructor(name, attack){
        this.name = name,
        this.attack = attack
    }
    
}

//IA choix perso




