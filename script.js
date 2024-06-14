class Ninja {
    constructor (nombre, salud){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    sayName (){
        console.log (`El nombre del ninja es: ${this.nombre}`);
    }

    showStats (){
        console.log (`El nombre: ${this.nombre} ${this.salud} ${this.fuerza} ${this.velocidad}`);
    }

    drinkSake() {
        this.salud += 10;
    }
}



const ninja1 = new Ninja("Hyabusa", 4);
ninja1.sayName();
ninja1.showStats();


//clase que hereda de Ninja
class Sensei extends Ninja {
    constructor(nombre,salud = 200){
        super (nombre, salud)
        this.sabiduria = 10; //agregamos un atributo con valor predetermnado
        this.velocidad = 10;
        this.fuerza = 10;
    }

    //Metodo que llama al metodo drink sake de la clase Ninja
    speakWisdom(){
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
        super.drinkSake();
    }

}

const Sensei1 = new Sensei ("Karen");
console.log (Sensei1);

Sensei1.speakWisdom();
Sensei1.showStats();
