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


document.getElementById("fighterChucky").onclick= showImageChucky;

function showImageChucky(){
    document.getElementById("chuckyImg").style.display = "block"
}




document.getElementById("fighterBrahms").onclick = showImageBrahms;

function showImageBrahms(){
    document.getElementById("brahmsImg").style.display = "block"
}




document.getElementById("fighterAnnabelle").onclick = showImageAnnabelle;

function showImageAnnabelle(){
    document.getElementById("annabelleImg").style.display = "block"
}



document.getElementById("fighterAnnabelle").onclick = showImageClown;

function showImageClown(){
    document.getElementById("clownImg").style.display = "block"
}




document.getElementById("fighterBaba").onclick = showImageBaba;

function showImageBaba(){
    document.getElementById("babaImg").style.display = "block"
}
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