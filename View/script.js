class Character  {
    constructor (name, ATK, def, HP, img, id) {
        this.name = name,
        this.ATK = ATK,
        this.def = def,
        this.HP = HP,
        this.img = img,
        this.id = id
    }//ATK def HP integer, id name img string
    
}
let CharacterStats = [
    new Character("chucky",500, 150, 750, "View/misc/chucky.jpg", "fighterChucky"),
]



// let selector = document.getElementById('fighterList');
// var value = select
// console.log(selector.value)

// fonctions pour afficher les images



class Weapon {
    constructor(name, attack){
        this.name = name,
        this.attack = attack
    }
    
}

//IA choix perso


function battle(){

}